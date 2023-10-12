const Discord = module.require("discord.js");

module.exports.run = async (bot,message) => {
  let xp = "750 монеток";
  let lvl = "50 монеток";
  let cof = "100 монет";
  let te = "75 монеток";
  let ir = "225 монеток";
  let rr = "250 монеток";
  let yyy = "500 монет"
  let hhh = "300 монет"
  let pat = "310 монет"
  let cok = "125 монет"
  let tof = "1000 монет"
  let ttt = "3500 монет"
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription('Магазин сладостей[2]:')
  .setColor("#47ff9b")
  .addField("Торт[1]:", xp)
  .addField("Конфета[2]:", lvl)
  .addField("Мороженка[3]:", cof)
  .addField("Кекс[4]:", te)
  .addField("Блины[5]:", rr)
  .addField("Лимонад[6]:",ir)
  .addField("Пицца[7]", yyy)
  .addField("Суши[8]", hhh)
  .addField("Пастила[9]", pat)
  .addField("Шоколад[10]", cok)
  .addField("Тофу[11]", tof)
  .addField("Кейс вкусняшек[12]", ttt)
  .setTimestamp()
  .setFooter('Стандартный магазин всякого всего: ;shop')
  bot.send(embed);
};
module.exports.help = {
    name: "nomshop",
    aliases: [""]
};