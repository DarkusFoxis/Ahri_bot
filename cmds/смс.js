const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

module.exports.run = async (bot,message,args) => {
  message.delete();
  let u = profile[message.author.id];
  if (u.msgg == 1) {
    let embed = new Discord.MessageEmbed()
    message.author.send(`${message.author.username}: ${u.mmm}`)
    u.msgg = 0
    u.mmm = "Сообщений нет."
    bot.send(embed);
  } else {
    let embed = new Discord.MessageEmbed()
    message.author.send (`${message.author.username}: ${u.mmm}`)
    bot.send(embed)
  }
};
module.exports.help = {
    name: "sms",
    aliases: [""]
};