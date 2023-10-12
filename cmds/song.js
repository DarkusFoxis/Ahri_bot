const Discord = require('discord.js');
const fs = require('fs');
const ytdl = require('ytdl-core');

module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    if (args[0] == "leave" || args[0] == "exit") {
        message.member.voice.channel.leave()
    } else {
        if (!message.member.voice.channel) return message.channel.send("Зайдите в войс чат, и мы начнём игру, волчёнок.");
        if (!args[0]) return message.channel.send("И как ты собирался заигрывать со мной?")
        const streamOptions = { seek: 0, volume: 1 };
        connection = message.member.voice.channel.join()
        if (args[0] == "корова" || args[0] == "му") {
            var song = "https://www.youtube.com/watch?v=kk3_5AHEZxE"
        } else if (args[0] == "шкурка") {
            var song = "https://www.youtube.com/watch?v=Il3q372Xooo"
        } else if (args[0] == "меч" || args[0] == "sword") {
            var song = "https://youtu.be/914GGrPD0t8"
        } else if (args[0] == "хавать") {
            var song = "https://youtu.be/RGm6owdSsq0"
        } else if (args[0] == "мох" || (args[0] == "мха" && args[1] == "дохрена")) {
            var song = "https://youtu.be/0k0HRiz90OQ"
        } else if (args[0] == "инженер" || args[0] == "engineer") {
            var song = "https://youtu.be/cl1JnBvWiaE"
        } else if (args[0] == "прёт" || (args[0] == "меня" && args[0] == "прёт")) {
            var song = "https://youtu.be/HA5RHKUWixc"
        } else return message.channel.send("Хммм, я не понимаю этого заклинания, может расскажешь?")
        var voiceChannel = message.member.voice.channel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl(song, { filter : 'audioonly' });
                const dispatcher = connection.play(stream, streamOptions);
                dispatcher.on
                message.channel.send("Когда надоест, напиши `;song leave` или `;song exit`, чтобы наши заигрывания оставались в тайне")
            }).catch(err => console.log(err));
        }
};
module.exports.help = {
    name: "song",
    aliases: [""]
};