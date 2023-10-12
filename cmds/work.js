const Discord = module.require("discord.js");
const talkedRecently = new Set();

let profile = require('../profile.json');
let inf = require('../inf.json');
let prof = require('../prof.json');
let effect = require('../effect.json');

module.exports.run = async (bot,message) => {
  message.delete();
  if (talkedRecently.has(message.author.id)) {
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)}. Вы устали. Подождите 5 минут`)
  .setColor("#f10b0b")
  .setThumbnail(message.author.displayAvatarURL())
  bot.send(embed);
  } else {
  var min = 1;
  var max = 200;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(random)
  let u = profile[message.author.id];
  let o = inf[message.author.id];
  let j = prof[message.author.id];
  let i = effect[message.author.id];
  let sum = random * u.vip
  if (random <= 50){
    var min1 = 1;
    var max1 = 3;
    var random2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    let prof = "Неизвестно"
    if (random2 == 1){
      prof = "дворником"
    } else if (random2 == 2) {
      prof = "продавцом"
    } else if (random2 == 3) {
      prof = "курьером"
    }
    let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}, работа завершена!`)
    .setColor("#47ff9b")
    .setDescription(`Сегодня вы работали ${prof}, и заработали ${sum} монет!`)
    .setThumbnail(message.author.displayAvatarURL())
    bot.send(embed);
    j.gol -= 7
    if (j.gol <= 0){
      j.gol = 0
      j.HP -= 7
    }
    if (random >= 20 && random <= 25 ){
      let embed = new Discord.MessageEmbed()
      .setTitle(`О нет!`)
      .setColor("#8B0000")
      .setDescription(`Сегодня вы решили купить в ларьке перекусить, и похоже, перекус был не первой свежести... Вы **отравились**!`)
      bot.send(embed);
      i.poison.time = 5
      i.poison.atak = 3
      i.poison.golod = 5
    }
    u.coins += sum
    talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 300000);
  } else if (51 <= random && random <= 100){
    var min2 = 1;
    var max2 = 3;
    var random2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    let prof = "Неизвестно"
    if (random2 == 1){
      prof = "сантехником"
    } else if (random2 == 2) {
      prof = "пилотом"
    } else if (random2 == 3) {
      prof = "дальнабойщиком"
    }
    let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}, работа завершена!`)
    .setColor("#47ff9b")
    .setDescription(`Сегодня вы работали ${prof}, и заработали ${sum} монет!`)
    .setThumbnail(message.author.displayAvatarURL())
    bot.send(embed);
    j.gol -= 5
    if (j.gol <= 0){
      j.gol = 0
      j.HP -= 5
    }
    if (random >= 60 && random <= 65 ){
      let embed = new Discord.MessageEmbed()
      .setTitle(`О нет!`)
      .setColor("#8B0000")
      .setDescription(`Сегодня вы решили купить в ларьке перекусить, и похоже, перекус был не первой свежести... Вы **отравились**!`)
      bot.send(embed);
      i.poison.time = 5
      i.poison.atak = 3
      i.poison.golod = 5
    }
    u.coins += sum
    talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 300000);
  } else if (101 <= random && random <= 150){
    var min3 = 1;
    var max3 = 3;
    var random2 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
    let prof = "Неизвестно"
    if (random2 == 1){
      prof = "программистом класса джуниор"
    } else if (random2 == 2) {
      prof = "программистом класса мидл"
    } else if (random2 == 3) {
      prof = "программистом класса сеньёр"
    }
    let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}, работа завершена!`)
    .setColor("#47ff9b")
    .setDescription(`Сегодня вы работали ${prof}, и заработали ${sum} монет!`)
    .setThumbnail(message.author.displayAvatarURL())
    bot.send(embed);
    j.gol -= 3
    if (j.gol <= 0){
      j.gol = 0
      j.HP -= 3
    }
    if (random >= 120 && random <= 125 ){
      let embed = new Discord.MessageEmbed()
      .setTitle(`О нет!`)
      .setColor("#8B0000")
      .setDescription(`Вы вспомнили, что должны были сдать проект ещё несколько часов назад! Вы решили, что пока начальник не видит, вы успеете его доделать, и сдать, в надежде на то, что начальник не заметит... Вы работали слишком нервно, что даже **сгорели**!`)
      bot.send(embed);
      i.fire.time = 3
      i.fire.atak = 9
    }
    u.coins += sum
    talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 300000);
  } else if (151 <= random && random <= 200){
    var min5 = 1;
    var max5 = 3;
    var random2 = Math.floor(Math.random() * (max5 - min5 + 1)) + min5;
    let prof = "Неизвестно"
    if (random2 == 1){
      prof = "топ-менеджером"
    } else if (random2 == 2) {
      prof = "певцом/артистом"
    } else if (random2 == 3) {
      prof = "финансистом"
    }
    let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}, работа завершена!`)
    .setColor("#47ff9b")
    .setDescription(`Сегодня вы работали ${prof}, и заработали ${sum} монет!`)
    .setThumbnail(message.author.displayAvatarURL())
    bot.send(embed);
    j.gol -= 1
    if (j.gol <= 0){
      j.gol = 0
      j.HP -= 1
    }
    if (random >= 160 && random <= 165 ){
      let embed = new Discord.MessageEmbed()
      .setTitle(`О нет!`)
      .setColor("#8B0000")
      .setDescription(`Вы очень сильзо заработались, что даже забыли о том, как выглядит еда... Вы **голодны**`)
      bot.send(embed);
      i.golod += 5
      j.gol = 0
    }
    u.coins += sum
  }talkedRecently.add(message.author.id);
  setTimeout(() => {
  talkedRecently.delete(message.author.id);
  }, 300000);
  if (random >= 195){
    var min = 10;
    var max = 70;
    var gemn = Math.floor(Math.random() * (max - min + 1)) + min;
    let embed = new Discord.MessageEmbed()
    .setDescription(`За хорошую работу, вам вручили токен, и премию в виде ${gemn} кристаллов UwU`)
    .setColor("#47ff9b")
    bot.send(embed);
    o.toc += 1
    u.gem += gemn
  }
  talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 300000);
}
};
module.exports.help = {
    name: "work",
    aliases: [""]
};
