const Discord = module.require("discord.js");

let profile = require('../profile.json');
let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
  message.delete();
  let u = profile[message.author.id];
  let o = inf[message.author.id];
  if (!args[0]) {
  let embed = new Discord.MessageEmbed()
  .setDescription(':pencil: Ваш профиль:')
  .setColor("#47ff9b")
  .setThumbnail(message.author.displayAvatarURL())
  .addField("<:name:917003222814687313> Имя:", o.nick) .addField("<:age:917004077810995220> Возраст:", o.age)
  .addField("<:bio:917004382439104533> Статус:", u.stat) .addField("<:vip:916994523677220864> VIP:", u.vip)
  .addField("<:levelup:917006058361352203> Уровень:", u.lvl) .addField("<a:xp:917005370872987678> Xp:", u.xp)
  .addField('<:rep:917001462092029962> Репутация', u.rep)
  .addField(":bow_and_arrow: Доступ к системе атак:",o.bl)
  .addField("<:tocen:916994925810290718> Токенов:", o.toc)
  bot.send(embed);
  } else{
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник 
    if(!member) return bot.send("Пользователь не найден");
    if(!profile[member.id] || !inf[member.id])return bot.send("Вы не можете просмотреть профиль пользователя, т. к. он не в ивенте.");
    let i = profile[member.id];
    let l = inf[member.id];
    let embed = new Discord.MessageEmbed()
  .setDescription(`:pencil: Профиль ${member}:`)
  .setColor("#47ff9b")
  .setThumbnail(member.user.displayAvatarURL())
  .addField("<:name:917003222814687313> Имя:", l.nick) .addField("<:age:917004077810995220> Возраст:", l.age)
  .addField("<:bio:917004382439104533> Статус:", i.stat) .addField("<:vip:916994523677220864> VIP:", i.vip)
  .addField("<:levelup:917006058361352203> Уровень:", i.lvl) .addField("<a:xp:917005370872987678> Xp:", i.xp)
  .addField('<:rep:917001462092029962> Репутация', i.rep)
  .addField(":bow_and_arrow: Доступ к системе атак:",l.bl)
  .setTimestamp()
  .setFooter(`${message.author.tag}`)
  bot.send(embed);
  }
};
module.exports.help = {
    name: "profile",
    aliases: [""]
};