const Discord = module.require("discord.js");

let inv = require('../inv.json');
let prof = require('../prof.json');
let crt = require('../craft.json');

module.exports.run = async (bot,message,args) => {
  message.delete();
  let u = inv[message.author.id];
  let t = prof[message.author.id];
  let y = crt[message.author.id];
  let embed = new Discord.MessageEmbed()
  .setDescription('Ваш инвентарь:')
  .setColor("#ef0aff")
  .setThumbnail(message.author.displayAvatarURL())
  .addField("Зелье_опыта:", u.xp_up)
  .addField("Зелье-максимального-лечения:", u.hp_max)
  .addField("Кофе:", u.cofee)
  .addField("Чай:", u.tea)
  .addField("Зелье_жизней:",u.hel)
  .addField("Камень огня:", y.fire_ston)
  .addField("Камень тьмы:", y.dark_ston)
  .addField("Магический камень:", y.mag_ston)
  .addField("Палки:", y.stick)
  bot.send(embed);
};
module.exports.help = {
    name: "inv",
    aliases: [""]
};