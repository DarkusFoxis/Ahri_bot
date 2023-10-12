const Discord = module.require("discord.js");
const fs = require("fs");

let Image_i = 7;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://pbs.twimg.com/media/DwfQhlFX4AE65AD.jpg:large";
arrayImage[1] = "https://pbs.twimg.com/media/D7uxEfFXsAEQNYg.jpg";
arrayImage[2] = "http://risovach.ru/upload/2018/07/mem/rasshiryayushee-serdce_180969474_orig_.jpg";
arrayImage[3] = "https://pbs.twimg.com/profile_banners/2194273589/1532156690/1500x500";
arrayImage[4] = "https://pm1.narvii.com/6531/ff634d466c6b9d5b149952ea692249a31ce42e8e_hq.jpg";
arrayImage[5] = "https://pbs.twimg.com/profile_banners/1088829422331981824/1548434331/1500x500";
arrayImage[6] = "https://sun9-17.userapi.com/c855432/v855432631/123202/0an4zlnjMMI.jpg";

module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} начал шипперить ${args[0]} и ${args[1]}. Шип, шип, шип :new_moon_with_face: `)
  .setColor("#090909")
    .setImage(arrayImage[Image])
   bot.send(embed);
  };
module.exports.help = {
    name: "шип",
    aliases: [""]
};

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}