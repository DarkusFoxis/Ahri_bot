const Discord = module.require("discord.js");
const fs = require("fs");
let Image_i = 5;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://sun9-23.userapi.com/c622616/u225716178/video/y_76d16f61.jpg";
arrayImage[1] = "https://i.ytimg.com/vi/YspXDsKXpWc/maxresdefault.jpg";
arrayImage[2] = "https://image.krasview.ru/thread/103509/cab7b310f0fb21af71c53a2253b4f48a.jpg";
arrayImage[3] = "https://i.ytimg.com/vi/XMyu4TBnBT4/maxresdefault.jpg";
arrayImage[4] = "https://i.ytimg.com/vi/FhXuB3-dCjs/hqdefault.jpg";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  if (args[0] == `<@!763735590029361182>`) return message.channel.send('А я тут причём???')
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} вместо аптечки взял пенёк, и кинул в ${args[0]}. Лови апте... Ой, то есть, лови пенёк!`)
  .setColor("#b78af5")
    .setImage(arrayImage[Image])
  bot.send(embed);
};
module.exports.help = {
    name: "пенёк",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}