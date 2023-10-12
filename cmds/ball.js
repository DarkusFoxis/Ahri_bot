const Discord = module.require("discord.js");

let profile = require('../profile.json');
let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
    message.delete();
    let u = profile[message.author.id];
    if(args[0]){
        let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0]))
        let y = profile[member.id];
        let p = inf[member.id];
        if(!member) return bot.send("Пользователь не найден");
        if(p.blok == 1)return bot.send("Вы не можете просмотреть инвентарь пользователя, т. к. он не в системе атак.");
        let embed = new Discord.MessageEmbed()
        .setDescription(`<:bal:916996991945416704> Баланс ${member}:`)
        .setColor("#47ff9b")
        .setThumbnail(member.user.displayAvatarURL())
        .addField("<:goldcoin:916990084807557120> Коины:", y.coins) .addField("<:gem:916989982932099112> Кристалики:", y.gem)
        .addField ("<:foxcoin:916990051240525824> Fox-койны", y.fcoin)
        .addField ("<:ancoin:916989983557046322> Анархокойны:", y.ancoin)
        .setTimestamp()
        .setFooter(`${message.author.tag}`)
        bot.send(embed);
    } else{
        let embed = new Discord.MessageEmbed()
        .setDescription('<:bal:916996991945416704> Ваш баланс:')
        .setColor("#47ff9b")
        .setThumbnail(message.author.displayAvatarURL())
        .addField("<:goldcoin:916990084807557120> Коины:", u.coins) .addField("<:gem:916989982932099112> Кристалики:", u.gem)
        .addField ("<:foxcoin:916990051240525824> Fox-койны", u.fcoin)
        .addField ("<:ancoin:916989983557046322> Анархокойны:", u.ancoin)
        .setTimestamp()
        bot.send(embed);
    }
  };
  module.exports.help = {
      name: "bal",
      aliases: [""]
  };