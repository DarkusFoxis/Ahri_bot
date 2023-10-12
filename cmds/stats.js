const Discord = module.require("discord.js");

let prof = require('../prof.json');
let effect = require('../effect.json');

module.exports.run = async (bot,message,args) => {
  message.delete();
  if(!args[0]){
  let t = prof[message.author.id];
  let i = effect[message.author.id]
  var eff = ' '
  if (i.fire.time > 0) {
    eff += ':fire:'
  }
  if (i.golod > 0) {
    eff += ':poultry_leg:'
  }
  if (i.poison.time > 0) {
    eff += '<:poison:993798559260479568>'
  }
  let ooo = `${t.HP}/${t.HPm}`
  let gol = `${t.gol}/${t.gol_max}`
  if (t.ev == 0) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`<:stats:916996992473919508> Ваши статы:`)
    .setDescription(`:test_tube: Эффекты: ${eff}`)
    .setColor("#00ff66")
    .setThumbnail(message.author.displayAvatarURL())
    .addField(":heart: Жизни:", ooo)
    .addField(":meat_on_bone: Голод:", gol)
    .addField(":dagger: Атака:", t.at)
    .addField(":up: Уровень эволюции:", t.ev)
    .addField(":headstone: Смерти:", t.det)
    .addField(":gun: Убийства:", t.kil)
    .addField(":cyclone: Перерождений:",t.rel)
    .addField(":shield: Защита:", t.def)
    bot.send(embed);
  } else if (t.ev == 1) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`<:stats:916996992473919508> Ваши статы:`)
    .setDescription(`:test_tube: Эффекты: ${eff}`)
    .setColor("#16c7e9")
    .setThumbnail(message.author.displayAvatarURL())
    .addField(":heart: Жизни:", ooo)
    .addField(":meat_on_bone: Голод:", gol)
    .addField(":dagger: Атака:", t.at)
    .addField(":up: Уровень эволюции:", t.ev)
    .addField(":headstone: Смерти:", t.det)
    .addField(":gun: Убийства:", t.kil)
    .addField(":cyclone: Перерождений:",t.rel)
    .addField(":shield: Защита:", t.def)
    bot.send(embed);
  } else if (t.ev == 2) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`<:stats:916996992473919508> Ваши статы:`)
    .setDescription(`:test_tube: Эффекты: ${eff}`)
    .setColor("#ff1818")
    .setThumbnail(message.author.displayAvatarURL())
    .addField(":heart: Жизни:", ooo)
    .addField(":meat_on_bone: Голод:", gol)
    .addField(":dagger: Атака:", t.at)
    .addField(":up: Уровень эволюции:", t.ev)
    .addField(":headstone: Смерти:", t.det)
    .addField(":gun: Убийства:", t.kil)
    .addField(":cyclone: Перерождений:",t.rel)
    .addField(":shield: Защита:", t.def)
    bot.send(embed);
  } else if (t.ev == 3) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`<:stats:916996992473919508> Ваши статы:`)
    .setDescription(`:test_tube: Эффекты: ${eff}`)
    .setColor("#a89eff")
    .setThumbnail(message.author.displayAvatarURL())
    .addField(":heart: Жизни:", ooo)
    .addField(":meat_on_bone: Голод:", gol)
    .addField(":dagger: Атака:", t.at)
    .addField(":up: Уровень эволюции:", t.ev)
    .addField(":headstone: Смерти:", t.det)
    .addField(":gun: Убийства:", t.kil)
    .addField(":cyclone: Перерождений:",t.rel)
    .addField(":shield: Защита:", t.def)
    bot.send(embed);
  } else if (t.ev == 4) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`<:stats:916996992473919508> Ваши статы:`)
    .setDescription(`:test_tube: Эффекты: ${eff}`)
    .setColor("#8600ff")
    .setThumbnail(message.author.displayAvatarURL())
    .addField(":heart: Жизни:", ooo)
    .addField(":meat_on_bone: Голод:", gol)
    .addField(":dagger: Атака:", t.at)
    .addField(":up: Уровень эволюции:", t.ev)
    .addField(":headstone: Смерти:", t.det)
    .addField(":gun: Убийства:", t.kil)
    .addField(":cyclone: Перерождений:",t.rel)
    .addField(":shield: Защита:", t.def)
    bot.send(embed);
  } else if (t.ev == 5) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`<:stats:916996992473919508> Ваши статы:`)
    .setDescription(`:test_tube: Эффекты: ${eff}`)
    .setColor("#300000")
    .setThumbnail(message.author.displayAvatarURL())
    .addField(":heart: Жизни:", ooo)
    .addField(":meat_on_bone: Голод:", gol)
    .addField(":dagger: Атака:", t.at)
    .addField(":up: Уровень эволюции:", t.ev)
    .addField(":headstone: Смерти:", t.det)
    .addField(":gun: Убийства:", t.kil)
    .addField(":cyclone: Перерождений:",t.rel)
    .addField(":shield: Защита:", t.def)
    bot.send(embed);
  }
  } else {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник 
    if(!member) return bot.send("Пользователь не найден");
    if(!prof[member.id])return bot.send("Вы не можете просмотреть статистику пользователя, т. к. он не в ивенте.");
    let t = prof[member.id];
    let ooo = `${t.HP}/${t.HPm}`
    let gol = `${t.gol}/${t.gol_max}`
    if (t.ev == 0) {
      let embed = new Discord.MessageEmbed()
      .setDescription(`<:stats:916996992473919508> Статистики ${member}:`)
      .setColor("#00ff66")
      .setThumbnail(member.user.displayAvatarURL())
      .addField(":heart: Жизни:", ooo)
      .addField(":meat_on_bone: Голод:", gol)
      .addField(":dagger: Атака:", t.at)
      .addField(":up: Уровень эволюции:", t.ev)
      .addField(":headstone: Смерти:", t.det)
      .addField(":gun: Убийства:", t.kil)
      .addField(":cyclone: Перерождений:",t.rel)
      .addField(":shield: Защита:", t.def)
      .setTimestamp()
      .setFooter(`${message.author.tag}`)
      bot.send(embed);
    } else if (t.ev == 1) {
      let embed = new Discord.MessageEmbed()
      .setDescription(`<:stats:916996992473919508> Статистики ${member}:`)
      .setColor("#16c7e9")
      .setThumbnail(member.user.displayAvatarURL())
      .addField(":heart: Жизни:", ooo)
      .addField(":meat_on_bone: Голод:", gol)
      .addField(":dagger: Атака:", t.at)
      .addField(":up: Уровень эволюции:", t.ev)
      .addField(":headstone: Смерти:", t.det)
      .addField(":gun: Убийства:", t.kil)
      .addField(":cyclone: Перерождений:",t.rel)
      .addField(":shield: Защита:", t.def)
      .setTimestamp()
      .setFooter(`${message.author.tag}`)
      bot.send(embed);
    } else if (t.ev == 2) {
      let embed = new Discord.MessageEmbed()
      .setDescription(`<:stats:916996992473919508> Статистики ${member}:`)
      .setColor("#ff1818")
      .setThumbnail(member.user.displayAvatarURL())
      .addField(":heart: Жизни:", ooo)
      .addField(":meat_on_bone: Голод:", gol)
      .addField(":dagger: Атака:", t.at)
      .addField(":up: Уровень эволюции:", t.ev)
      .addField(":headstone: Смерти:", t.det)
      .addField(":gun: Убийства:", t.kil)
      .addField(":cyclone: Перерождений:",t.rel)
      .addField(":shield: Защита:", t.def)
      .setTimestamp()
      .setFooter(`${message.author.tag}`)
      bot.send(embed);
    } else if (t.ev == 3) {
      let embed = new Discord.MessageEmbed()
      .setDescription(`<:stats:916996992473919508> Статистики ${member}:`)
      .setColor("#a89eff")
      .setThumbnail(member.user.displayAvatarURL())
      .addField(":heart: Жизни:", ooo)
      .addField(":meat_on_bone: Голод:", gol)
      .addField(":dagger: Атака:", t.at)
      .addField(":up: Уровень эволюции:", t.ev)
      .addField(":headstone: Смерти:", t.det)
      .addField(":gun: Убийства:", t.kil)
      .addField(":cyclone: Перерождений:",t.rel)
      .addField(":shield: Защита:", t.def)
      .setTimestamp()
      .setFooter(`${message.author.tag}`)
      bot.send(embed);
    } else if (t.ev == 4) {
      let embed = new Discord.MessageEmbed()
      .setDescription(`<:stats:916996992473919508> Статистики ${member}:`)
      .setColor("#8600ff")
      .setThumbnail(member.user.displayAvatarURL())
      .addField(":heart: Жизни:", ooo)
      .addField(":meat_on_bone: Голод:", gol)
      .addField(":dagger: Атака:", t.at)
      .addField(":up: Уровень эволюции:", t.ev)
      .addField(":headstone: Смерти:", t.det)
      .addField(":gun: Убийства:", t.kil)
      .addField(":cyclone: Перерождений:",t.rel)
      .addField(":shield: Защита:", t.def)
      .setTimestamp()
      .setFooter(`${message.author.tag}`)
      bot.send(embed);
    } else if (t.ev == 5) {
      let embed = new Discord.MessageEmbed()
      .setDescription(`<:stats:916996992473919508> Статистики ${member}:`)
      .setColor("#300000")
      .setThumbnail(member.user.displayAvatarURL())
      .addField(":heart: Жизни:", ooo)
      .addField(":meat_on_bone: Голод:", gol)
      .addField(":dagger: Атака:", t.at)
      .addField(":up: Уровень эволюции:", t.ev)
      .addField(":headstone: Смерти:", t.det)
      .addField(":gun: Убийства:", t.kil)
      .addField(":cyclone: Перерождений:",t.rel)
      .addField(":shield: Защита:", t.def)
      .setTimestamp()
      .setFooter(`${message.author.tag}`)
      bot.send(embed);
    }

  }
};
module.exports.help = {
    name: "stats",
    aliases: [""]
};