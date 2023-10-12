const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    let botmessage = args.join("");
    const user = bot.users.cache.get('623138662908952597');
    let rUser2 = message.guild.member(message.author.id);
    message.delete().catch();
    bot.send("Сообщение о баге отправленно.")
    user.send(`Обнаружен баг. Отправитель: ${rUser2}. Содержимое багрепорта: ${botmessage}`)
};
module.exports.help = {
    name: "bugreport",
    aliases: [""]
};