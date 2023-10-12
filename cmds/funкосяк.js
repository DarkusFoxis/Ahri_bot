const Discord = module.require("discord.js");
const fs = require("fs");
let Image_i = 4;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://cdn.discordapp.com/attachments/759452831216042024/767849100606439444/692746947458498621-1.gif";
arrayImage[1] = "https://media.discordapp.net/attachments/767394637585317928/768110030570258432/144273389617930249.gif";
arrayImage[2] = "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk2BLLJv9eKlSibR4yqaHsBqaKTM5SRkZCeTgDn6uOyic";
arrayImage[3] = "https://www.meme-arsenal.com/memes/3fb0f172947df73ce18e93c88e2ddcdf.jpg";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} нервно покуривает косячок...`)
  .setColor("#a1b3ff")
  .setImage(arrayImage[Image])
  bot.send(embed);
};
module.exports.help = {
    name: "косяк",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}