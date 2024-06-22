import { BotCommandBuilder } from "phasebot/builders"

export default new BotCommandBuilder()
  .setName("rps")
  .setDescription("Play a game of rock-paper-scissors.")
  .addStringOption((option) =>
    option
      .setName("choice")
      .setDescription("Your move.")
      .setRequired(true)
      .setChoices(
        { name: "Rock", value: "rock" },
        { name: "Paper", value: "paper" },
        { name: "Scissors", value: "scissors" },
      ),
  )
  .setExecute((interaction) => {
    const choices = ["rock", "paper", "scissors"]
    const outcomes = [`It's a tie! GG. 🤝`, `You win! GG. 🤝`, `I win! GG. 🤝`]
    const choice = interaction.options.getString("choice", true)
    const move = Math.floor(Math.random() * 3)
    const outcomeIndex = (choices.indexOf(choice) - move + 3) % 3

    interaction.reply(
      `You chose **${choice}** and I chose **${choices[move]}**.\n${outcomes[outcomeIndex]}`,
    )
  })
