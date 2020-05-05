const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(({ reply }) => reply('Welcome'))
bot.help(({ reply }) => reply('Send me a sticker'))
bot.on('sticker', ({ reply }) => reply('👍'))
bot.hears('hi', ({ reply }) => reply('Hey there'))
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))

bot.launch()