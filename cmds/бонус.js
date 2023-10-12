const Discord = module.require("discord.js");
const talkedRecently = new Set();

let profile = require('../profile.json');
let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
  let o = inf[message.author.id];
  if (o.blok == 1) return bot.send(`Вы не в системе атак.`)
  message.delete();
  if (talkedRecently.has(message.author.id)) {
    let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)}. Вы уже забрали бонус. Подождите 12 часов, до следующего сбора.`)
  .setColor("#f10b0b")
  .setThumbnail(message.author.displayAvatarURL())
  bot.send(embed);
  } else {
  var min = 1;
  var max = 4;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  if (random == 1) {
    var min = 100;
    var max = 400;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    let u = profile[message.author.id];
    let mony = random * u.vip
    let embed = new Discord.MessageEmbed()
    .setDescription (`${message.guild.member(message.author.id)}, вашим бонусом на сегодня являются монетки, в количестве ${mony}`)
    .setColor("#f10b0b")
    .setThumbnail(message.author.displayAvatarURL())
    u.coins += mony
    bot.send(embed)
    talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 43200000);
  } else if (random == 2) {
    var min = 50;
    var max = 20;
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    let u = profile[message.author.id];
    let xpi = rand * u.vip
    let embed = new Discord.MessageEmbed()
    .setDescription (`${message.guild.member(message.author.id)}, вашим бонусом на сегодня являются опыт, в количестве ${xpi}`)
    .setColor("#f10b0b")
    .setThumbnail(message.author.displayAvatarURL())
    u.xp += xpi
    bot.send(embed)
    talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 43200000);
  } else if (random == 3) {
    var min = 10;
    var max = 20;
    var krist = Math.floor(Math.random() * (max - min + 1)) + min;
    let u = profile[message.author.id];
    let kristal = krist * u.vip
    let embed = new Discord.MessageEmbed()
    .setDescription (`${message.guild.member(message.author.id)}, вашим бонусом на сегодня являются кристаллы, в количестве ${kristal}`)
    .setColor("#f10b0b")
    .setThumbnail(message.author.displayAvatarURL())
    u.gem += kristal
    bot.send(embed)
    talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 43200000);
  } else if (random == 4) {
    let u = profile[message.author.id];
    let embed = new Discord.MessageEmbed()
    .setDescription (`${message.guild.member(message.author.id)}, вашим бонусом на сегодня является + 1 Foxкоин. Вот это подарочек :0`)
    .setColor("#f10b0b")
    .setThumbnail(message.author.displayAvatarURL())
    u.fcoin ++
    bot.send(embed);
    talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 43200000);
  }
};
};

module.exports.help = {
    name: "bonus",
    aliases: [""]
};
