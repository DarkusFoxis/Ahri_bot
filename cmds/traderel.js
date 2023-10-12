const Discord = module.require("discord.js");
let brg = require('../birg.json')

module.exports.run = async (bot,message,args) => {
    let g = brg
    message.delete()
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Вы не администратор!')
    var min = 1;
    var max = 30;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`${random}`)
    g.obm = random
    var min2 = 1;
    var max2 = 15;
    var random2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    console.log(`${random2}`)
    g.ttt = random2
    var min3 = 100;
    var max3 = 500;
    var random3 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
    console.log(`${random3}`)
    g.yyy = random3
    let embed = new Discord.MessageEmbed()
    .setDescription(`Биржа обновлена.`)
    .setColor("#a89eff")
    bot.send(embed);
}

module.exports.help = {
    name: "traderel",
    aliases: [""]
};