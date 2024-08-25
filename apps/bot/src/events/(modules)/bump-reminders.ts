import { EmbedBuilder } from "discord.js"
import { BotEventBuilder } from "phasebot/builders"

import { ModuleId } from "@repo/config/phase/modules.ts"

import { cache } from "~/lib/cache"
import { db } from "~/lib/db"
import { PhaseColour } from "~/lib/enums"

export default new BotEventBuilder()
  .setName("messageCreate")
  .setExecute(async (_, message) => {
    if (message.interaction?.commandName !== "bump") return

    const guildDoc = await cache.guilds.get(message.guildId!)
    const moduleConfig = guildDoc?.modules?.[ModuleId.BumpReminders]

    if (!guildDoc || !moduleConfig?.enabled) return

    await db.reminders.create({
      name: "Bump Reminder",
      guild: message.guildId,
      channel: message.channelId,
      content: moduleConfig.reminderMessage,
      delay: moduleConfig.time,
      mention: moduleConfig.mention,
    })

    await message
      .reply({
        embeds: [
          new EmbedBuilder()
            .setColor(PhaseColour.Primary)
            .setTitle("Bump Reminder")
            .setDescription(moduleConfig.initialMessage),
        ],
      })
      .catch((error) => {
        console.error(
          `Failed to send a bump reminder in channel ${message.channelId} in guild ${message.guildId}:`,
          error,
        )
      })
  })
