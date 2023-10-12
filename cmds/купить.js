const Discord = module.require("discord.js");

let inv = require('../inv.json');
let profile = require('../profile.json');
let prof = require('../prof.json');
let inf = require('../inf.json');
let num = require('../nom.json');
let caze = require('../case.json');

module.exports.run = async (bot,message,args) => {
    let y = profile[message.author.id];
    let u = inv[message.author.id];
    let t = prof[message.author.id];
    let o = inf[message.author.id];
    let h = num[message.author.id];
    let g = caze[message.author.id];
    message.delete();
    if (args[0]) {
        if (args[1]) {
            if (args[2]) {
            var num3 = parseInt(args[0])
            var num1 = parseInt(args[1])
            var num2 = parseInt(args[2])
            if (num3 == 1) {
            if (num1 == 1) {
                let sym = num2 * 666
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                u.xp_up += num2
                bot.send(embed);
            } else if (num1 == 2) {
                let sym = num2 * 50
                if (y.fcoin < sym) return bot.send("Недостаточно фокскойнов для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.fcoin -= sym
                if(!u.hp_max){
                    u.hp_max = 0
                }
                u.hp_max += num2
                bot.send(embed);
            } else if (num1 == 3) {
                let sym = num2 * 200
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                u.cofee += num2
                bot.send(embed);
            } else if (num1 == 4) {
                let sym = num2 * 100
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                u.tea += num2
                bot.send(embed);
            } else if (num1 == 5){
                let sum = 40 * y.vip
                if (y.fcoin < sum) return bot.send("Недостаточно FoxКойнов для покупки :disappointed_relieved:");
                if (y.vip == 3) return bot.send("У мас максимальный вип статус.")
                y.fcoin -= sum;
                y.vip += 1;
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой. Теперь ты вип ${y.vip} уровня UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                bot.send(embed);
            } else if (num1 == 6){
                if (y.gem < 100) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.gem -= 100
                t.wep = "Железный меч"
                t.at += 5
                bot.send(embed);
            } else if (num1 == 7){
                let sym5 = num2 * 500
                if (y.coins < sym5) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym5
                u.hel += num2
                bot.send(embed);
            } else if (num1 == 8){
                let sym5 = num2 * 1500
                if (y.coins < sym5) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym5
                o.toc += num2
                bot.send(embed);
            } else if (num1 == 9) {
                if (y.coins < 50000) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой. Если хочешь изменить роль, пиши role UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                bot.send(embed);
                y.coins -= 50000
                let names = `${message.author.username}`
                let color = '#03ff00'
                loc = message.guild.roles.create({
                data: {
                    name: names,
                    color: color,
                    position: 45,
                    hoist: true,
                }
                }) .then (d => {
                localrole = message.member.roles.add(d);
                o.rol = d
                })
            };
        } else if (num3 == 2) {
            if (num1 == 1){
                let sym = num2 * 750
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.cace += num2
                bot.send(embed);
            } else if (num1 == 2){
                let sym = num2 * 50
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.candy += num2
                bot.send(embed);
            } else if (num1 == 3){
                let sym = num2 * 100
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.ice += num2
                bot.send(embed);
            } else if (num1 == 4){
                let sym = num2 * 75
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.cake += num2
                bot.send(embed);
            } else if (num1 == 5){
                let sym = num2 * 250
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.blin += num2
                bot.send(embed);
            } else if (num1 == 6){
                let sym = num2 * 225
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.lim += num2
                bot.send(embed);
            } else if (num1 == 7){
                let sym = num2 * 500
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.piza += num2
                bot.send(embed);
            } else if (num1 == 8){
                let sym = num2 * 300
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.susi += num2
                bot.send(embed);
            } else if (num1 == 9){
                let sym = num2 * 310
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.pastil += num2
                bot.send(embed);
            } else if (num1 == 10){
                let sym = num2 * 125
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.cokol += num2
                bot.send(embed);
            } else if (num1 == 11){
                let sym = num2 * 1000
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                h.tofu += num2
                bot.send(embed);
            } else if (num1 == 12){
                let sym = num2 * 3500
                if (y.coins < sym) return bot.send("Недостаточно монет для покупки :disappointed_relieved:");
                let embed = new Discord.MessageEmbed()
                .setDescription(`Поздравляю с покупкой UwU`)
                .setColor("#f10b0b")
                .setThumbnail(message.author.displayAvatarURL())
                y.coins -= sym
                g.cace_nom += num2
                bot.send(embed);
            }
        }
        } else {
            let embed = new Discord.MessageEmbed()
            .setDescription(`Введите кол-во.`)
            .setColor("#f10b0b")
            .setThumbnail(message.author.displayAvatarURL())
            bot.send(embed);
        };
    } else {
        let embed = new Discord.MessageEmbed()
            .setDescription(`Введите номер товара.`)
            .setColor("#f10b0b")
            .setThumbnail(message.author.displayAvatarURL())
            bot.send(embed);
    }
    } else {
        let embed = new Discord.MessageEmbed()
        .setDescription(`Введите код группы`)
        .setColor("#f10b0b")
        .setThumbnail(message.author.displayAvatarURL())
        bot.send(embed); 
    };
};
var min = 1;
var max = 100;
var random1 = Math.floor(Math.random() * (max - min + 1)) + min;
if (random1 >= 95) {
    var min = 1;
    var max = 5;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random == 4) {
      let d = dnew[random]
      if (d.seen == true){
          let embed = new Discord.MessageEmbed()
          .setDescription(`В мешочке, где лежал когда-то дневник, лежало 2 ссенсии знаний! :0`)
          .setColor("#9618e6")
          bot.send(embed)
          i.infor_essence += 2
      }
      let embed = new Discord.MessageEmbed()
      .setDescription(`В мешочке, лежит дневник под номером ${random}!`)
      .setColor("#9618e6")
      bot.send(embed)
      d.seen = true
    }else {
      let embed = new Discord.MessageEmbed()
      .setDescription(`В мешочке, лежит эссенция знаний!`)
      .setColor("#9618e6")
      bot.send(embed)
      i.infor_essence += 1
    }
};

        

module.exports.help = {
    name: "buy",
    aliases: [""]
};