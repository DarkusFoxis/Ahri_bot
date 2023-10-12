const Discord = module.require("discord.js");
const talkedRecently = new Set();

let inf = require('../inf.json');
let effect = require('../effect.json');

module.exports.run = async (bot,message,args) => {
  let o = inf[message.author.id];
  if (o.blok == 1) return bot.send(`Вы не в системе атак.`)
  message.delete();
  if (talkedRecently.has(message.author.id)) {
    let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)}. Вы уже забрали abobusа. Подождите 1 минуту, до следующего сбора.`)
  .setColor("#f10b0b")
  .setThumbnail(message.author.displayAvatarURL())
  bot.send(embed);
  } else {
  var min = 1;
  var max = 4;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  
    talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 60000);
  }
};

module.exports.help = {
    name: "bonus",
    aliases: [""]
};
