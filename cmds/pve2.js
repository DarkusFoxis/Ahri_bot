const Discord = module.require("discord.js");
const fs = require("fs");

let prof = require('../prof.json');
let profile = require('../profile.json');
let craft = require('../craft.json');
let dnew = require('../dnew.json');

module.exports.run = async (bot,message,args) => {
    message.delete();
    let t = prof[message.author.id];
    let y = profile[message.author.id];
    let u = craft[message.author.id]
    var min = 1;
    var max = 100;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
        if (random == 1){
            var min = 0;
            var max = 30;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве ны ничего не получили, но потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            bot.send(embed)
        } else if (2 <= random && random <= 10){
            var min = 0;
            var max = 30;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 1;
            var max = 50;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            bot.send(embed)
        }else if (11 <= random && random <= 50){
            var min = 0;
            var max = 30;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 10;
            var max = 100;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            bot.send(embed)
        }else if (51 <= random && random <= 99){
            var min = 0;
            var max = 30;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 15;
            var max = 150;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 1;
            var max = 15;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            bot.send(embed)
        }else if (random == 100){
            var min = 0;
            var max = 30;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 20;
            var max = 200;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 1;
            var max = 20;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов, 1 Foxкоин и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += 1
            bot.send(embed)
            var min = 1;
            var max = 5;
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            if (random == 1 || random == 5) {
                let d = dnew[random]
                if (d.seen == true){
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`В мешочке, где лежал когда-то дневник, лежало 2 ссенсии знаний! :0`)
                    .setColor("#9618e6")
                    bot.send(embed)
                    u.infor_essence += 2
                }
                let embed = new Discord.MessageEmbed()
                .setDescription(`В мешочке, лежит дневник под номером ${random}! Возможно, это не обычный монстр был...`)
                .setColor("#9618e6")
                bot.send(embed)
                d.seen = true
            } else {
                let embed = new Discord.MessageEmbed()
                .setDescription(`В мешочке, лежит эссенция знаний! Возможно, это не обычный монстр был...`)
                .setColor("#9618e6")
                bot.send(embed)
                u.infor_essence += 1
            }
            fs.writeFile('../dnew.json',JSON.stringify(dnew),(err)=>{
                if(err) console.log(err);
            });
        }
}

module.exports.help = {
    name: "pvp",
    aliases: [""]
};