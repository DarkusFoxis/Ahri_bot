const Discord = module.require("discord.js");
const talkedRecently = new Set();

let prof = require('../prof.json');
let inv = require('../inv.json');
let profile = require('../profile.json');
let crt = require('../craft.json');
let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
  message.delete();
  if (talkedRecently.has(message.author.id)) {
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)}. Вы устали. Подождите 1 минуту`)
    .setColor("#f10b0b")
    .setThumbnail(message.author.displayAvatarURL())
    bot.send(embed);
  } else{
        let i = inf[message.author.id];
        let t = prof[message.author.id];
        if(!args[0]) return bot.send("Вы не указали пользователя");
        let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник 
        if(!member) return bot.send("Пользователь не найден");
        if(!prof[member.id] || !inf[member.id])return bot.send("Пользователь не может быть атакован, т. к. он не в ивенте.");
        let p = inf[member.id];
        if(member == message.author.id) return bot.send("Вы не можете атаковать себя!")
        if(p.blok == 1)return bot.send("Пользователь не может быть атакован, т. к. он запретил атаковать себя.");
        if(i.blok == 1)return bot.send("Пользователь не может быть атакован, т. к. вы запретили атаковать себя.");
        let o = prof[member.id]
        var min = 0;
        var max = 100;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(random)
        if (random >= 90) {
          bot.send("Крит удар!")
          let num = t.at / 100 * 25
          let y = Math.ceil(num);
          let atak = t.at
          if (o.def == 0) {
            atak += y
          } else if (o.def < y) {
              y -= o.def
              o.def = 0
              atak += y
          } else {
            o.def -= y
          }
          let embed = new Discord.MessageEmbed()
          .setDescription(`${message.guild.member(message.author.id)} атаковал ${member}, и отнял у него ${atak} жизней. Защита: ${o.def}`)
          .setColor("#ef0aff")
        o.HP -= atak
        t.gol -= 30
        if (t.gol <= 0){
          t.gol = 0
          t.HP -= 30
        }
        bot.send(embed);
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 60000);
      } else {
        if (t.at < o.def){
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} атака не удалась: Защита вашего опонента больше вашей атаки! Ваша атака: ${t.at} \n Защита опонента: ${o.def}.`)
        .setColor("#ef0aff")
        t.gol -= 30
        if (t.gol <= 0){
          t.gol = 0
          t.HP -= 30
        }
        bot.send(embed);
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        talkedRecently.delete(message.author.id);
        }, 60000);
        return false;
        }
        let atal = t.at - o.def
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} атаковал ${member}, и отнял у него ${atal} жизней.`)
        .setColor("#ef0aff")
        o.HP -= atal
        t.gol -= 30
        bot.send(embed);
        talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 60000);
      } 
    } let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник 
      let o = prof[member.id]
      let u = inv[member.id]; 
      let q = crt[member.id];
      let n = crt[message.author.id];
      let a = inv[message.author.id];
      let r = profile[message.author.id];
      let t = prof[message.author.id];
      let y = profile[member.id];
      if (o.HP <= 0) {
        let embed = new Discord.MessageEmbed()
        .setDescription(`О нет! ${args[0]} умер! Я его сейчас верну, но, боюсь его ресурсы не спасти...`)
        bot.send(embed);
        r.coins += y.coins 
        r.gem += y.gem 
        r.fcoin += y.fcoin
        a.xp_up += u.xp_up
        a.lvl_up += u.lvl_up
        a.cofee += u.cofee
        a.tea += u.tea 
        n.fire_ston += q.fire_ston 
        n.dark_ston += q.dark_ston 
        n.mag_ston += q.mag_ston 
        n.stick += q.stick 
        y.coins = 0,
        y.xp = 0,
        y.lvl = 1,
        y.gem = 0,
        y.fcoin = 0,
        u.xp_up = 0,
        u.lvl_up = 0,
        u.cofee = 0,
        u.tea = 0,
        o.HP = 100,
        o.gol = o.gol_max
        o.HPm =100,
        o.at = 1,
        o.ev = 0,
        o.def = 0,
        o.wep = "Отсутствует",
        q.fire_ston = 0,
        q.dark_ston = 0,
        q.mag_ston = 0,
        q.stick = 0,
        o.det += 1, 
        t.kil += 1
      talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
    }, 60000);
  }
};
module.exports.help = {
    name: "atak",
    aliases: [""]
};