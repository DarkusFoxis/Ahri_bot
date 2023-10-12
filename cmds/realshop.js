const Discord = module.require("discord.js");

module.exports.run = async (bot,message) => {
  message.delete();
  let embed = new Discord.MessageEmbed()
  .setTitle('Магазин за реальные деньги:')
  .setColor("#47ff9b")
  .setDescription(`Ваша команда (10-30 руб.)- создание вашей команды, будь та рп или же нет. \nВаше обновление (30-50 руб.)- следующее обновление будет по вашим и только вашим идеям. \nБот для вашего сервера (100+ руб.)- создание вашего бота. \nP.S.: Цена зависит от сложности выполнения. Минимальная цена- **const** и не может быть снижена.\nПеред покупкой, обязательно ознакомтесь с [Пользовательским соглашением](https://docs.google.com/document/d/1cHRldp11GH3O9l0MiClr50M7fKlV5sBC7A542n2VPBU/edit?usp=sharing)`)
  .setTimestamp()
  bot.send(embed);
};
module.exports.help = {
    name: "realshop",
    aliases: [""]
};