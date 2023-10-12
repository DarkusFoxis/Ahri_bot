const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

let Image_i = 3;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://get.wallhere.com/photo/anime-anime-girls-schoolgirl-pistol-suicide-screenshot-mangaka-180014.jpg";
arrayImage[1] = "https://static2.aniimg.com/upload/20170526/594/4/n/t/4ntFEF.jpg";
arrayImage[2] = "https://pbs.twimg.com/media/DfBzOJsXUAA8AXH.jpg:large";
module.exports.run = async (bot,message,args) => {
  let u = profile[message.author.id];
  if(u.coins < 230) return bot.send("Недостаточно монет для выполнение действия.");
  if (!message.channel.nsfw) return bot.send("Канал не имеет пометки NSFW!");
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} покинул нас, совершив самоубийство.`)
  .setColor("#a1b3ff")
  .setImage(arrayImage[Image])
  u.coins -= 230;
  bot.send(embed);
};
module.exports.help = {
    name: "suicide",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}