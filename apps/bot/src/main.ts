import { BotClient } from "@phasejs/core/client"
import { loadApp } from "@phasejs/loaders"
import { logsPlugin } from "@phasejs/logs"
import { Client, GatewayIntentBits, Options, Partials } from "discord.js"

import { blacklistPlugin } from "@plugin/blacklist"
import { musicPlugin } from "@plugin/music"
import { voicePlugin } from "@plugin/voice"
import { bridgeServerPlugin } from "@repo/trpc/server"

import { blacklistOptions } from "~/lib/blacklist"
import { botConfig } from "~/lib/config"
import { db } from "~/lib/db"
import { Emojis, emojiSyncPlugin } from "~/lib/emojis"
import { env } from "~/lib/env"

import { ConfigStore } from "~/structures/stores/ConfigStore"
import { GuildStore } from "~/structures/stores/GuildStore"
import { InviteStore } from "~/structures/stores/InviteStore"
import { StreamerStore } from "~/structures/stores/StreamerStore"

// create the underlying discord.js client
const djsClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
  ],
  partials: [
    Partials.Channel,
    Partials.GuildMember,
    Partials.Message,
    Partials.Reaction,
    Partials.User,
  ],
  sweepers: {
    ...Options.DefaultSweeperSettings,
    messages: {
      interval: 60 * 60,
      lifetime: 60 * 30,
    },
  },
  makeCache: Options.cacheWithLimits({
    ...Options.DefaultMakeCacheSettings,
    ReactionManager: {
      maxSize: 0,
      keepOverLimit: (reaction) => {
        const reactionsToKeep = [Emojis.GiveawayReaction]
        return !!(
          reaction.me &&
          reaction.emoji.name &&
          reactionsToKeep.includes(reaction.emoji.name)
        )
      },
    },
  }),
})

// create the phasejs client wrapper
const phaseClient = new BotClient(djsClient, {
  plugins: [
    logsPlugin(botConfig),
    blacklistPlugin(blacklistOptions),
    voicePlugin(),
    musicPlugin(),
    emojiSyncPlugin(),
    bridgeServerPlugin({ db }),
  ],
  stores: {
    config: new ConfigStore(),
    guilds: new GuildStore(),
    invites: new InviteStore(),
    streamers: new StreamerStore(),
  },
})

// set the token early so stores can make api calls
phaseClient.client.token = env.DISCORD_TOKEN
phaseClient.client.rest.setToken(env.DISCORD_TOKEN)

// start the client
const app = await loadApp(phaseClient)
await phaseClient.init(app)
