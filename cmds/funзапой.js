const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

let Image_i = 5;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://www.wallpaperup.com/uploads/wallpapers/2014/03/07/289991/cc2b1b7c9cb9934eff4ab978bf88ee43-1400.jpg";
arrayImage[1] = "http://img.crazys.info/files/i/2013.12.5/1386222284_-8667676_315975176.jpg";
arrayImage[2] = "http://pm1.narvii.com/7164/d9112f8f1ab83d7a138cd4e7ff065f8ce462bb22r1-1065-1080v2_uhq.jpg";
arrayImage[3] = "https://get.wallhere.com/photo/1483x1200-px-anime-anime-girls-original-characters-1010655.jpg";
arrayImage[4] = "https://i.pinimg.com/736x/27/98/02/279802232d1d640cbfad15b4eebac904.jpg";
module.exports.run = async (bot,message,args) => {
  let u = profile[message.author.id];
  if(u.coins < 100) return bot.send("Недостаточно монет для выполнение действия.");
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  if(args[0]){ 
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} решил сходить в бар с ${args[0]}. Остановите их!!!`)
    .setColor("#84ffe4")
    .setImage(arrayImage[Image])
    u.coins -= 100;
	  bot.send(embed);
} else {
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} ушёл в запой. Пожалуйста, поскорее заберите у него(неё) бутылку!`)
  .setColor("#c4ff16")
    .setImage(arrayImage[Image])
  u.coins -= 100;
  bot.send(embed);
}
};
module.exports.help = {
    name: "запой",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}