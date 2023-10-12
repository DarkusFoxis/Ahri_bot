const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    ant = ""
    var min = 1;
    var max = 10;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random == 1){
        ant = "Точно да!"
    } else if (random == 2){
        ant = "Переспроси позже..."
    } else if (random == 3){
        ant = "Я не могу сказать..."
    } else if (random == 4){
        ant = "Точно нет!"
    } else if (random == 5){
        ant = "Скорее да, чем нет..."
    } else if (random == 6){
        ant = "Скорее нет, чем да..."
    } else if (random == 7){
        ant = "Этот вопрос я не могу рассмотреть!"
    } else if (random == 8){
        ant = "Ответ зависит от вас!"
    } else if (random == 9){
        ant = "Слишком личный вопрос!!!"
    } else if (random == 10){
        ant = "Я не знаю ответа!!!"
    }
    message.delete();
    let embed = new Discord.MessageEmbed()
    .setTitle("Шар даёт ответ!")
    .setColor('#4B0082')
    .setDescription(`Ваш вопрос: ${args.join(" ")}; \nМой ответ: ${ant}`)
    bot.send(embed)
  };
  
  module.exports.help = {
      name: "8ball",
      aliases: [""]
  };