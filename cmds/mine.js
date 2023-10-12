const Discord = module.require("discord.js");
const fs = require("fs");
const talkedRecently = new Set();

let profile = require('../profile.json');
let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
  let o = inf[message.author.id];
  message.delete();
  if (o.block == 1) return bot.send(`Вы не в системе атак.`)
  if (talkedRecently.has(message.author.id)) {
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)}. Ваш компутатор устал. Подождите 3 часа`)
  .setColor("#f10b0b")
  .setThumbnail(message.author.displayAvatarURL())
  bot.send(embed);
  } else {
  var min = 1;
  var max = 5;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  let u = profile[message.author.id];
  if(u.lvl < 5) return bot.send(`У вас низкий уровень!`);
  let sum = random * u.vip
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)}. Майнинг завершён!`)
  .setColor("#47ff9b")
  .addField("За майн ты получил", sum)
  .setThumbnail(message.author.displayAvatarURL())
  u.fcoin += sum
  bot.send(embed);
  talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 10800000);
}
};
module.exports.help = {
    name: "mine",
    aliases: [""]
};
