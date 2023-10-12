const Discord = module.require("discord.js");
const talkedRecently = new Set();

let profile = require('../profile.json');
let crf = require('../craft.json');
let prof = require('../prof.json');
let inv = require('../inv.json');
let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
  let o = inf[message.author.id];
  message.delete();
  if (o.blok == 1) return bot.send(`Вы не в системе атак.`)
  if (talkedRecently.has(message.author.id)) {
    let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)}. Вы уже работали на руднике. Подождите 1 час, до следующего сбора.`)
  .setColor("#f10b0b")
  .setThumbnail(message.author.displayAvatarURL())
  bot.send(embed);
  } else {
  var min = 5;
  var max = 15;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  let u = profile[message.author.id];
  let r = prof[message.author.id];
  let sum = random * u.vip
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)}. Вы хорошо сегодня поработали на руднике, и теперь можете забрать свои ${sum} кристаликов`)
  .setColor("#9618e6")
  .setThumbnail(message.author.displayAvatarURL())
  u.gem += sum
  r.gol -= 10
  if (r.gol <= 0){
    r.gol = 0
    r.HP -= 10
  }
  bot.send(embed);
  if(random >= 9){
    min = 1
    max = 7
    var stone = Math.floor(Math.random() * (max - min + 1)) + min
    if (stone == 1){
      let q = crf[message.author.id];
      let embed = new Discord.MessageEmbed()
      .setDescription(`Вау, при раскопке шахты вы увидели странный свет, и решили пройти дальше. Вы увидели странный камушек. При доскональном изучении выяснилось, что это Магический камень.`)
      .setColor("#9618e6")
      q.mag_ston += 1
      r.gol -= 3
      if (r.gol <= 0){
        r.gol = 0
        r.HP -= 3
      }
      bot.send(embed)
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3600000);
    } else if (stone == 2) {
      let q = crf[message.author.id];
      let embed = new Discord.MessageEmbed()
      .setDescription(`Вау, при раскопке шахты вы увидели странный свет, и решили пройти дальше. Вы увидели странный камушек. При доскональном изучении выяснилось, что это Камень тьмы.`)
      .setColor("#9618e6")
      q.dark_ston += 1
      r.gol -= 3
      if (r.gol <= 0){
        r.gol = 0
        r.HP -= 3
      }
      bot.send(embed)
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3600000);
    } else if (stone == 3) {
      min = 0
      max = 100
      var kk = Math.floor(Math.random() * (max - min + 1)) + min
      let q = crf[message.author.id];
      let t = inv[message.author.id]; 
      let embed = new Discord.MessageEmbed()
      .setDescription(`Нет! Шахта обваливается!`)
      .setColor("#000000")
      bot.send(embed)
      if (kk <= 25) {
        let embed = new Discord.MessageEmbed()
        .setDescription(`Фух, повезло. Вы успели выбраться... Могло быть и хуже...`)
        .setColor("#9618e6")
        r.gol -= 25
        if (r.gol <= 0){
          r.gol = 0
          r.HP -= 25
        }
        bot.send(embed)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        talkedRecently.delete(message.author.id);
        }, 3600000);
      } else if (kk >= 26) {
        ipg = 30 * (r.ev + 1)
        let embed = new Discord.MessageEmbed()
        .setDescription(`Не-е-ет! К сожалению вы не успели выбраться... Вы серьёзно пострадали, и поехали в больницу. Вы потеряли ${ipg} жизней.`)
        .setColor("#000000")
        bot.send(embed)
        r.HP -= ipg
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        talkedRecently.delete(message.author.id);
        }, 3600000);
        if (r.HP <= 0) {
          let embed = new Discord.MessageEmbed()
          .setDescription(`Вы не смогли выжить... Вы умерли по дороге в больницу... Я вас воскрешу, но... Простите... Ваши ресурсы остались в шахте...`)
          .setColor("#000000")
          u.coins = 0,
          u.xp = 0,
          u.lvl = 1,
          u.gem = 0,
          u.fcoin = 0,
          t.xp_up = 0,
          t.lvl_up = 0,
          t.cofee = 0,
          t.tea = 0,
          t.hel = 0
          r.HP = 100,
          r.HPm =100,
          r.gol = r.gol_max
          r.at = 1,
          r.ev = 0,
          r.wep = "Отсутствует",
          q.fire_ston = 0,
          q.dark_ston = 0,
          q.mag_ston = 0,
          q.stick = 0,
          r.det += 1, 
          bot.send(embed)
          talkedRecently.add(message.author.id);
          setTimeout(() => {
          talkedRecently.delete(message.author.id);
          }, 3600000);
        };
      }

    } else if (stone == 4){
      let q = crf[message.author.id];
      let embed = new Discord.MessageEmbed()
      .setDescription(`Вау, при раскопке шахты вы увидели странный свет, и решили пройти дальше. Вы увидели странный камушек. При доскональном изучении выяснилось, что это Камень огня.`)
      .setColor("#9618e6")
      q.fire_ston += 1
      r.gol -= 3
      if (r.gol <= 0){
        r.gol = 0
        r.HP -= 3
      }
      bot.send(embed)
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3600000);
    } else if (stone == 5){
      let q = crf[message.author.id];
      let embed = new Discord.MessageEmbed()
      .setDescription(`Вау, при раскопке шахты вы увидели странный свет, и решили пройти дальше. Вы увидели странный камушек. При доскональном изучении выяснилось, что это Камень водного мира.`)
      .setColor("#9618e6")
      q.aqua_ston += 1
      r.gol -= 3
      if (r.gol <= 0){
        r.gol = 0
        r.HP -= 3
      }
      bot.send(embed)
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3600000);
    } else if (stone == 6){
      let q = crf[message.author.id];
      let embed = new Discord.MessageEmbed()
      .setDescription(`Вау, при раскопке шахты вы увидели странный свет, и решили пройти дальше. Вы увидели странный камушек. При доскональном изучении выяснилось, что это Камень вулканического мира.`)
      .setColor("#9618e6")
      q.volcanic_ston += 1
      r.gol -= 3
      if (r.gol <= 0){
        r.gol = 0
        r.HP -= 3
      }
      bot.send(embed)
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3600000);
    } else if (stone == 7){
      let q = crf[message.author.id];
      let embed = new Discord.MessageEmbed()
      .setDescription(`Вау, при раскопке шахты вы увидели странный свет, и решили пройти дальше. Вы увидели странный камень, который был очень вязок. При доскональном изучении выяснилось, что это эссенция знаний.`)
      .setColor("#9618e6")
      q.infor_essence += 1
      r.gol -= 3
      if (r.gol <= 0){
        r.gol = 0
        r.HP -= 3
      }
      bot.send(embed)
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3600000);
    }
  }
  talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 3600000);
}
};
module.exports.help = {
    name: "rud",
    aliases: [""]
};