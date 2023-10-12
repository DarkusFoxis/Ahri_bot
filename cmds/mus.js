const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('У вас нет прав!')
    message.delete();
    var min = 1;
    var max = 20;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random == 1) return message.channel.send('Песня - Monday Morning от CG5. Я начинаю: I know I’m lookin’ pretty fly in a suit,')
    if (random == 2) return message.channel.send('Песня - Take Over от LoL. Я начинаю: We at the top again, now what?')
    if (random == 3) return message.channel.send('Песня - My Demons от Starset. Я начинаю: Mayday! Mayday!')
    if (random == 4) return message.channel.send('Песня - The Phoenix от Fall Out Boy. Я начинаю: Put on your war paint!')
    if (random == 5) return message.channel.send('Песня - Бисмарк от SABATON. Я начинаю: From the mist a shape, a ship is taking form,')
    if (random == 6) return message.channel.send('Песня - Бисмарк от RADIO TAPOK. Я начинаю: Сквозь туман и мглу, во тьме скользит фантом,')
    if (random == 7) return message.channel.send('Песня - Битва за Москву от RADIO TAPOK. Я начинаю: 41й год, враг нас гнал, идя в обход')
    if (random == 8) return message.channel.send('Песня - Phoenix от LoL. Я начинаю: What are you willing to lose?')
    if (random == 9) return message.channel.send('Песня - Warriors от Imagine Dragons. Я начинаю: As a child, you would wait,')
    if (random == 10) return message.channel.send('Песня - Legends Never Die от LoL. Я начинаю: Legends never die,')
    if (random == 11) return message.channel.send('Песня - Believer от Imagine Dragons. Я начинаю: First things first,')
    if (random == 12) return message.channel.send('Песня - Follow You от Imagine Dragons. Я начинаю: You know I got your number, number all night.')
    if (random == 13) return message.channel.send('Песня - Heathens от RADIO TAPOK. Я начинаю: Все мои друзья входят во вкус,')
    if (random == 14) return message.channel.send('Песня - Восстань от The PanHeads Band. Я начинаю: Я вижу осколки,')
    if (random == 15) return message.channel.send('Песня - Rise от Skillet . Я начинаю: All I see is shattered pieces,')
    if (random == 16) return message.channel.send('Песня - Not Gonna Die от Skillet. Я начинаю: Death surrounds,')
    if (random == 17) return message.channel.send('Песня - Не умрём от PanHeads Band. Я начинаю: Смерть вокруг – ')
    if (random == 18) return message.channel.send(`Песня - I Don't Want to Miss a Thing от RADIO TAPOK. Я начинаю: Я готов не спать, быть рядом в ожидании.`)
    if (random == 19) return message.channel.send('Песня - Кукла колдуна от Король и Шут. Я начинаю: Тёмный, мрачный коридор,')
    if (random == 20) return message.channel.send('Песня - Sing Me to Sleep от Alan Walker. Я начинаю: Wait a second, let me catch my breath,')

  };
  module.exports.help = {
      name: "mus",
      aliases: [""]
  };