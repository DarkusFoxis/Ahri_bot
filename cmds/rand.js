const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    if (!args[0] || args[0] < 0) {
        let min = 0;
        let max = 100;
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        let embed = new Discord.MessageEmbed()
        .setTitle('Число сгенирированно!')
        .setDescription(`${message.guild.member(message.author.id)}, число: ${random}`)
        .setColor("#00FF00")
        .setThumbnail(message.author.displayAvatarURL())
        bot.send(embed);
    } else if (args[0] > 0 && args[0] < 100) {
        if (!args[1] || args[0] < 0) {
            let num1 = parseInt(args[0])
            let min = num1
            let max = 100;
            let random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setTitle('Число сгенирированно!')
            .setDescription(`${message.guild.member(message.author.id)}, число: ${random}`)
            .setColor("#00FF00")
            .setThumbnail(message.author.displayAvatarURL())
            bot.send(embed);
        } else if (args[1] > 0 && args[1] < 100) {
            let num1 = parseInt(args[0])
            let num2 = parseInt(args[1])
            let min = num1
            let max = num2;
            let random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setTitle('Число сгенирированно!')
            .setDescription(`${message.guild.member(message.author.id)}, число: ${random}`)
            .setColor("#00FF00")
            .setThumbnail(message.author.displayAvatarURL())
            bot.send(embed);
        }
    } else {
        let embed = new Discord.MessageEmbed()
            .setTitle('Ошибка генерации!')
            .setDescription(`${message.guild.member(message.author.id)} вы точно указали правельные параметры?`)
            .setColor("#8B0000")
            .setThumbnail(message.author.displayAvatarURL())
            bot.send(embed);
    }
  
};
module.exports.help = {
    name: "rand",
    aliases: [""]
};
