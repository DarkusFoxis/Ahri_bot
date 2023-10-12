const Discord = module.require("discord.js");
const fs = require("fs");

let asd = ';';
let ad = 'Есть ненавистник? Просто избатесь от него. Но, лучше решить всё мирным путём.';
let as = 'Если всё просто достало... Но помни! Смерть не выход!';
let kkl = 'Время закупится по максимум!';
let jdf = 'Отправь друга в дурдом! Или в дурку, на твоё усмотрение.';
let gda = 'запой он и в африке запой';

module.exports.run = async (bot,message) => {
    message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} Платные РП команды бота:`)
  .setColor("#76458d")
   .addField("Префикс:", asd)
   .addField("kill (70)", ad)
   .addField("suicide (230)", as)
   .addField("запой (100)", gda)
   .addField("дурка (50)", jdf)   
   .addField("шоппинг (10000)", kkl) 
    bot.send(embed);
  };
module.exports.help = {
    name: "rphelp+",
    aliases: [""]
};