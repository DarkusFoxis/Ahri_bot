const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.author. id);
    var role = message.guild.roles.cache.find(role => role.id === "843446331887452161");
    if (args[0] == `552301`) {
        message.delete()
        message.author.send(`Теперь вы дизайнер, поздравляю! Если вы не будете коректно выполнять вашу работу, то вы можете быть сняты с должности.`)
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
    name: "ver",
};