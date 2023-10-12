const Discord = module.require("discord.js");
const talkedRecently = new Set();

let prof = require('../prof.json');
let profile = require('../profile.json');
let crf = require('../craft.json');
let inv = require('../inv.json');

module.exports.run = async (bot,message,args) => {
    message.delete();
    if (talkedRecently.has(message.author.id)) {
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)}. Вы устали. Подождите 5 часов.`)
        .setColor("#f10b0b")
        .setThumbnail(message.author.displayAvatarURL())
        bot.send(embed);
    } else {
    let rUser = message.guild.member(message.author.id);
    if(!rUser.roles.cache.has("844836335520710670")) return bot.send("Команда доступна только премиум. Поддержите сервер до изумрудной роли, и тогда команда станет доступной.")
    let t = prof[message.author.id];
    let y = profile[message.author.id];
    let r = crf[message.author.id];
    let n = inv[message.author.id];
    var min = 1;
    var max = 100;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (t.ev == 0) {
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
        }
    } else if (t.ev == 1) {
        if (1 <= random && random <= 10){
            var min = 10;
            var max = 50;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 50;
            var max = 500;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 10;
            var max = 50;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            bot.send(embed)
        }else if (11 <= random && random <= 30){
            var min = 10;
            var max = 50;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 10;
            var max = 1000;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 10;
            var max = 50;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 1;
            var max = 5;
            var fox = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов, ${fox} foxкойнов и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += fox
            bot.send(embed)
        }else if (31 <= random && random <= 90){
            var min = 10;
            var max = 50;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 15;
            var max = 1050;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 20;
            var max = 70;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 5;
            var max = 10;
            var fox = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов, ${fox} foxкойнов и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += fox
            bot.send(embed)
        }else if (91 <= random && random <= 100){
            var min = 10;
            var max = 50;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 15;
            var max = 1050;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 20;
            var max = 70;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 5;
            var max = 10;
            var fox = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов, ${fox} foxкойнов, 1 зелье опыта и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += fox
            n.xp_up += 1
            bot.send(embed)
        }
    } else if (t.ev == 2) {
        if (1 <= random && random <= 10){
            var min = 40;
            var max = 90;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 100;
            var max = 1000;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 15;
            var max = 60;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            bot.send(embed)
        }else if (11 <= random && random <= 30){
            var min = 40;
            var max = 90;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 100;
            var max = 1000;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 20;
            var max = 70;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 5;
            var max = 10;
            var fox = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов, ${fox} foxкойнов и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += fox
            bot.send(embed)
        }else if (31 <= random && random <= 90){
            var min = 40;
            var max = 90;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 150;
            var max = 1050;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 20;
            var max = 100;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 15;
            var max = 20;
            var fox = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов, ${fox} foxкойнов и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += fox
            bot.send(embed)
        }else if (91 <= random && random <= 100){
            var min = 40;
            var max = 90;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 200;
            var max = 1500;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 50;
            var max = 150;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 10;
            var max = 50;
            var fox = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 1;
            var max = 5;
            var foxup = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов, ${fox} foxкойнов, ${foxup} зелье опыта, 1 зелье жизней и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += fox
            n.xp_up += foxup
            n.hel += 1
            bot.send(embed)
        }
    } else if (t.ev >= 3) {
        if (random == 1){
            var min = 40;
            var max = 90;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 200;
            var max = 1500;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 25;
            var max = 100;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 10;
            var max = 25;
            var fox = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов, ${fox} foxкойнов, и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += fox
            bot.send(embed)
        } else if (2 <= random && random <= 10){
            var min = 50;
            var max = 100;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 300;
            var max = 2000;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 50;
            var max = 100;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 15;
            var max = 50;
            var fox = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 1;
            var max = 3;
            var foxup = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов, ${fox} foxкойнов, ${foxup} зелье жизней и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += fox
            n.hel += foxup
            bot.send(embed)
        } else if (11 <= random && random <= 99){
            var min = 50;
            var max = 100;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 350;
            var max = 2500;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 55;
            var max = 125;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 15;
            var max = 50;
            var fox = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 1;
            var max = 4;
            var foxup = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вы получили ${sum} монет, ${cr} кристалликов, ${fox} foxкойнов, ${foxup} зелье жизней и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += fox
            n.hel += foxup
            bot.send(embed)
        } else if (random == 100){
            var min = 50;
            var max = 100;
            var os = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 500;
            var max = 5000;
            var sum = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 60;
            var max = 200;
            var cr = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 25;
            var max = 60;
            var fox = Math.floor(Math.random() * (max - min + 1)) + min;
            var min = 1;
            var max = 4;
            var foxup = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`При битве вам **крупно** повезло!!! Вы получили ${sum} монет, ${cr} кристалликов, ${fox} foxкойнов, ${foxup} зелье жизней, **все** виды камней по 1 экземпляру, вместе с палочкой и потеряли ${os} жизней.`)
            .setColor("#9618e6")
            t.HP -= os
            y.coins += sum
            y.gem += cr
            y.fcoin += fox
            n.hel += foxup
            r.fire_ston += 1
            r.dark_ston += 1
            r.mag_ston += 1
            r.stick += 1
            bot.send(embed)
        }
    }
  } talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
}, 18000000);
}

  module.exports.help = {
      name: "pve",
      aliases: [""]
  };