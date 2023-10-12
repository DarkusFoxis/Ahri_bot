const Discord = module.require("discord.js");

let dnew = require('../dnew.json');

module.exports.run = async (bot,message) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Вы не администратор!')
    var min = 1;
    var max = 5;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    let d = dnew[random]
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setDescription(`Информация о дневнике №${random}: \n Найден: ${d.seen} \n Изучен: ${d.infork}`)
    bot.send(embed)

};

module.exports.help = {
    name: "dtest",
};