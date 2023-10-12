const Discord = module.require("discord.js");
const fs = require("fs");
let Image_i = 4;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://hg1.funnyjunk.com/pictures/More_61fb62_6397319.jpg";
arrayImage[1] = "https://i.imgur.com/Al2Qs5S.png";
arrayImage[2] = "https://avatars.mds.yandex.net/get-zen_doc/100325/pub_5cc7098257047600b302d44d_5cc70aa73e66cc00af049ba4/scale_1200";
arrayImage[3] = "https://static.zerochan.net/Mahou.Shoujo.Madoka%E2%98%86Magica.full.830596.jpg";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} кастанул кражу на ${args[0]}, и стащил трусы. Как говорится, тихо стырил и ушёл, называется нашёл!`)
  .setColor("#b78af5")
    .setImage(arrayImage[Image])
  bot.send(embed);
};
module.exports.help = {
    name: "кража"
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}