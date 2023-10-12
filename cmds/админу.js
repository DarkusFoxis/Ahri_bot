const Discord = module.require("discord.js");
const fs = require("fs");

let alh = 'У бота вышло обновление :0. f!обнова';


module.exports.run = async (bot,message) => {
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`Все, все, все.`)
  .setColor("#ff0000")
   .addField("Внимание!!!", alh)
    bot.send(embed);
  };
module.exports.help = {
    name: "э",
    aliases: [""]
};