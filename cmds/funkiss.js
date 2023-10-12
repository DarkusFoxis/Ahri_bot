const Discord = module.require("discord.js");
const fs = require("fs");
let Image_i = 6;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://media.discordapp.net/attachments/767394637585317928/767830666464854036/gif-anime-kisses-24.gif";
arrayImage[1] = "https://media.discordapp.net/attachments/767394637585317928/767830666577838080/orig.gif";
arrayImage[2] = "https://media.discordapp.net/attachments/767394637585317928/767830663012548619/FlowerySelfreliantHedgehog-size_restricted.gif";
arrayImage[3] = "https://media.discordapp.net/attachments/767394637585317928/767830663737901086/6Bqs.gif";
arrayImage[4] = "https://media.discordapp.net/attachments/767394637585317928/767830663659126854/5cdb8c824e641ca579fa5264fe929cf0b6869a11r1-469-363_hq.gif";
arrayImage[5] = "https://media.discordapp.net/attachments/767394637585317928/767830662060179526/original.gif";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} поцеловал ${args[0]}. *Пишет: Дорогой дневник, моё шипперское сердечко не выдерживает*`)
  .setColor("#c4ff16")
    .setImage(arrayImage[Image])
  bot.send(embed);
};
module.exports.help = {
    name: "kiss",
    aliases: [""]

};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}