const Discord = module.require("discord.js");

let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
    var role = message.guild.roles.cache.find(role => role.id === "800434822929186846");
    var role2 = message.guild.roles.cache.find(role => role.id === "854585006063353856");
    let o = inf[message.author.id];
    let rUser = message.guild.member(message.author.id);
    if(rUser.roles.cache.has("800434822929186846")) return bot.send("Вы имеете персонажа/у вас есть роль, которая не позволяет это сделать.")
    if(!args[0]) return bot.send("Вы не указали имя вашего героя!");
    if(!args[1]) return bot.send(`Вы не указали возраст вашего героя!`)
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setDescription(`Персонаж создан.`)
    .setColor("#02fff1")
    o.nick = args[0]
    o.age = args[1]
    rUser.setNickname(`${args[0]}`);
    rUser.roles.add(role)
    rUser.roles.remove(role2)
    bot.send(embed)
};

module.exports.help = {
    name: "cr",
    aliases: [""]
};