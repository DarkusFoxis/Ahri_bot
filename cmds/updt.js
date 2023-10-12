const Discord = module.require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();

let botinf = require('../botinf.json');

module.exports.run = async (bot,message,args) => {
    let o = botinf[1]
    message.delete();
    if (args[0] == "upd"){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('У вас нет прав!')
        let strong = "";
        for (let i = 1;i < args.length;i++) 
        {
            strong += args[i] + " ";
        }
        let embed = new Discord.MessageEmbed()
        .setTitle(`Обновление бота ${o.versions}:`)
        .setDescription(strong)
        .setColor("#ff0000")
        .setTimestamp()
        bot.send(embed);
    } else if (args[0] == "setvers") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('У вас нет прав!')
        let embed = new Discord.MessageEmbed()
        .setTitle(`Версия обновлена!`)
        .setDescription(`Новая версия бота: ${args[1]}`)
        .setColor("#ff0000")
        .setTimestamp()
        bot.send(embed);
        o.versions = args[1]
    } else if (args[0] == "inf") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Информация бота:`)
        .setDescription(`Имя бота: ${o.name} \n Версия: ${o.versions}`)
        .setColor("#ff0000")
        .setThumbnail(o.avatar)
        .setTimestamp()
        bot.send(embed);
    } else if (args[0] == "setav") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('У вас нет прав!')
        let user = message.mentions.users.first()
        o.avatar = user.avatarURL({ format: 'png', dynamic: false, size: 128 })
        let embed = new Discord.MessageEmbed()
        .setTitle(`Аватар обновлён!`) 
        .setDescription(`Новый аватар бота: `)
        .setColor("#ff0000")
        .setThumbnail(o.avatar)
        .setTimestamp()
        bot.send(embed);
    } else if (args[0] == "avatars"){
        let user = message.mentions.users.first() || message.author
        let embed = new Discord.MessageEmbed()
        .setTitle(`Аватар пользователя`)
        .setDescription(`Аватар пользователя ${user}`)
        .setColor("#ff0000")
        .setThumbnail(user.avatarURL({ format: 'png', dynamic: false, size: 128 }))
        .setTimestamp()
        bot.send(embed);
    } else if (args[0] == "help") {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Информация бота:`)
            .setDescription("Команды пользователя: `inf`, `avatars`")
            .setColor("#ff0000")
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            bot.send(embed);
        } else {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Информация бота:`)
            .setDescription("Команды администрации: `inf`; `avatars`, `setav`, `setvers`, `upd`.")
            .setColor("#ff0000")
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            bot.send(embed);
        }
    } else{
        let embed = new Discord.MessageEmbed()
        .setTitle(`Команды бота`)
        .setDescription("Команды бота позволяют получить о нём информацию, и не только. Для получения всех команд, напишите: `bot help`")
        .setColor("#ff0000")
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        bot.send(embed);
    }

    fs.writeFile('../botinf.json',JSON.stringify(botinf),(err)=>{
        if(err) console.log(err);
    });
};
module.exports.help = {
    name: "bot",
    aliases: [""]
};