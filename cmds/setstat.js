const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

module.exports.run = async (bot,message,args) => {
    let u = profile[message.author.id];
    message.delete()
    let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)}. Ваш статус обновлён.`)
  .setColor("#ff0067")
  u.stat = args.join(" ")
    bot.send(embed);
};
module.exports.help = {
    name: "setstat",
    aliases: [""]
};