const Discord = module.require("discord.js");

let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
    let o = inf[message.author.id];
    let rUser = message.guild.member(message.author.id);
    if(o.toc == 0) return bot.send("У вас нет токенов для изменения!")
    if(!args[0]) return bot.send("Вы не указали имя вашего героя!");
    if(!args[1]) return bot.send(`Вы не указали возраст вашего героя!`)
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setDescription(`Персонаж обновлён.`)
    .setColor("#02fff1")
    o.nick = args[0]
    o.age = args[1]
    o.toc -= 1
    rUser.setNickname(`${args[0]}`);
    bot.send(embed)
};

module.exports.help = {
    name: "rel",
    aliases: [""]
};