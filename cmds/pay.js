const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require('../profile.json');
let prof = require('../prof.json');

module.exports.run = async (bot,message,args) => {
    if(!args[0]) return bot.send("Вы не указали пользователя");
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник 
    if(!member) return bot.send("Пользователь не найден");
    if(!profile[member.id])return bot.send("Вы не можете передать что-либо пользователю, т. к. он не в ивенте.");
    if(message.author.id == member.id) return bot.send("Вы не можете выполнять эту операцию с собой!!!")
    let y = profile[member.id];
    let p = profile[message.author.id]
    let r = prof[member.id]
    let o = prof[message.author.id]
    if(!args[1]){
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setTitle('Передача:')
        .setColor("#f47fff")
        .setDescription('coin - Монеты, gem - Кристаллы, foxcoin - Вечнопушистые, anarhcoin - Анархокойны \n Правильность написания команды: `pay @link coin/gem/foxcoin/anarhcoin кол-во`')
        .setTimestamp()
        bot.send(embed);
    } else if(args[1] == 'coin') {
		if(!args[2]) return bot.send("А сколько передать?")
		var numl = parseInt(args[2])
		if(numl > p.coins) return bot.send("Вы не можете передать больше своего баланса!!!")
        if(numl < 1) return bot.send("Вы не можете передать 0 и меньше!")
        message.delete()
		let embed = new Discord.MessageEmbed()
        .setTitle('Транкзация успешна!')
        .setColor("#f47fff")
        .setDescription(`${message.guild.member(message.author.id)} передал ${member} ${numl} монет.`)
        .setTimestamp()
        bot.send(embed);
		p.coins -= numl
		y.coins += numl
	} else if (args[1] == 'gem') {
		if(!args[2]) return bot.send("А сколько передать?")
		var numl = parseInt(args[2])
		if(numl > p.gem) return bot.send("Вы не можете передать больше своего баланса!!!")
        if(numl < 1) return bot.send("Вы не можете передать 0 и меньше!")
        message.delete()
        let embed = new Discord.MessageEmbed()
		.setTitle('Транкзация успешна!')
        .setColor("#f47fff")
        .setDescription(`${message.guild.member(message.author.id)} передал ${member} ${numl} кристаллов.`)
        .setTimestamp()
        bot.send(embed);
		p.gem -= numl
		y.gem += numl
	
	} else if (args[1] == 'foxcoin') {
		if(!args[2]) return bot.send("А сколько передать?")
		var numl = parseInt(args[2])
		if(numl > p.fcoin) return bot.send("Вы не можете передать больше своего баланса!!!")
        if(numl < 1) return bot.send("Вы не можете передать 0 и меньше!")
        message.delete()
        let embed = new Discord.MessageEmbed()
		.setTitle('Транкзация успешна!')
        .setColor("#f47fff")
        .setDescription(`${message.guild.member(message.author.id)} передал ${member} ${numl} вечнопушистых.`)
        .setTimestamp()
        bot.send(embed);
		p.fcoin -= numl
		y.fcoin += numl
	
	}else if (args[1] == 'anarhcoin') {
		if(!args[2]) return bot.send("А сколько передать?")
		var numl = parseInt(args[2])
		if(numl > p.ancoin) return bot.send("Вы не можете передать больше своего баланса!!!")
        if(r.rel < 5) return bot.send("Вы не можете передать, т. к. у получателя низкий уровень сброса!")
        if(o.rel < 5) return bot.send("Вы не можете передать, т. к. у вас низкий уровень сброса!")
        if(numl < 1) return bot.send("Вы не можете передать 0 и меньше!")
        message.delete()
        let embed = new Discord.MessageEmbed()
		.setTitle('Транкзация успешна!')
        .setColor("#f47fff")
        .setDescription(`${message.guild.member(message.author.id)} передал ${member} ${numl} анархокойнов.`)
        .setTimestamp()
        bot.send(embed);
		p.ancoin -= numl
		y.ancoin += numl
	
	} else {
        let embed = new Discord.MessageEmbed()
        .setTitle('Передача:')
        .setColor("#f47fff")
        .setDescription('coin - Монеты \n gem - Кристаллы \n foxcoin - Вечнопушистые \n anarhcoin - Анархокойны')
        .setTimestamp()
        bot.send(embed);
    }
}
module.exports.help = {
    name: "pay",
    aliases: [""]
};