const Discord = module.require("discord.js");
const fs = require("fs");
const talkedRecently = new Set();

let profile = require('../profile.json');
let prof = require('../prof.json');
let brg = require("../birg.json")

module.exports.run = async (bot,message,args) => {
    let y = profile[message.author.id];
    let t = prof[message.author.id];
    message.delete();
    if (!args[0]){
        let embed = new Discord.MessageEmbed()
        .setTitle('Раздел майнинга:')
        .setColor("#f47fff")
        .setDescription('Магазин: shop \n Покупка: buy_1 [номер] \n Покупка спец. товаров: buy_2 [номер товара] (Недоступно для использования. Станет доступно после обновления под именем "Ahri Two".) \n Майнинг: mine')
        .setTimestamp()
        bot.send(embed);
    } else if (args[0] == "shop"){
        let j1 = "10 анархокойнов"
        let j2 = "100 анархокойнов"
        let j3 = "500 анархокойнов"
        let j4 = "1000 анархокойнов"
        let j2_1 = "50 анархокойнов"
        let j2_2 = "150 анархокойнов"
        let j2_3 = "500 анархокойнов"
        let embed = new Discord.MessageEmbed()
        .setTitle('Магазин приспособлений для майнинга анархокойнов:')
        .setColor("#cf1919")
        .setDescription(`Отдел улучшения майнинга {buy_1}: \n Слабый компьютер (+ 1)[1]: ${j1} \n Ноутбук(+ 10)[2]: ${j2} \n Сервер для майнинга(+ 50)[3]: ${j3} \n Спец. ферма майнинга (+ 100)[4]: ${j4} \n Отдел спец. товаров {buy_2}: \n Улучшение максимального голода (+50 ед.) [1]: ${j2_1} \n Открытие лаборатории [2]: ${j2_2}`)
        .setTimestamp()
        .setFooter('Стандартный магазин всякого всего: ;shop')
        bot.send(embed);
    } else if (args[0] == "buy_1"){
        var num1 = parseInt(args[1])
        if (t.rel < 5) return bot.send("Вы не достигли пятого уровня сброса!")
        if (num1 == 1) {
            if (y.ancoin < 10) return bot.send("У вас недостаточно средств!")
            y.farm += 1
            y.ancoin -= 10
            let embed = new Discord.MessageEmbed()
            .setTitle('Поздравляем с покупкой Слабого компьютера!')
            .setColor("#8600ff")
            .setDescription(`Теперь ваш майнинг будет приносить по ${y.farm} анархокойнов. UwU`)
            .setTimestamp()
            bot.send(embed)
        } else if (num1 == 2) {
            if (y.ancoin < 100) return bot.send("У вас недостаточно средств!")
            y.farm += 10
            y.ancoin -= 100
            let embed = new Discord.MessageEmbed()
            .setTitle('Поздравляем с покупкой Ноутбука!')
            .setColor("#8600ff")
            .setDescription(`Теперь ваш майнинг будет приносить по ${y.farm} анархокойнов. UwU`)
            .setTimestamp()
            bot.send(embed)
        } else if (num1 == 3) {
            if (y.ancoin < 500) return bot.send("У вас недостаточно средств!")
            y.farm += 50
            y.ancoin -= 500
            let embed = new Discord.MessageEmbed()
            .setTitle('Поздравляем с покупкой Сервера для майнинга!')
            .setColor("#8600ff")
            .setDescription(`Теперь ваш майнинг будет приносить по ${y.farm} анархокойнов. UwU`)
            .setTimestamp()
            bot.send(embed)
        } else if (num1 == 4) {
            if (y.ancoin < 1000) return bot.send("У вас недостаточно средств!")
            y.farm += 100
            y.ancoin -= 1000
            let embed = new Discord.MessageEmbed()
            .setTitle('Поздравляем с покупкой Спец. сервера майнинга!')
            .setColor("#8600ff")
            .setDescription(`Теперь ваш майнинг будет приносить по ${y.farm} анархокойнов. UwU`)
            .setTimestamp()
            bot.send(embed)
        } else {
            let embed = new Discord.MessageEmbed()
            .setTitle("Ошибка товара.")
            .setColor("#cf1919")
            .setDescription('Такой товар отсутствует. Для просмотра товаром, пропишите: `;mining shop`')
            .setTimestamp()
            bot.send(embed)
        }
    } else if (args[0] == "buy_2"){
        if (t.rel < 5) return bot.send("Вы не достигли пятого уровня сброса!")
        var num1 = parseInt(args[1])
        if (num1 == 1) {
            if (y.ancoin < 50) return bot.send("У вас недостаточно средств!")
            if (t.gol_max >= 1000) return bot.send("У вас высший уровень максимального голода!")
            y.ancoin -= 50
            t.gol_max += 50
            let embed = new Discord.MessageEmbed()
            .setTitle('Поздравляем с улучшением максимального голода!')
            .setColor("#8600ff")
            .setDescription(`Теперь ваш максимальный голод равен ${t.gol_max}. UwU`)
            .setTimestamp()
            bot.send(embed)
        } else if (num1 == 2) {
            if (y.ancoin < 150) return bot.send("У вас недостаточно средств!")
            if (brg.labs == true) return bot.send("Лаборатория уже открыта!")
            y.ancoin -= 50
            brg.labs == true
            let embed = new Discord.MessageEmbed()
            .setTitle('Поздравляем, вы открыли лабораторию для всех!')
            .setColor("#8600ff")
            .setDescription("Теперь каждый может её использовать в команде `labs`! UwU")
            .setTimestamp()
            bot.send(embed)
        } else {
            let embed = new Discord.MessageEmbed()
            .setTitle("Ошибка товара.")
            .setColor("#cf1919")
            .setDescription('Такой товар отсутствует. Для просмотра товаром, пропишите: `;mining shop`')
            .setTimestamp()
            bot.send(embed)
        }
    } else if (args[0] == "mine") {
        if (talkedRecently.has(message.author.id)) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}. Вы устали. Подождите 10 минут`)
            .setColor("#f10b0b")
            .setThumbnail(message.author.displayAvatarURL())
            bot.send(embed);
            } else {
        if (t.rel < 5) return bot.send("Вы не достигли пятого уровня сброса!")
        let embed = new Discord.MessageEmbed()
        .setTitle("Время майнинга!")
        .setColor("#cf1919")
        .setDescription(`Нажмите на реакцию, чтобы начать майнить! \n Ваш баланс: ${y.ancoin} \n Ваша майнинговая сила: ${y.farm}`)
        .setTimestamp()
        .setFooter('Сообщение будет удалено через 15 секунд.')
        var generalChannel = bot.channels.cache.get(message.channel.id);
        generalChannel.send(embed).then((message) => { 
            message.react("🖥️");
            const filter = (reaction, user) => {
                return reaction.emoji.name === '🖥️'
              };
              
              const collector = message.createReactionCollector(filter, { time: 15000 }); 
              
              collector.on('collect', (reaction, user) => {
                if(user.id == '763735590029361182') return
                let embed = new Discord.MessageEmbed()
                .setTitle("Майн успешен!")
                .setColor("#cf1919")
                .setDescription(`Вы намайнили: ${y.farm}`)
                .setTimestamp()
                message.edit(embed);
                message.reactions.removeAll();
                y.ancoin += y.farm
              });
              
              collector.on('end', collected => {
                message.reactions.removeAll();
                message.delete()
              });
        });
        }talkedRecently.add(message.author.id);
        setTimeout(() => {
        talkedRecently.delete(message.author.id);
        }, 600000);
    }
};

module.exports.help = {
    name: "mining",
    aliases: [""]
};