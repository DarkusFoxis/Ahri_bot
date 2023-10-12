const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

let Image_i = 4;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://pbs.twimg.com/media/D8meuaSVsAA_qxE.jpg:large";
arrayImage[1] = "https://bigmemes.funnyjunk.com/comments/+_425a76eab942d1e3644aaaed5935c61e.jpg";
arrayImage[2] = "https://www.meme-arsenal.com/memes/71f09da20365a0241369819cc87b370f.jpg";
arrayImage[3] = "https://derpicdn.net/img/2018/6/13/1756526/large.png";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  let u = profile[message.author.id];
  message.delete();
  if (u.lvl < 3) return message.channel.send('https://www.meme-arsenal.com/memes/e02ddb78cf7b58a49caee63a954d5ba8.jpg')
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} использовал карту реверс. Вот это па-па-паварот...`)
  .setColor("#b78af5")
    .setImage(arrayImage[Image])
bot.send(embed);
};
module.exports.help = {
    name: "реверс",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}