const Discord = module.require("discord.js");
let brg = require('../birg.json')

let profile = require('../profile.json');
let craft = require('../craft.json');
let dnew = require('../dnew.json');

module.exports.run = async (bot,message,args) => {
  let g = brg
  let u = profile[message.author.id];
  let i = craft[message.author.id]
  message.delete();
  if (args[0]) {
    if (args[1]) {
        var num1 = parseInt(args[0])
        var num2 = parseInt(args[1])
        if (num1 == 1) {
            if (u.gem < num2) return bot.send("У вас нехватает кристаллов");
            let sym = num2 * g.obm
            let embed = new Discord.MessageEmbed()
            .setDescription(`Обмен завершён, вы получили ${sym} монет.`)
            .setColor("#ef0aff")
            .setThumbnail(message.author.displayAvatarURL())
            u.coins += sym
            u.gem -= num2
            bot.send(embed);
        } else if (num1 == 2) {
            if (u.fcoin < num2) return bot.send("У вас нехватает Foxкойнов");
            let sym = num2 * g.ttt
            let embed = new Discord.MessageEmbed()
            .setDescription(`Обмен завершён, вы получили ${sym} кристаллов`)
            .setColor("#ef0aff")
            .setThumbnail(message.author.displayAvatarURL())
            u.gem += sym
            u.fcoin -= num2
            bot.send(embed);
        } else if (num1 == 3) {
            if (u.fcoin < num2) return bot.send("У вас нехватает Foxкойнов");
            let sym = num2 * g.yyy
            let embed = new Discord.MessageEmbed()
            .setDescription(`Обмен завершён, вы получили ${sym} монет`)
            .setColor("#ef0aff")
            .setThumbnail(message.author.displayAvatarURL())
            u.coins += sym
            u.fcoin -= num2
            bot.send(embed);
        } else{
          let embed = new Discord.MessageEmbed()
          .setDescription(`Укажите от 1 до 3`)
          .setColor("#f30c0c")
          .setThumbnail(message.author.displayAvatarURL())
          bot.send(embed);
        }
     } else {
      let embed = new Discord.MessageEmbed()
      .setDescription(`Укажите кол-во обмена.`)
      .setColor("#f30c0c")
      .setThumbnail(message.author.displayAvatarURL())
      bot.send(embed);
     }
  } else {
    let embed = new Discord.MessageEmbed()
    .setDescription(`Биржа обмена:`)
    .setColor("#a89eff")
    .addField("Кристаллы[1]:",g.obm)
    .addField("FoxКойны(кристаллы)[2]:",g.ttt)
    .addField("FoxКойны(монеты)[3]:",g.yyy)
    .setThumbnail(message.author.displayAvatarURL())
    bot.send(embed);
  }

  var min = 1;
  var max = 100;
  var random1 = Math.floor(Math.random() * (max - min + 1)) + min;
  if (random1 >= 95) {
    var min = 1;
    var max = 5;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random == 3 || random == 2) {
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
}

module.exports.help = {
    name: "trade",
    aliases: [""]
};