const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('У вас нет прав!')
    message.channel.send(`pong! Это сообщение было получено ${Date.now() -  message.createdTimestamp} ms`);
};
module.exports.help = {
    name: "ping",
    aliases: [""]
};
