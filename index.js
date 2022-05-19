const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.start((ctx) => ctx.reply('Привіт, це чат-бот путівника по БТЕС'))
bot.start((ctx) => ctx.reply(`Привіт, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'гість'}, це чат-бот путівника по БТЕС`))
bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.launch()


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))