const Discord = module.require("discord.js");

let asd = ';';
let alh = 'Получите бонус';
let gda = 'Ваш инвентарь';
let dad = 'Ваш профиль';
let fgs = 'Поставь в профиль статус!'
let wrk = 'Заработай копеечку'
let kkk = 'А как насчёт кристалликов?'
let ob = 'Конвертируйте лишние кристаллы в монетки.'
let ff = 'Майнить Foxкойны!!!'
let m = 'Магазинчик.'
let h = 'Покупка товаров из магазина.'
let us = 'Использование товаров'
let at = 'Атакуй своего обидчика, и заставь его пожалеть!'
let tt = 'Ваша статистика.'
let u = 'Улучшение статы.'
let p = 'Открой новою ветвь развития!'
let k = `Запрет к атакам.`
let pve = 'Премиальная команда, доступная емеральдам, но в ней ты можешь получить **топовые бонусы**.'
let pvp = 'Как и pve, но доступна всем, и слабее.'
let xxx = 'Инвентарь вкусняшек.'
let nom = 'Магазин вкусняшек.'
let sms = 'Отправить сообщение пользователю'
let sm = 'Прочитать сообщения'
let kk = 'Изменить репутацию'
let ll = 'Раздел майнинга'
let iii = 'Переводы'

module.exports.run = async (bot,message) => {
    message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} Команды бота:`)
  .setColor("#5f2020")
   .addField("Префикс:", asd)
   .addField("profile", dad)
   .addField("setstat", fgs)
   .addField("work", wrk)
   .addField("rud", kkk)
   .addField ("trade", ob)
   .addField("bonus", alh)
   .addField("inv", gda)
   .addField("mine", ff)
   .addField("shop",m)
   .addField("buy",h)
   .addField("use",us)
   .addField("atak",at)
   .addField("stats",tt)
   .addField("upd",u)
   .addField("evol",p)
   .addField("block", k)
   .addField("pve", pve)
   .addField("pvp", pvp)
   .addField("xol", xxx)
   .addField("nomshop",nom)
   .addField("setm(500)", sms)
   .addField("sms",sm)
   .addField("like",kk)
   .addField("mining",ll)
   .addField("pay", iii)
    bot.send(embed);
  };
module.exports.help = {
    name: "echelp",
    aliases: [""]
};