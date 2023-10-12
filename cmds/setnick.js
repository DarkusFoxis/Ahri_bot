const Discord = module.require("discord.js");

let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('У вас нет прав!')
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!args[1]) return bot.send(`А что писать то в нике?`)
    message.delete()
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник
    let o = inf[member.id];
    let embed = new Discord.MessageEmbed()
    .setDescription(`${member} был установлен ник: ${args[1]}`)
    .setColor("#02fff1")
    member.setNickname(`${args[1]}`);
    o.nick = args[1]
    bot.send(embed)
};

module.exports.help = {
    name: "nick",
    aliases: [""]
};