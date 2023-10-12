const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');

module.exports.run = async (bot,message,args) => {
    let u = profile[message.author.id];
    message.delete()
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник 
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!member) return bot.send("Пользователь не найден");
    if(!profile[member.id])return bot.send("Пользователь не может принять смс, т. к. он не в ивенте.");
    if(u.coins < 500) return bot.send("Вы не можете отправить личное сообщение пользователю, т. к. у вас недостаточно монет для выполнения действия.");
    let embed = new Discord.MessageEmbed()
    .setDescription('Сообщение было доставлено пользователю. Ожидайте прочтения UwU')
    .setColor("#47ff9b")
    .setThumbnail(message.author.displayAvatarURL())
    u.coins -= 500
    profile[member.id].mmm = args.join(" ")
    profile[member.id].msgg = 1
    bot.send(embed);
}

module.exports.help = {
    name: "setm",
    aliases: [""]
};