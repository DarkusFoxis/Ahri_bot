const Discord = module.require("discord.js");
const fs = require("fs");
let Image_i = 7;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://i-ycnex.ru/wp-content/uploads/2017/02/pinok.png";
arrayImage[1] = "http://open.tgl.ru/icity/shared/photo/14828347.jpg";
arrayImage[2] = "https://media.discordapp.net/attachments/755694262951215154/771457178312769556/EIgdFSGX0AAi80W.jpg";
arrayImage[3] = "https://media.discordapp.net/attachments/755694262951215154/771457286933315674/GPL_a_kick_on_ass.jpg?width=316&height=475";
arrayImage[4] = "https://images.vfl.ru/ii/1365668247/efbc64e2/2123988.jpg";
arrayImage[5] = "http://bomz.org/i/demotivators/712423-2010.06.06-11.44.55-60079905.jpg";
arrayImage[6] = "https://cdn.discordapp.com/attachments/755694262951215154/771457637644107817/696028_original.jpg";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  if (args[0] == `<@!763735590029361182>`) return message.channel.send('Не хочу летать!')
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} дал пинок под зад ${args[0]}. Лети, птичка, лети!`)
  .setColor("#a1b3ff")
  .setImage(arrayImage[Image])
  bot.send(embed);
};
module.exports.help = {
    name: "пинок",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}