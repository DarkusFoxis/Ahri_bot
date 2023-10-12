const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let guild = message.guild

    let reason = args.slice(0).join(' ') || 'Не указана' // причина
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setDescription(`Бот был удалён с этого сервера. Причина: ${reason}`)
    .setColor("#02fff1")
    bot.send(embed)
    guild.leave()
}

module.exports.help = {
    name: "666",
    aliases: [""]
};