const Discord = module.require("discord.js");
const fs = require("fs");
let Image_i = 4;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://sun9-48.userapi.com/c845221/v845221733/6da89/yRS-oZTKN14.jpg";
arrayImage[1] = "https://i.ytimg.com/vi/dCfW6A2xYTc/maxresdefault.jpg";
arrayImage[2] = "https://www.meme-arsenal.com/memes/cd7390bc9cbab8dc60cfd2bffa5e264a.jpg";
arrayImage[3] = "https://i.ytimg.com/vi/kE3wKlGmUxs/maxresdefault.jpg";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  if (args[0]){
  if (args[0] == `<@!763735590029361182>`) return message.channel.send('Мне она не нужна. *Кинул обратно отправителю*')
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} кинул аптечку в ${args[0]}. Лови аптечку!`)
  .setColor("#03060b")
    .setImage(arrayImage[Image])
  bot.send(embed);
  } else {
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} кинул аптечку в ${args[0]}. Лови аптечку!`)
    .setColor("#03060b")
      .setImage(arrayImage[Image])
    bot.send(embed);
  }
};
module.exports.help = {
    name: "аптечка",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}