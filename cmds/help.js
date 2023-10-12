const Discord = module.require("discord.js");
const fs = require("fs");

let asd = ';';
let alh = 'pong :wink: ';
let fga = 'Повторю вашу фразу';
let gda = 'время почистить чат (1-40)';
let fjiw = 'Создай шип пару :new_moon_with_face: (разработка)';
let slb = 'rphelp';
let kdl = 'Обновления в боте'
let mar = 'Свадьба!'
let ob = 'Помощь по экономике'
let pp = `Поддержка сервера.`
let oo = 'Сообщить о баге'

module.exports.run = async (bot,message) => {
    message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} Команды бота:`)
  .setColor("#5f2020")
   .addField("Префикс:", asd)
   .addField("ping", alh)
   .addField("say", fga)
   .addField("clear", gda)
   .addField("шип (2 упоминания)", fjiw)
   .addField("рп команы по команде", slb)
   .addField("обновления", kdl)
   .addField("marry (Пользователь)", mar)
   .addField ("echelp", ob)
   .addField("donate",pp)
   .addField("bugreport",oo)
    bot.send(embed);
  };
module.exports.help = {
    name: "help",
    aliases: [""]
};