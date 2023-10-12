const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

let Image_i = 5;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://cdn.wallpapersafari.com/51/59/s0fcTO.jpg";
arrayImage[1] = "https://avatars.mds.yandex.net/get-zen_doc/40663/pub_5d88f7b532335400ad20b00c_5d8915e6ddfef600ad82dc0c/scale_1200";
arrayImage[2] = "https://static.zerochan.net/DRAMAtical.Murder.full.1072683.jpg";
arrayImage[3] = "https://cs4.pikabu.ru/post_img/big/2015/02/24/3/1424748723_163260472.jpg";
arrayImage[4] = "https://w-dog.ru/wallpapers/16/8/355068102914633/iskusstvo-ruchej-devushka-akame-vzglyad-zhest-oruzhie-krov-akame-ga-ubit.jpg";
module.exports.run = async (bot,message,args) => {
  let u = profile[message.author.id];
  if(u.coins < 70) return bot.send("Недостаточно монет для выполнение действия.");
  if (!message.channel.nsfw) return bot.send("Канал не имеет пометки NSFW!");
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  if (args[0] == `<@!763735590029361182>`) return message.channel.send('А меня за что? :confounded:')
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} убил(а) ${args[0]}. Что происходит!?`)
  .setColor("#a1b3ff")
  .setImage(arrayImage[Image])
  u.coins -= 70;
  bot.send(embed);
};
module.exports.help = {
    name: "kill",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}