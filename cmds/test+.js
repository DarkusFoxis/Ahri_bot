const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.author.id);
    if(!rUser.roles.cache.has("883740699525279794")) return bot.send("Вы не тестер!!!")
    message.delete();
    let gg = message.channel.awaitMessages('Введите тестовое сообщение:')
    if (!gg) return bot.send("Вы ничего не ввели.")
    let embed = new Discord.MessageEmbed()
    .setDescription(`Вашим сообщением было: ${gg}`)
    .setColor("#47ff9b")
    bot.send(embed);
  };

  module.exports.help = {
    name: "test+",
    aliases: [""]
};