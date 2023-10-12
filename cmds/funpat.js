const Discord = module.require("discord.js");
const fs = require("fs");
let Image_i = 11;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://media.discordapp.net/attachments/767394637585317928/767395081186836510/TautInformalIndianjackal-small.gif";
arrayImage[1] = "https://cdn.discordapp.com/attachments/707940303365210133/708151734995910696/06-54-47-tenor.gif";
arrayImage[2] = "https://cdn.discordapp.com/attachments/707940303365210133/708151735415472159/06-54-54-tenor.gif";
arrayImage[3] = "https://media.discordapp.net/attachments/767394637585317928/767395079051673640/1415020695_975657236.gif";
arrayImage[4] = "https://cdn.discordapp.com/attachments/707940303365210133/708151736489082910/06-55-22-tenor.gif";
arrayImage[5] = "https://cdn.discordapp.com/attachments/707940303365210133/708151737004851231/06-55-30-tenor.gif";
arrayImage[6] = "https://cdn.discordapp.com/attachments/707940303365210133/708151737336332369/06-59-35-tenor.gif";
arrayImage[7] = "https://cdn.discordapp.com/attachments/707940303365210133/708151737831391302/06-55-49-tenor.gif";
arrayImage[8] = "https://media.discordapp.net/attachments/767394637585317928/767395080348499968/cd9ef93ccbd801cc90039c48e3045c34.gif";
arrayImage[9] = "https://media.discordapp.net/attachments/767394637585317928/767395079727218698/1449285676_2015-07-25_00008.gif";
arrayImage[10] = "https://media.discordapp.net/attachments/767394637585317928/767395075297771540/xUjg9eFRCjwANWb4t4P8QW1yUC_B0RPRoYAYjzQPrlxvyC0ROa_Zhy52Gjx-LA7XSf6eLmFbw1yETzFEbfyRTCbu4uXr80uMuY5d.gif";
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} гладит ${args[0]}. Как миленько ^-^`)
  .setColor("j3bx44bj")
  .setImage(arrayImage[Image])
  bot.send(embed);
};
module.exports.help = {
    name: "pat",
    aliases: [""]
};
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}