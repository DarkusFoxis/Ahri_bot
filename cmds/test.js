const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.author.id);
    if(!rUser.roles.cache.has("883740699525279794")) return bot.send("Вы не тестер!!!")
    message.delete();
    if (!args[0]) return bot.send(`Error.`)
    var i = parseInt(args[0])
    let num = i / 100 * 25
     let y = Math.ceil(num);
    let embed = new Discord.MessageEmbed()
    .setDescription(`Атака = ${y}`)
    .setColor("#47ff9b")
    bot.send(embed);
  };
  module.exports.help = {
      name: "test",
      aliases: [""]
  };