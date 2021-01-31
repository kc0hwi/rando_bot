require('dotenv').config()
const Discord = require('discord.js')
const bot = new Discord.Client()

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

const prefix = '?random'

console.log(TOKEN)

bot.login(TOKEN)

// listen for ready event when conected
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`)
})


// random int
function getRandomNum(size) {
    return Math.floor(Math.random() * Math.floor(size))
}


bot.on('message', msg => {
    if (msg.content === '!random') {
        const number = Math.random()
        msg.channel.send(number.toString())
        //msg.reply('pong')
    }
})

bot.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return

    //const gameList = msg.content.slice(prefix.length).trim().split(',')
    const gameList = msg.content.slice(prefix.length).split(',')
    const gameListSize = gameList.length
    const randomIndex = getRandomNum(gameListSize)
    const randomGame = gameList[randomIndex]
    //msg.channel.send(`You should play: ${randomGame}`)
    msg.channel.send(randomGame)


})

