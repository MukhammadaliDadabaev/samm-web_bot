const TelegramBot = require("node-telegram-bot-api")
const token = "5732222616:AAHWAzjRVh3YoTOwF71LUElLrKrHD632SPo"

const bot = new TelegramBot(token, {
  polling: true
})

const webNodeBot = () => {
  bot.on("message", async msg => {
    const chatId = msg.chat.id
    const text = msg.text

    if (text === "/start") {
      await bot.sendMessage(chatId, "Xush kelibsiz kurs sotib olish botiga...")
    }
  })
}

webNodeBot()