const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

let Image_i = 4;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://vk.vkfaces.com/R3u75AvndjjzPWz8p8uzQUgX4ynEmYbV_HwQfg/sYMe1yhNieQ.jpg";
arrayImage[1] = "https://sun9-12.userapi.com/hJxal-eoYofcmy8RChIf_LHWZUlBAx2x9wsL0Q/rnj-1YX_CPs.jpg";
arrayImage[2] = "https://antislang.ru/wp-content/uploads/%D0%B4%D1%83%D1%80%D0%BA%D0%B0-6.jpg";
arrayImage[3] = "https://pbs.twimg.com/ext_tw_video_thumb/1220505012482256902/pu/img/KgD8r00rCklwb2Rk.jpg";
module.exports.run = async (bot,message,args) => {
  let u = profile[message.author.id];
  if(args[0] == undefined) return bot.send("А кого отправлять?")
  if(u.coins < 50) return bot.send("Недостаточно монет для выполнение действия.");
  if(args[0] == `<@!763735590029361182>`) return message.channel.send('Себя отправь!')
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} отправил в дурку ${args[0]}`)
  .setColor("#970045")
  .setImage(arrayImage[Image])
  u.coins -= 50;
  bot.send(embed);
};
module.exports.help = {
    name: "дурка",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}