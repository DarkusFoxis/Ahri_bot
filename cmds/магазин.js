const Discord = module.require("discord.js");
let profile = require('../profile.json');

module.exports.run = async (bot,message) => {
  let y = profile[message.author.id];

  let sum = y.vip * 40
  let xp = "666 монеток";
  let lvl = "50 Foxкоин";
  let cof = "200 монет";
  let te = "100 монеток";
  let vp = `${sum} Foxкойнов`;
  let ir = "100 кристаллов";
  let oo = "500 монет";
  let rr = "50 кристалликов";
  let rai = "1500 монет"
  let yyy = "50000 монет"
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription('Магазин всякой всячаны[1]:')
  .setColor("#47ff9b")
  .addField("Зелье_опыта[1]:", xp)
  .addField("Зелье-максимального-лечения[2]:", lvl)
  .addField("Кофе (Самый лучший)[3]:", cof)
  .addField("Чай (зелёный)[4]:", te)
  .addField("VIP статус[5]:", vp)
  .addField("Железный_меч[6]:",ir)
  .addField("Зелье_жизней[7]:", oo)
  .addField("Эволюция[evol]:", rr)
  .addField("Токен для изменения информации о персонаже [8]", rai)
  .addField("Своя роль [9]", yyy)
  .setTimestamp()
  .setFooter('Магазин сладостей: ;nomshop')
  bot.send(embed);
};
module.exports.help = {
    name: "shop",
    aliases: [""]
};