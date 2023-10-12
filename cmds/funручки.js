const Discord = module.require("discord.js");
const fs = require("fs");

let Image_i = 4;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://static.wallpapers-anime.com/upload/20170526/595/s/x/t/sxtFEF.jpg";
arrayImage[1] = "https://media.discordapp.net/attachments/769580602269368411/785574341689081856/7c9f81fe93667e9ac62563153174d1fa1b1a92ca_hq.gif";
arrayImage[2] = "https://pm1.narvii.com/6715/3e7f323f61ec6f9474e1fe6599f944706b938a72_hq.jpg";
arrayImage[3] = "http://pm1.narvii.com/7260/f439c827f5b5a3eb9d4bcf73bee8747a8fdaa332r1-1000-1000v2_uhq.jpg";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  if (args[0]){
	let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} просится на ручки к ${args[0]}`)
  .setColor("#d6680e")
  .setImage(arrayImage[Image])
  bot.send(embed);
  } else {
    let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} просится на ручки ко всем.`)
  .setColor("#d6680e")
  .setImage(arrayImage[Image])
  bot.send(embed);
  }
};
module.exports.help = {
    name: "ручки",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}