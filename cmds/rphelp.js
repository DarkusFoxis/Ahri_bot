const Discord = module.require("discord.js");
const fs = require("fs");

let asd = ';';
let ad = 'обнять';
let as = 'поцеловать';
let kkl = 'погладить';
let ayd = 'укусить';
let alh = 'лови аптечку!';
let fga = 'пенёк!';
let rfs = 'закури косячок';
let slb = 'время спать';
let piuuu = 'Научи летать своего друга!';
let rev = 'Ты думал я не переиграю?';
let mus = 'Слушаем музыку';
let plus = 'rphelp+';
let ruk = 'Я хочу на ручки... Ну визьми-и-и.';

module.exports.run = async (bot,message) => {
    message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} РП команды бота:`)
  .setColor("#76458d")
   .addField("Префикс:", asd)
   .addField("hug", ad)
   .addField("kiss", as)
   .addField("pat", kkl)
   .addField("bite", ayd)
   .addField("аптечка", alh)
   .addField("пенёк", fga)
   .addField("косяк", rfs)
   .addField("zzz", slb)
   .addField("пинок", piuuu)
   .addField("реверс", rev)
   .addField("music", mus)
   .addField("ручки", ruk)
   .addField("Платные рп команды по поманде:", plus)
    bot.send(embed);
  };
module.exports.help = {
    name: "rphelp",
    aliases: [""]
};