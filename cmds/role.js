const Discord = module.require("discord.js");

let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
    let o = inf[message.author.id];
    message.delete();
    if(!args[0]){
        let embed = new Discord.MessageEmbed()
        .setColor('#43e2f7')
        .setTitle('Вы в меню настройки роли!')
        .setDescription(`name - Управление именем роли. \ncolor - Смена цвета роли \non/off - Включение/Выключение отображение роли. \nВаша роль: <@&${o.rol.id}>`)
        bot.send(embed)
    } else if (args[0] == "name"){
        if(!o.rol || o.rol == "Роль отсутствует") return bot.send("Для использование команды, приобретите роль!")
        let strong = "";
        for (let i = 1;i < args.length;i++) 
        {
            strong += args[i] + " ";
        }
        let embed = new Discord.MessageEmbed()
        .setColor('#43e2f7')
        .setTitle('Имя изменено!')
        .setDescription(`Прошлое имя: ${o.rol.name}, новое имя: ${strong}`)
        var role = message.guild.roles.cache.find(role => role.id === o.rol.id);
        bot.send(embed)
        o.rol.name = strong
        role.setName(strong)
    } else if (args[0] == "color"){
        if(!o.rol || o.rol == "Роль отсутствует") return bot.send("Для использование команды, приобретите роль!")
        if (!args[1]){
        let embed = new Discord.MessageEmbed()
        .setColor('#8B0000')
        .setTitle('Не знаете какой выбрать цвет?')
        .setDescription(`Весь перечень цветов дискорда, вы можете прочитать [тут(клик)](https://colorscheme.ru/html-colors.html)`)
        bot.send(embed)
        return
        }
        var RegExp = /^#[0-9A-F]{6}$/i;
        let te = RegExp.test(args[1]);
        if(te == true){
        let embed = new Discord.MessageEmbed()
        .setColor(args[1])
        .setTitle('Цвет изменён!')
        var role = message.guild.roles.cache.find(role => role.id === o.rol.id);
        bot.send(embed)
        role.setColor(args[1])
        } else {
        let embed = new Discord.MessageEmbed()
        .setColor('#8B0000')
        .setTitle('Ошибка цвета!')
        .setDescription(`Кажется, вы ошиблись цветом. Весь перечень цветов дискорда, вы можете прочитать [тут(клик)](https://colorscheme.ru/html-colors.html)`)
        bot.send(embed)
        }
    } else if (args[0] == "on") {
        if(!o.rol || o.rol == "Роль отсутствует") return bot.send("Для использование команды, приобретите роль!")
        var role = message.guild.roles.cache.find(role => role.id === o.rol.id);
        let embed = new Discord.MessageEmbed()
        .setColor('#8B0000')
        .setTitle('Включение роли...')
        .setDescription(`Теперь ваша роль видна UwU`)
        bot.send(embed)
        role.setHoist(true)
    } else if (args[0] == "off") {
        if(!o.rol || o.rol == "Роль отсутствует") return bot.send("Для использование команды, приобретите роль!")
        var role = message.guild.roles.cache.find(role => role.id === o.rol.id);
        let embed = new Discord.MessageEmbed()
        .setColor('#8B0000')
        .setTitle('Выключение роли...')
        .setDescription(`Теперь ваша роль скрыта UwU`)
        bot.send(embed)
        role.setHoist(false)
    }
};
module.exports.help = {
    name: "role",
    aliases: [""]
};