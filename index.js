const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'imnotjules.aternos.me', // optional
  port: 62426, // optional
  username: 'TIGR120', // E-mail и пароль используются для, // лицензионных серверов
  version: "1.13.2", // При установленном значении false версия будет выбрана автоматически, используйте пример выше чтобы выбрать нужную версию
})

const mineflayerViewer = require('prismarine-viewer').mineflayer
bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3008, firstPerson: true })
})

bot.on("login", async => {
    console.log("Bot in game")
    bot.chat("Олег пидорас!")
    })

// Прослушивание ошибок и причин отключения от сервера:
bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
bot.on('error', err => console.log(err))