const Discord = module.require("discord.js");

let profile = require('../profile.json');

module.exports.run = async (bot,message,args) => {
    let u = profile[message.author.id];
    if (u.lvl < 2) return message.channel.send('Не буду говорить. У вас низкий уровень для этой команды.')
    let botmessage = args.join(" ");
    message.delete().catch();
    bot.send(botmessage);
};
module.exports.help = {
    name: "say",
    aliases: [""]
};