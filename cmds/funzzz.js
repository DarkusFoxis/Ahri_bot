const Discord = module.require("discord.js");
const fs = require("fs");
let Image_i = 7;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://cs10.pikabu.ru/post_img/2020/03/26/8/og_og_1585225146283175273.jpg";
arrayImage[1] = "https://static.zerochan.net/Hakurei.Reimu.full.1938488.jpg";
arrayImage[2] = "https://99px.ru/sstorage/56/2013/08/image_562408131343345843397.jpg";
arrayImage[3] = "http://pm1.narvii.com/7207/d39c1bfba00c6c6b90a304f779cbd40db096e546r1-1920-1080v2_uhq.jpg";
arrayImage[4] = "http://images.anime-music.ru/animg%2Fimages%2F8%2F27300-hiiragi_tsukasa-lucky_star.jpg";
arrayImage[5] = "http://pm1.narvii.com/7291/af07e8e69f01b454bd5b79d878fc58edfcd58990r1-1024-768v2_uhq.jpg";
arrayImage[6] = "https://static.wallpapers-anime.com/upload/20170509/345/d/O/p/dOpEEF.png";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  if(args[0]){
    if (args[0] == `<@!763735590029361182>`) return message.channel.send('Не хофу спать с тобой, грязный извращенец!')
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} уложил спать ${args[0]}.`)
    .setColor("#a1b3ff")
    .setImage(arrayImage[Image])
    bot.send(embed);
  } else {
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} уснул.`)
    .setColor("#a1b3ff")
    .setImage(arrayImage[Image])
    bot.send(embed);
  }
};
module.exports.help = {
    name: "zzz",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}