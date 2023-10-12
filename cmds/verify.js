const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.author. id);
    var role = message.guild.roles.cache.find(role => role.id === "800421530735476788");
    if (args[0] == `565514`) {
        message.delete()
        message.author.send(`Теперь вы модератор! За бездействие в течении 3-х дней вы будете сняты с должности. Пожалуйста, уважайте ваших партнёров.`)
        rUser.roles.add(role)
        bot.send(embed)
    } else {
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setDescription('Неправильный ключ доступа')
        bot.send(embed)
    } 
};

module.exports.help = {
    name: "verify",
};