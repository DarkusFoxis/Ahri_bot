const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    message.delete()
    message.author.send(`Неужели ты хочешь поддержать сервер копейкой? Ну что же, спасибо. Я признателен. Ссылка рядом.
    Ссылка: https://www.donationalerts.com/r/darkusfoxis`)
};
module.exports.help = {
    name: "donate",
};