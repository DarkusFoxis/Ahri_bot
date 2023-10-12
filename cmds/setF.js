const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

module.exports.run = async (bot,message,args) => {
  let u = profile[message.author.id];
  let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник 
  let o = profile[member.id];
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('У вас нет прав!')
  message.delete();
  if (args[0]) {
    if (args[1]) {
    var num = parseInt(args[1])
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} выдал ${member} ${num} Foxкойнов`)
    .setColor("#b78af5")
    bot.send(embed);
    o.fcoin += num
  } else {
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} Укажите кол-во Foxкойнов!`)
    .setColor("#b78af5")
    bot.send(embed);
  }
}
};
module.exports.help = {
    name: "setf"
};