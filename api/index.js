const { Composer } = require('micro-bot')
const bot = new Composer()

const r = (msg) => ({ reply }) => reply(msg)
const your_mom = r('YOUR MOM!')

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Help message'))
bot.hears('hi', ({ reply }) => reply('Shut up'))
bot.on('sticker', ({ reply }) => reply('👍'))
bot.on('message', ({ reply }) => reply('👋'))
bot.hears('who', your_mom)
bot.hears('who\' fault', r('JOSE'))
bot.hears('milosz', r('Did you say baloons?')
bot.hears('jose', r('Btw jose is cool')
bot.hears('olli', r('YES I AM'))

module.exports = bot
