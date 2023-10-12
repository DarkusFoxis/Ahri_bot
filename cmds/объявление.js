const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(args.join(" "))
  .setColor("#ff0000")
    bot.send(embed);
};
module.exports.help = {
    name: "объявление",
    aliases: [""]
};