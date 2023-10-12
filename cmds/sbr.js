const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    let botmessage = args.join(" ");
    message.delete().catch();
    bot.send(botmessage);
    var min = 1;
    var max = 4;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random == 1) {
        let embed = new Discord.MessageEmbed()
        .setDescription(`Сброс будет проведён в начале зимнего созона!`)
        .setColor("#00ffeb")
        bot.send(embed)
    } else if (random == 2) {
        let embed = new Discord.MessageEmbed()
        .setDescription(`Сброс будет проведён в начале весеннего созона!`)
        .setColor("#92ffc0")
        bot.send(embed)
    } else if (random == 3) {
        let embed = new Discord.MessageEmbed()
        .setDescription(`Сброс будет проведён в начале летнего созона!`)
        .setColor("#fffd80")
        bot.send(embed)
    } else if (random == 4) {
        let embed = new Discord.MessageEmbed()
        .setDescription(`Сброс будет проведён в начале осеннего созона!`)
        .setColor("#bb5b0c")
        bot.send(embed)
    }
};
module.exports.help = {
    name: "sbr",
    aliases: [""]
};