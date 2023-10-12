const Discord = module.require("discord.js");

let prof = require('../prof.json');
let profile = require('../profile.json');
let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
    let t = prof[message.author.id];
    let y = profile[message.author.id];
    let o = inf[message.author.id];
    message.delete();
    if (t.rel < 2) {
        if (o.blok == 1) return bot.send(`Доступ закрыт. Вы не в системе атак!`)
        if (t.ev == 3) return bot.send("У вас максимальный уровень эволюции!");
        if (y.gem < 50) return bot.send("Недостаточно кристаллов для эволюции :disappointed_relieved:");
        let embed = new Discord.MessageEmbed()
        .setDescription(`Отличненько, ты открыл новою ветвь эволюции генов. Так держать!`)
        .setColor("#ef0aff")
        bot.send(embed);
        y.gem -= 50
        t.ev += 1
    } else if (t.rel >= 2 && t.rel <= 4) {
        if (o.blok == 1) return bot.send(`Доступ закрыт. Вы не в системе атак!`)
        if (t.ev == 4) return bot.send("У вас максимальный уровень эволюции!");
        if (y.gem < 50) return bot.send("Недостаточно кристаллов для эволюции :disappointed_relieved:");
        let embed = new Discord.MessageEmbed()
        .setDescription(`Отличненько, ты открыл новою ветвь эволюции генов. Так держать!`)
        .setColor("#ef0aff")
        bot.send(embed);
        y.gem -= 50
        t.ev += 1
    } else if (t.rel == 5) {
        if (o.blok == 1) return bot.send(`Доступ закрыт. Вы не в системе атак!`)
        if (t.ev == 5) return bot.send("У вас максимальный уровень эволюции!");
        if (y.gem < 50) return bot.send("Недостаточно кристаллов для эволюции :disappointed_relieved:");
        let embed = new Discord.MessageEmbed()
        .setDescription(`Отличненько, ты открыл новою ветвь эволюции генов. Так держать!`)
        .setColor("#ef0aff")
        bot.send(embed);
        y.gem -= 50
        t.ev += 1
    }
};
module.exports.help = {
    name: "evol",
    aliases: [""]
};