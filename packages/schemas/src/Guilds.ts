import mongoose from "mongoose"

export const GuildSchema =
  (mongoose.models["Guilds"] as mongoose.Model<Guild>) ||
  mongoose.model<Guild>(
    "Guilds",
    new mongoose.Schema<Guild>({
      id: String, // Guild ID
      admins: Array, // Dashboard admin IDs
      commands: Object, // Commands config
      modules: Object, // Modules config
      news_channel: String, // Bot news channel
    }),
  )

export type Guild = {
  id: string
  admins: string[]
  commands: Record<string, GuildCommand> | undefined
  modules: Partial<GuildModules> | undefined
  news_channel: string | undefined
}

export type GuildCommand = {
  disabled: boolean // whether the command is disabled
  allow: (`user:${string}` | `role:${string}`)[] // the users/roles allowed to use the command
  deny: (`user:${string}` | `role:${string}`)[] // the users/roles denied to use the command
}

export type GuildModules = {
  AuditLogs: GuildModuleAuditLogs
  AutoMessages: GuildModuleAutoMessages
  AutoRoles: GuildModuleAutoRoles
  BumpReminders: GuildModuleBumpReminders
  Forms: GuildModuleForms
  JoinToCreates: GuildModuleJoinToCreates
  Levels: GuildModuleLevels
  ReactionRoles: GuildModuleReactionRoles
  Tickets: GuildModuleTickets
  TwitchNotifications: GuildModuleTwitchNotifications
  Warnings: GuildModuleWarnings
  WelcomeMessages: GuildModuleWelcomeMessages
}

export type GuildModule<T extends keyof GuildModules> = GuildModules[T]

export type GuildModuleAuditLogs = {
  enabled: boolean
  channels: {
    server?: string // channels, roles, boosts, emojis, server settings
    messages?: string // deletes, edits, mentions
    voice?: string // joins, leaves, mutes, deafens
    invites?: string // creates, expires, usage
    members?: string // joins, leaves, role changes, nickname changes
    punishments?: string // warns, unwarns, bans, tempbans, timeouts
  }
}

export type GuildModuleAutoMessages = {
  enabled: boolean
  messages: {
    name: string // the name of the message
    channel: string // the channel to send the message
    message: string // the message to send
    mention?: string // the role to mention
    interval: number // the interval to send the message
  }[]
}

export type GuildModuleAutoRoles = {
  enabled: boolean
  roles: string[]
}

export type GuildModuleForms = {
  enabled: boolean
  channel: string
  forms: {
    id: string
    name: string
    channel: string
    questions: string[]
  }[]
}

export type GuildModuleBumpReminders = {
  enabled: boolean
  time: number // e.g. 7200000 == 2 hours
  initialMessage: string
  reminderMessage: string
}

export type GuildModuleJoinToCreates = {
  enabled: boolean
  active: string[]
  channel: string
  category: string
}

export type GuildModuleLevels = {
  enabled: boolean
  channel: string // "dm" == dm user; "reply" == reply to msg; id == send to id
  message: string
  mention: boolean
  background?: string
  roles: {
    level: number
    role: string
  }[]
}

export type GuildModuleReactionRoles = {
  enabled: boolean
  channel: string
  message: string
  reactions: {
    emoji: string
    role: string
  }[]
}

export type GuildModuleTickets = {
  enabled: boolean
  channel: string
  max_open?: number
  tickets: {
    id: string
    name: string
    message: string
    mention?: string
  }[]
}

export type GuildModuleTwitchNotifications = {
  enabled: boolean
  streamers: {
    id: string // the id of the streamer
    channel: string // the channel to send the notification
    events: ("stream.online" | "stream.offline")[] // the events to listen to
    mention?: string // the mention to use
  }[]
}

export type GuildModuleWarnings = {
  enabled: boolean
  warnings: string[]
}

export type GuildModuleWelcomeMessages = {
  enabled: boolean
  channel: string
  message: string
  mention: boolean
  card: {
    enabled: boolean
    background?: string
  }
}
