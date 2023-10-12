const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');
let prof = require('../prof.json');
let brg = require("../birg.json")
let crf = require('../craft.json');
let inv = require('../inv.json');
let dnew = require('../dnew.json');

module.exports.run = async (bot,message) => {
    let i = 1
    let y = profile[message.author.id];
    let t = prof[message.author.id];
    let q = crf[message.author.id];
    let p = inv[message.author.id];
    message.delete();
    if (brg.labs == false){
        let embed = new Discord.MessageEmbed()
        .setTitle('Ошибка!')
        .setColor("#cf1919")
        .setDescription(`Вы не открыли лабораторию! Чтобы её открыть, кто-то должен купить её в магазине за анархокойны.`)
        .setTimestamp()
        .setFooter('Покупка в: ;mining shop')
        bot.send(embed)
    } else if (brg.labs == true) {
        let control = false
        let dnid = 0
        let strok = "Вы не обнаружили ни 1 дневника."
        while (control == false && i <= 6){
            let r = dnew[i]
            if (r.seen == true) {
                control = true
                dnid = i
            }
            console.log(i)
            i ++
        }
        if (control == true) {
            strok = `Расшифровка дневника: №${dnid}: 1000 монет и 1 камень знаний`
        }
        let embed = new Discord.MessageEmbed()
        .setTitle('Лаборатория:')
        .setDescription(`${strok}`)
        .setColor("#a89eff")
        .setThumbnail(message.author.displayAvatarURL())
        bot.send(embed);
    }
};

module.exports.help = {
    name: "labs",
    aliases: [""]
};