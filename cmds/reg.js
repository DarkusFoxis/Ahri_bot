const Discord = module.require("discord.js");

let profile = require('../profile.json');

module.exports.run = async (bot,message,args) => {
    let y = profile[message.author.id];
    let rUser = message.guild.member(message.author.id);
    var role = message.guild.roles.cache.find(role => role.id === "854585006063353856");
    var role2 = message.guild.roles.cache.find(role => role.id === "853356097356431380");
    if (args[0] == `87345652`) {
        message.delete()
        if(rUser.roles.cache.has("800434822929186846")) return bot.send("Вы зарегистрированны.")
        message.author.send(`Добро пожаловать в измерение анархии. Приятной резни!`)
        rUser.roles.add(role)
    } else if (args[0] == `873891`){
        message.delete()
        message.author.send(`Добро пожаловать в измерение анархии. Т. к. вы не являетесь авторизованнным участником, большинство возможностей для вас закрыты. Пожалуйста, для авторизации обратитесь к <@!623138662908952597>, с просьбой авторизации вас.`)
        rUser.roles.add(role2)
    } else if(args[0] == `fworld1649`){
        message.delete()
        if(rUser.roles.cache.has("800434822929186846")) return bot.send("Вы зарегистрированны.")
        message.author.send(`Добро пожаловать в измерении анархии. Т. к. вы с союзного сервера, держите в подарок + 10 вечнопушистых монеток. Удачной резни!`)
        rUser.roles.add(role)
        y.fcoin += 10
    } else {
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setDescription('Неправильный ключ доступа')
        bot.send(embed)
    } 
};

module.exports.help = {
    name: "reg",
};
