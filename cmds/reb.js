const Discord = module.require("discord.js");

let prof = require('../prof.json');
let profile = require('../profile.json');

module.exports.run = async (bot,message) => {
    let t = prof[message.author.id];
    let y = profile[message.author.id]
    message.delete();
    if(t.rel == 5) return bot.send("Вы достигли порога.")
    if(t.ev == 3 && t.HPm == 1000 && t.at >= 100 && t.HP >= 900 && t.rel < 2) {
    let s = 5000 * t.rel
    if(y.coins < s ) return bot.send(`Недостаточно средств! Нужно ${s} монет, чтобы сделать сброс до уровня ${t.rel + 1}!`)
    t.rel += 1
    var sum = 50 * t.rel
    let embed = new Discord.MessageEmbed()
    .setDescription(`Поздравляю, ты сделал сброс! Держи в награду ${sum} вечнопушистых.`)
    .setColor("#02fff1")
    y.coins -= s
    t.ev = 0,
    t.HPm = 100,
    t.HP = 100,
    t.at = 1,
    t.wep = "Отсутствует",
    y.fcoin += sum
    bot.send(embed)
    } else if (t.ev == 4 && t.HPm == 5000 && t.at >= 500 && t.HP >= 4900 && t.rel >= 2) {
    let s = 5000 * t.rel
    if(y.coins < s ) return bot.send(`Недостаточно средств! Нужно ${s} монет, чтобы сделать сброс до уровня ${t.rel + 1}!`)
    t.rel += 1
    var sum = 50 * t.rel
    let embed = new Discord.MessageEmbed()
    .setDescription(`Поздравляю, ты сделал сброс! Держи в награду ${sum} вечнопушистых.`)
    .setColor("#02fff1")
    y.coins -= s
    t.ev = 0,
    t.HPm = 100,
    t.HP = 100,
    t.at = 1,
    t.wep = "Отсутствует",
    y.fcoin += sum
    bot.send(embed)
    } else {
        let embed = new Discord.MessageEmbed()
        .setDescription(`Вы не можете сделать сброс!`)
        .setColor("")
        bot.send(embed)
    }
}

module.exports.help = {
    name: "reb",
    aliases: [""]
};