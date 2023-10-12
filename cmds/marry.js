const Discord = module.require("discord.js");
let Image_i = 4;
let arrayImage = new Array(Image_i);
arrayImage[0] = "https://static.zerochan.net/Walkure.Romanze.full.848845.jpg";
arrayImage[1] = "https://i.pinimg.com/736x/25/7c/9d/257c9d60d7e20e83ae74b73458603af5.jpg";
arrayImage[2] = "https://static.zerochan.net/Gachi.Otome.Quintet.full.891270.jpg";
arrayImage[3] = "https://i.pinimg.com/originals/69/62/99/69629946aae4ba9d46af05edf54d8acb.jpg";

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports.run = async (bot,message,args) => {
  let Image = getRandomInRange(0,Image_i-1);
  let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0]))
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.guild.member(message.author.id)} сделал предложение ${member}. Ждём решения... Чтобы подтвердить, напишите: Да. Если же отклонить, то: Нет.`)
  .setColor("#eeff00")
  .setImage(arrayImage[Image])
  bot.send(embed);
  if(message.member.id = "Да") {
    let embed = new Discord.MessageEmbed()
    .setDescription(`Примите поздрвавления! ${message.guild.member(message.author.id)} и ${member} стали парой!`)
    .setColor("#eeff00")
    bot.send(embed);
  }
 else if(message.member.id = "Нет") {
  let embed = new Discord.MessageEmbed()
  .setDescription(`Примите извенения, уважаемый ${message.guild.member(message.author.id)}... ${member} отказала вам...`)
  .setColor("#eeff00")
  bot.send(embed);
 }
};
module.exports.help = {
    name: "marry",
    aliases: [""]
};