const Discord = module.require("discord.js");
const fs = require("fs");
const talkedRecently = new Set();

let profile = require('../profile.json');

module.exports.run = async (bot,message,args) => {
    if(!args[0]) return bot.send("Вы не указали пользователя");
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник 
    if(!member) return bot.send("Пользователь не найден");
    if(!profile[member.id])return bot.send("Вы не можете изменить репутацию пользователя, т. к. он не в ивенте.");
    let y = profile[member.id];
    let p = profile[message.author.id]
    if(!args[1]){
        let embed = new Discord.MessageEmbed()
        .setTitle('Настройки репутации:')
        .setColor("#f47fff")
        .setDescription(`like @link +: Повысить репутацию \nlike @link -: Понизить репутацию`)
        .setTimestamp()
        bot.send(embed);
    }
    if(args[1] == '+') {
        if (talkedRecently.has(message.author.id)) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}. Вы не можете изменить репутацию, подождите 24 часа!`)
            .setColor("#f10b0b")
            .setThumbnail(message.author.displayAvatarURL())
            bot.send(embed);
            } else {
                if(message.guild.member(message.author.id) == member){
                    let p = profile[message.author.id]
                    p.rep --
                    let embed = new Discord.MessageEmbed()
                   .setTitle('Так нечестно!')
                    .setColor("#f47fff")
                    .setDescription(`Репутация ${message.guild.member(message.author.id)} была понижена ботом! Его репутация: ${p.rep}`)
                    .setTimestamp()
                    bot.send(embed);
                } else {
                    y.rep ++
                    let embed = new Discord.MessageEmbed()
                    .setTitle('Репутация пользователя повышена!')
                    .setColor("#f47fff")
                    .setDescription(`Вы решили повысить ${member} репутацию, и теперь его репутация равна ${y.rep}`)
                    .setTimestamp()
                    bot.send(embed);
                }
            } talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 86400000);
        } else if(args[1] == '-') {
        if (talkedRecently.has(message.author.id)) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}. Вы не можете изменить репутацию, подождите 24 часа!`)
            .setColor("#f10b0b")
            .setThumbnail(message.author.displayAvatarURL())
            bot.send(embed);
            } else {
        if(message.guild.member(message.author.id) == member){
            let embed = new Discord.MessageEmbed()
           .setTitle('Самокритично.')
            .setColor("#f47fff")
            .setDescription(`Репутация ${message.guild.member(message.author.id)} не изменена. Самокритичность конечно хорошо, но в меру. Текущаа репутация: ${p.rep}`)
            .setTimestamp()
            bot.send(embed);
        } else {
        y.rep --
        let embed = new Discord.MessageEmbed()
        .setTitle('Репутация пользователя понижена!')
        .setColor("#f47fff")
        .setDescription(`Вы решили понизить ${member} репутацию, и теперь его репутация равна ${y.rep} `)
        .setTimestamp()
        bot.send(embed);
        }
    } talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
    }, 86400000);
    }
};
module.exports.help = {
    name: "like",
    aliases: [""]
};