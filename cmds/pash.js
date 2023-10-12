const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    message.delete()
    bot.send("Откуда ты узнал команду?! Разработка!")
};

module.exports.help = {
    name: "pash",
};