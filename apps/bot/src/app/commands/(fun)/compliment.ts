import { BotCommandBuilder } from "@phasejs/builders"

export default new BotCommandBuilder()
  .setName("compliment")
  .setDescription("Gives you a compliment.")
  .setExecute(async (interaction) => {
    const complimentIndex = Math.floor(Math.random() * compliments.length)
    const compliment = compliments[complimentIndex]!
    return void interaction.reply(compliment)
  })

const compliments = [
  "You have a great sense of humor.",
  "You light up the room.",
  "You're incredibly thoughtful.",
  "You're so creative.",
  "You have a contagious smile.",
  "You have a kind heart.",
  "You are such a good friend.",
  "You're so hardworking.",
  "You are an inspiration to others.",
  "You're a great listener.",
  "You bring out the best in people.",
  "You have amazing ideas.",
  "You're so supportive.",
  "You have a brilliant mind.",
  "You are very reliable.",
  "You have such a positive outlook.",
  "You are always so helpful.",
  "You're so open-minded.",
  "You're a natural leader.",
  "You handle challenges so well.",
  "You are such a good problem-solver.",
  "You have a calming presence.",
  "You make people feel valued.",
  "You are so resourceful.",
  "You're a joy to be around.",
  "You have excellent taste.",
  "You have a fantastic sense of style.",
  "You are so resilient.",
  "You always know how to make people laugh.",
  "You radiate positivity.",
  "You're incredibly trustworthy.",
  "You make a difference in people's lives.",
  "You are always so understanding.",
  "You have a way of making things better.",
  "You're so passionate.",
  "You always lift others up.",
  "You're great at what you do.",
  "You make people feel special.",
  "You have such a unique perspective.",
  "You're very encouraging.",
  "You're so humble.",
  "You're always learning and growing.",
  "You are very empathetic.",
  "You are incredibly thoughtful.",
  "You have an amazing attention to detail.",
  "You're a breath of fresh air.",
  "You have a great energy.",
  "You're always so considerate.",
  "You inspire others to be their best.",
  "You handle stress with grace.",
  "You're so patient.",
  "You make everyone feel welcome.",
  "You're so down-to-earth.",
  "You have an adventurous spirit.",
  "You are very generous.",
  "You bring so much joy to others.",
  "You have a strong work ethic.",
  "You are always striving to be better.",
  "You make difficult tasks look easy.",
  "You're incredibly organized.",
  "You bring out the best in situations.",
  "You are very adaptable.",
  "You always keep a level head.",
  "You are incredibly thoughtful.",
  "You're so dedicated.",
  "You have a great attitude.",
  "You are always so respectful.",
  "You have an amazing sense of self-awareness.",
  "You are so compassionate.",
  "You are a quick learner.",
  "You think outside the box.",
  "You're very courageous.",
  "You're an amazing communicator.",
  "You're a ray of sunshine.",
  "You are always willing to lend a hand.",
  "You have a great attention to detail.",
  "You make the world a better place.",
  "You are very open-hearted.",
  "You have a contagious enthusiasm.",
  "You're always willing to go the extra mile.",
  "You're a true original.",
  "You stay true to yourself.",
  "You have great instincts.",
  "You're always up for a challenge.",
  "You have a calming influence.",
  "You are very considerate of others' feelings.",
  "You bring warmth to every situation.",
  "You are a great problem-solver.",
  "You are always striving for excellence.",
  "You are full of wisdom.",
  "You are very level-headed.",
  "You're so good at finding solutions.",
  "You have a unique perspective on things.",
  "You are very insightful.",
  "You're such a kind person.",
  "You're always fun to be around.",
  "You have a great balance of passion and calm.",
  "You bring so much value to every conversation.",
  "You're so thoughtful in your approach.",
  "You inspire others to be their best selves.",
  "You have such a refreshing outlook on life.",
  "You have a natural talent for leadership.",
  "You are so genuine.",
]
