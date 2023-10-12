const Discord = module.require("discord.js");
const fs = require("fs");

let Image_i = 6;
let arrayImage = new Array(Image_i);
arrayImage[0] = "http://pm1.narvii.com/6966/40886f68e916ccb7738d3d491a9f05896234a06dr1-1024-726v2_uhq.jpg";
arrayImage[1] = "https://w-dog.ru/wallpapers/16/12/443316646523719/k-on-mln-akiyama-akiyama-mio-devushka-naushniki-sineva.jpg";
arrayImage[2] = "https://sun9-41.userapi.com/c206720/v206720486/4f311/rPSGdUjCl_g.jpg";
arrayImage[3] = "https://static.wallpapers-anime.com/upload/20170509/359/G/C/t/GCtEEF.png";
arrayImage[4] = "https://i.artfile.ru/3400x2720_978991_[www.ArtFile.ru].jpg";
arrayImage[5] = "https://get.wallhere.com/photo/anime-girls-anime-headphones-scarf-Shibuya-Rin-THE-email-protected-Cinderella-Girls-1352301.jpg";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  if(args[0]){ 
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} слушает музыку вместе с ${args[0]}.`)
    .setColor("#84ffe4")
    .setImage(arrayImage[Image])
	  bot.send(embed);
}
else {
	let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} слушает музыку.`)
    .setColor("#84ffe4")
    .setImage(arrayImage[Image])
    bot.send(embed);
}
  bot.send(embed);
};
module.exports.help = {
    name: "music",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}