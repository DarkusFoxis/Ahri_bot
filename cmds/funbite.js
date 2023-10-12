const Discord = module.require("discord.js");
const fs = require("fs");
let Image_i = 8;
let arrayImage = new Array(Image_i);
arrayImage[0] = "http://pm1.narvii.com/7206/855e45b5e88dcba89acbebafc4dff5220cdf3632r1-721-721v2_uhq.jpg";
arrayImage[1] = "http://pm1.narvii.com/7242/226f31ee713424271aad8151c0f3af1447d4bf93r1-720-514v2_uhq.jpg";
arrayImage[2] = "https://static4.aniimg.com/upload/20180813/5755/O/l/6/Ol6lEF.jpg";
arrayImage[3] = "https://steamuserimages-a.akamaihd.net/ugc/793114177066882391/CC82D493C9CC370367543FABC97922D36FD544E0/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true";
arrayImage[4] = "https://pm1.narvii.com/6624/7986f3cf43b6884b3d19d81bec03362bfc500549_hq.jpg";
arrayImage[5] = "https://i.pinimg.com/736x/3a/34/87/3a34878278f37b8008d89c21d496df89.jpg";
arrayImage[6] = "http://pm1.narvii.com/6871/e86f398725389929d44fa654a6db1f8fdfa05597r1-720-491v2_uhq.jpg";
arrayImage[7] = "https://pbs.twimg.com/media/CreFYaOWEAQ-BxP.jpg";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  if (args[0] == `<@!763735590029361182>`) return message.channel.send('А меня за что? :confounded:')
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} кусает ${args[0]}. Кусь!`)
  .setColor("#eeff00")
  .setImage(arrayImage[Image])
  bot.send(embed);
};
module.exports.help = {
    name: "bite",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}