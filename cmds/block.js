const Discord = module.require("discord.js");

let inf = require('../inf.json');
let prof = require('../prof.json');

module.exports.run = async (bot,message,args) => {
    let o = inf[message.author.id];
    let t = prof[message.author.id];
    var num1 = parseInt(args[0])
    if (num1 == 0){
    if (o.blok == 0) return bot.send(`Вы и так в системе атак.`)
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} вошёл в систему атаки!`)
    .setColor("#f10b0b")
    bot.send(embed);
    o.blok = 0,
    o.bl = "Разрешён";
    } else if (num1 == 1) {
        if (o.blok == 1) return bot.send(`Вы и так не в системе атак.`)
        if (t.at > 1) return bot.send(`Вы являетесь фичеюзером. Доступ запрещён!`)
        if (t.HPm > 100) return bot.send(`Вы являетесь фичеюзером. Доступ запрещён!`)
        if (t.kil > 0) return bot.send(`Вы являетесь фичеюзером. Доступ запрещён!`)
        if (t.rel > 0) return bot.send(`Вы являетесь фичеюзером. Доступ запрещён!`)
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} вышел из системы атаки!`)
        .setColor("#f10b0b")
        bot.send(embed);
        o.blok = 1,
        o.bl = "Запрещён";
        } else {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Система атак:`)
            .setDescription(`Ваш текущий доступ: ${o.bl} \n Разрешить доступ[0] \n Запретить доступ[1]`)
            .setColor("#f10b0b")
            bot.send(embed);
        }
}

module.exports.help = {
    name: "block",
    aliases: [""]
};