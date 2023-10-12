const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

let Image_i = 3;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://get.wallhere.com/photo/illustration-anime-cartoon-comics-Zero-girl-fate-mangaka-irisviel-shirou-purchases-574268.jpg";
arrayImage[1] = "https://i.artfile.ru/1920x1365_1272052_[www.ArtFile.ru].jpg";
arrayImage[2] = "https://get.wallhere.com/photo/anime-girls-short-hair-sitting-black-hair-indoors-thigh-highs-skirt-red-eyes-original-characters-Toy-uniform-striped-leggings-red-shoes-hairband-Fuji-Choko-color-festival-amusement-park-144076.jpg";
module.exports.run = async (bot,message,args) => {
  let u = profile[message.author.id];
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  if(args[0]){ 
    if(u.coins < 10000) return bot.send(`Прости, ${message.author.id}(Линк), я не могу предоставить кредит. Уведи от себя бабу, а то ты вообще останешься без штанов (оу май)`);
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} устроил массовый шоппинг вместе с ${args[0]}`)
    .setColor("#970045")
    .setImage(arrayImage[Image])
    u.coins -= 10000;
	  bot.send(embed);
}
else {
  if(u.coins < 1000) return bot.send(`Прости, ${message.author.id}(Линк), я не могу предоставить кредит.`);
	let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} устроил массовый шоппинг`)
    .setColor("#970045")
    .setImage(arrayImage[Image])
    u.coins -= 1000;
    bot.send(embed);
}
  bot.send(embed);
};
module.exports.help = {
    name: "шоппинг",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}