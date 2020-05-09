const { Composer } = require('micro-bot')
const bot = new Composer()

const r = (msg) => ({ reply }) => reply(msg)
const your_mom = r('YOUR MOM!')

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Help message'))
bot.hears([/(^| .*)hi .*/gi,/(^| .*)hello .*/gi, /(^| .*)hei .*/gi], ({ reply }) => reply('Shut up'))
bot.hears(/(^| .*)who .*/gi, your_mom)
bot.hears(/(^| .*)milosz .*/gi, r('Allora'))
bot.hears(/(^| .*)jose .*/gi, r('Btw jose is cool'))
bot.hears(/(^| .*)marco .*/gi, r('the trap artist'))
bot.hears(/(^| .*)janina .*/gi, r('tea boobs'))
bot.hears(/(^| .*)mirjami .*/gi, r('nerd lol adictic'))
bot.hears(/(^| .*)maeva .*/gi, r('Gorlami... com\'è?... scusi...'))
bot.hears(/(^| .*)olli .*/g, r('YES I AM'))
bot.on('sticker', ({ reply }) => reply('lol'))

module.exports = bot
