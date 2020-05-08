const { Composer } = require('micro-bot')
const bot = new Composer()

const r = (msg) => ({ reply }) => reply(msg)
const your_mom = r('YOUR MOM!')


bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Help message'))
bot.hears([/.*hi.*/g,/.*hello.*/g], ({ reply }) => reply('Shut up'))
bot.hears(/who/g, your_mom)
bot.hears(/milosz/g, r('Allora'))
bot.hears(/jose/g, r('Btw jose is cool'))
bot.hears(/marco/g, r('the trap artist'))
bot.hears(/janina/g, r('tea boobs'))
bot.hears(/mirjami/g, r('nerd lol adictic'))
bot.hears(/maeva/g, r('Gorlami... com\'è?... scusi...'))
bot.hears(/olli/g, r('YES I AM'))
bot.on('sticker', ({ reply }) => reply('lol'))

module.exports = bot
