const Discord = module.require("discord.js");

let nom = require('../nom.json');
let caze = require('../case.json')

module.exports.run = async (bot,message,args) => {
    message.delete();
    let u = nom[message.author.id];
    let y = caze[message.author.id];
    let embed = new Discord.MessageEmbed()
    .setDescription('Ваши вкусняшки:')
    .setColor("#47ff9b")
    .setThumbnail(message.author.displayAvatarURL())
    .addField ("Торт:", u.cace)
    .addField ("Конфеты:", u.candy)
    .addField ("Мороженое:", u.ice)
    .addField ("Кекс:", u.cake)
    .addField ("Блин:", u.blin)
    .addField ("Лимонад:", u.lim)
    .addField ("Пицца:", u.piza)
    .addField ("Суши:", u.susi)
    .addField ("Пастила:", u.pastil)
    .addField ("Щоколад:", u.cokol)
    .addField ("Тофу:", u.tofu)
    .addField ("Кейс_вкусняшек:", y.cace_nom)
    bot.send(embed);
  };
  module.exports.help = {
      name: "xol",
      aliases: [""]
  };