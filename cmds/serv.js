const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    message.delete()
    message.author.send(`Добро пожаловать в мир лис. Если быть точнее, во вселенную FoxWorld. Здесь вы найдёте тёплую атмосферу, добрую, и отзывчивую администрацию, которая поможет тебе определиться, что, где и как. Мы прислушиваемся к вашим предложениям, поэтому нам важен каждый. И возможно именно ты, сможешь изменить нашу вселенную в лучшую сторону. Мы ждём каждого, в нашей вселенной FoxWorld. Только соблюдай законы, хорошо? ^-^
    Ссылка: https://discord.gg/XksRuNtJYS`)
    bot.send(embed)

};
module.exports.help = {
    name: "serv",
};