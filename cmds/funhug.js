const Discord = module.require("discord.js");
const fs = require("fs");
let Image_i = 7;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://media.discordapp.net/attachments/767394637585317928/767422205826170930/tumblr_68e1e159da6af7c49a82d8ccfd664108_46aedc62_500.gif";
arrayImage[1] = "https://media.discordapp.net/attachments/767394637585317928/767421671111786496/tenor.gif";
arrayImage[2] = "https://media.discordapp.net/attachments/767394637585317928/767421666615361566/AmeN.gif";
arrayImage[3] = "https://media.discordapp.net/attachments/767394637585317928/767396502569615390/1523895540923.gif";
arrayImage[4] = "https://media.discordapp.net/attachments/767394637585317928/767396497766744114/805b93e7c939a6ae90177f7c487ab954.gif";
arrayImage[5] = "https://media.discordapp.net/attachments/767394637585317928/767433970848628756/cc0070e34acdbe531f11f6b174762841e2cc5de9_hq.gif";
arrayImage[6] = "https://media.discordapp.net/attachments/702814396761636965/787290604354273280/2781202032.jpg?width=841&height=473";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} обнял(а) ${args[0]}. Я тоже не останусь в стороне ^-^. *Arhi тоже обняла*`)
  .setColor("#00a0ff")
  .setImage(arrayImage[Image])
  bot.send(embed);
};
module.exports.help = {
    name: "hug",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}