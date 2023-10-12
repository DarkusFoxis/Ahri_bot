const Discord = module.require("discord.js");
const fs = require("fs");

let asd = 'Все ваши монеты, уровень и т. д. был сброшен, для следующего одновления:';
let alh = 'После перезапуска бота, кристал может подорожать, или же подешеветь.';
let fga = 'Новая валюта, которую можно получить только в бонусе (На текущий момент).';


module.exports.run = async (bot,message) => {
    message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`Обновления 21.02.2021:`)
  .setColor("#5f2020")
  .addField("Сброс профиля", asd)
   .addField("Система биржи", alh)
   .addField ("Foxкойны!", fga)
    bot.send(embed);
  };
module.exports.help = {
    name: "обнова",
    aliases: [""]
};