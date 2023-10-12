const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

module.exports.run = async (bot,message,args) => {
  message.delete();
  let u = profile[message.author.id];
  if (u.msgg > 0) {
    let gg = "f!sms"
    let embed = new Discord.MessageEmbed()
    .setDescription('Ваши сообщения:')
    .setColor("#47ff9b")
    .setThumbnail(message.author.displayAvatarURL())
    .addField("Сообщения", u.msgg)
    .addField("Чтобы прочитать сообщение, напишите:", gg)
    bot.send(embed);
  } else {
    let embed = new Discord.MessageEmbed()
  .setDescription('Ваши сообщения:')
  .setColor("#47ff9b")
  .setThumbnail(message.author.displayAvatarURL())
  .addField("Сообщения", u.msgg)
  bot.send(embed);
  }
};
module.exports.help = {
    name: "mes",
    aliases: [""]
};