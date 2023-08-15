const TelegramBot = require("node-telegram-bot-api")

const bot = new TelegramBot("5732222616:AAHWAzjRVh3YoTOwF71LUElLrKrHD632SPo", {
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