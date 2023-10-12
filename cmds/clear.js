const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    if(args[0]>40) return bot.send("Слишком много ,_,. я могу убрать меньше 40 сообщений.");
    if(args[0]<1) return bot.send("Слишком мало, очень легко. Укажите число больше 1");
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`Готово, я убрал ${args[0]} мусора. Подождите, а где мусорное ведро?`).then(msg => msg.delete(15*1000));
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "clear",
    aliases: [""]
};