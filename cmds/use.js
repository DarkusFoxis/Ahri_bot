const Discord = module.require("discord.js");
const fs = require("fs");

let inv = require('../inv.json');
let profile = require('../profile.json');
let prof = require('../prof.json');
let num = require('../nom.json')
let caze = require('../case.json')
let effect = require('../effect.json');

module.exports.run = async (bot,message,args) => {
    let y = profile[message.author.id];
    let u = inv[message.author.id];
    let t = prof[message.author.id];
    let h = num[message.author.id];
    let g = caze[message.author.id];
    let i = effect[message.author.id];
    message.delete();
    let used = args[0];
    used = used.toLowerCase();
    if (used == `зелье_опыта`){
        if(u.xp_up < 1) return bot.send("У вас нет зелей опыта");
        var min = 50;
        var max = 100;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        u.xp_up -= 1
        let embed = new Discord.MessageEmbed()
        .setDescription(`Вы использовали зелье опыта, и получили ${random} xp UwU.`)
        .setColor("#47ff9b")
        .setThumbnail(message.author.displayAvatarURL())
        y.xp += random
        bot.send(embed);
    } else if (used == `кофе`) {
        if(u.cofee < 1) return bot.send("У вас нет кофе");
        let Image_i = 4;
        let arrayImage = new Array(Image_i);
        arrayImage[0] = "https://pa1.narvii.com/7055/bb6f81f0c5eddd6a2a5d3bf558a0fb85dc312d78r1-500-281_hq.gif";
        arrayImage[1] = "https://data.whicdn.com/images/300653534/original.gif";
        arrayImage[2] = "https://data.whicdn.com/images/240594157/original.gif";
        arrayImage[3] = "https://data.whicdn.com/images/329192024/original.gif";
        let Image = getRandomInRange(0,Image_i-1);
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} пьёт кофе. Бульк UwU`)
        .setColor("#915d1e")
        .setImage(arrayImage[Image])
        u.cofee -= 1
        if (i.golod == 0) {
            t.gol += 10
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
        } else {
            i.golod -= 1
        }
        bot.send(embed);
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    } else if (used == `чай`) {
        if(u.tea < 1) return bot.send("У вас нет чая");
        let Image_i = 4;
        let arrayImage = new Array(Image_i);
        arrayImage[0] = "https://pa1.narvii.com/7144/d41feaf776f5bb3b0798539dbdf06d085eab6a4dr1-500-239_hq.gif";
        arrayImage[1] = "https://data.whicdn.com/images/298848233/original.gif";
        arrayImage[2] = "https://data.whicdn.com/images/327967258/original.gif";
        arrayImage[3] = "https://data.whicdn.com/images/317676281/original.gif";
        let Image = getRandomInRange(0,Image_i-1);
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} пьёт чай. Бульк UwU `)
        .setColor("#beff00")
        .setImage(arrayImage[Image])
        u.tea -= 1
        if (i.golod == 0) {
            t.gol += 10
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
        } else {
            i.golod -= 1
        }
        bot.send(embed);
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    }else if (used == `зелье_жизней`) {
            if(u.hel < 1) return bot.send("У вас нет зелей жизней")
            if (i.golod > 0) {
                u.hel -= 1
                let embed = new Discord.MessageEmbed()
                .setDescription(`Вы использовали зелье жизней, но из-за эффекта голода вы не восстановили жизни`)
                .setColor("#47ff9b")
                .setThumbnail(message.author.displayAvatarURL())
                i.golod -= 1
                bot.send(embed);
            } else {
                sum = t.HPm - t.HP
                if(sum < 50) return bot.send("Вы не можете вылечить себя, т. к. вы можете перелечиться.")
                u.hel -= 1
                let embed = new Discord.MessageEmbed()
                .setDescription(`Вы использовали зелье жизней, и вылечили 50 жизней UwU.`)
                .setColor("#47ff9b")
                .setThumbnail(message.author.displayAvatarURL())
                t.HP += 50
                bot.send(embed);
            }
    } else if (used == `торт`) {
        let Image_i = 4;
        let arrayImage = new Array(Image_i);
        arrayImage[0] = "https://data.whicdn.com/images/338905787/original.gif";
        arrayImage[1] = "https://pbs.twimg.com/tweet_video_thumb/Da-uLeTXUAAU_7m.jpg";
        arrayImage[2] = "https://i.gifer.com/origin/72/72863a2cc00b5a06243b54e892fb790a.gif";
        arrayImage[3] = "https://steamuserimages-a.akamaihd.net/ugc/1493459827592394018/217396226726C4DB5249D4EF1904DCAC38F82DA8/";
        let Image = getRandomInRange(0,Image_i-1);
        if(h.cace < 1) return bot.send("У вас нет тортов");
        if (i.golod > 0) {
            h.cace -= 1
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)} съел торт, но так и не насытился.`)
            .setColor("#47ff9b")
            .setImage(arrayImage[Image])
            i.golod -= 1
            bot.send(embed);
        } else {
            sum = t.HPm - t.HP
            if(sum < 50) return bot.send("Вы не можете съесть торт из-за того, что вы не на столько голодны (Да и похудеть было бы не лишним...)")
            h.cace -= 1
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)} съел торт, и вылечил 50 жизней UwU.`)
            .setColor("#47ff9b")
            .setImage(arrayImage[Image])
            t.HP+= 50
            t.gol += 50
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
            bot.send(embed);
        }
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    } else if (used == `тофу`) {
        let Image_i = 4;
        let arrayImage = new Array(Image_i);
        arrayImage[0] = "https://cdn.discordapp.com/attachments/854393789044228177/873837444473159720/Sewayaki-Kitsune-no-Senko-san-05_05.35_2019.05.08_14.46.08.jpg";
        arrayImage[1] = "https://static.zerochan.net/Akagi.%28Kantai.Collection%29.full.1920905.jpg"
        arrayImage[2] = "https://cdn.discordapp.com/attachments/854393789044228177/873837989330059314/02-floating-shopping-thumbs-up.jpg";
        arrayImage[3] = "https://cdn.discordapp.com/attachments/854393789044228177/873838017675141120/21346993_original.jpg";
        let Image = getRandomInRange(0,Image_i-1);
        if(h.tofu < 1) return bot.send("У вас нет тофу");
        if (i.golod > 0) {
            h.tofu -= 1
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)} съел тофу, но так и не насытился.`)
            .setColor("#47ff9b")
            .setImage(arrayImage[Image])
            bot.send(embed);
            i.golod -= 1
        } else {
            sum = t.HPm - t.HP
            if(sum < 100) return bot.send("Вы не можете съесть тофу, т. к. за вами стоит ревнующая лиса Сенко. Ой...")
            h.tofu -= 1
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)} съел тофу, и вылечил 100 жизней UwU.`)
            .setColor("#47ff9b")
            .setImage(arrayImage[Image])
            t.HP += 100
            t.gol += 100
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
            bot.send(embed);
        }
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    } else if (used == `пицца`) {
        let Image_i = 4;
        let arrayImage = new Array(Image_i);
        arrayImage[0] = "https://i.gifer.com/zD7.gif";
        arrayImage[1] = "https://moesucks.files.wordpress.com/2014/01/noragami-0304.jpg";
        arrayImage[2] = "https://i.gifer.com/6Tuz.gif";
        arrayImage[3] = "http://static-1.ivoox.com/audios/8/0/0/0/521587240008_XXL.jpg";
        let Image = getRandomInRange(0,Image_i-1);
        if(h.piza < 1) return bot.send("У вас нет пиц");
        if (i.golod > 0) {
            h.piza -= 1
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)} съел пиццу, но так и не насытился.`)
            .setColor("#47ff9b")
            .setImage(arrayImage[Image])
            bot.send(embed);
            i.golod -= 1
        } else {
            sum = t.HPm - t.HP
            if(sum < 25) return bot.send("Вы не можете съесть пиццу, т. к. черепашки ниндзя уже выезжают. Бегите!!!")
            h.piza -= 1
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)} съел пиццу, и вылечил 25 жизней UwU.`)
            .setColor("#47ff9b")
            .setImage(arrayImage[Image])
            t.HP += 25
            t.gol += 75
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
            bot.send(embed);
        }
        function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    } else if (used == `суши` || used == `суси`) {
        let Image_i = 4;
        let arrayImage = new Array(Image_i);
        arrayImage[0] = "https://i.gifer.com/9TLq.gif";
        arrayImage[1] = "https://static.zerochan.net/Todoroki.Shouto.full.2236189.jpg";
        arrayImage[2] = "https://i.pinimg.com/originals/ae/44/0a/ae440acbcafb2e97b0faa27467e6baa5.gif";
        arrayImage[3] = "https://i.playground.ru/i/pix/748050/image.jpg";
        let Image = getRandomInRange(0,Image_i-1);
        if(h.susi < 1) return bot.send("У вас нет суши");
        if (i.golod > 0) {
            h.susi -= 1
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)} съел суши, но так и не насытился.`)
            .setColor("#47ff9b")
            .setImage(arrayImage[Image])
            bot.send(embed);
            i.golod -= 1
        } else {
            sum = t.HPm - t.HP
            if(sum < 10) return bot.send("Вы не можете съесть суши, т. к. вы объелись. Да и... Чем? ||https://i.imgur.com/6hqhxAB.jpg||")
            h.susi -= 1
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)} съел суши, и вылечил 10 жизней UwU.`)
            .setColor("#47ff9b")
            .setImage(arrayImage[Image])
            t.HP += 10
            t.gol += 25
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
            bot.send(embed);
        }
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    } else if (used == `конфета`) {
        if(h.candy < 1) return bot.send("У вас нет конфет");
        let Image_i = 3;
        let arrayImage = new Array (Image_i)
        arrayImage[0] = "https://i.ytimg.com/vi/2k7PMxTZd8Q/maxresdefault.jpg";
        arrayImage[1] = "https://i.ytimg.com/vi/Mfl2-9MDfsw/maxresdefault.jpg";
        arrayImage[2] = "https://i.gifer.com/embedded/download/DUFV.gif";
        let Image = getRandomInRange(0,Image_i-1);
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} ест конфету. Даже не поделился... `)
        .setColor("#beff00")
        .setImage(arrayImage[Image])
        h.candy -= 1
        if (i.golod == 0) {
            t.gol += 10
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
        } else {
            i.golod -= 1
        }
        bot.send(embed);
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    } else if (used == `мороженое` || used == `мороженка`) {
        if(h.ice < 1) return bot.send("У вас нет мороженых");
        let Image_i = 3;
        let arrayImage = new Array (Image_i)
        arrayImage[0] = "https://i.gifer.com/5HsF.gif";
        arrayImage[1] = "https://pa1.narvii.com/6906/0792f89a6240f7e2e73081df12a6641a5fa2cfecr1-540-304_hq.gif";
        arrayImage[2] = "https://data.whicdn.com/images/93948381/original.gif";
        let Image = getRandomInRange(0,Image_i-1);
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} ест мороженое. Даже не поделился... `)
        .setColor("#beff00")
        .setImage(arrayImage[Image])
        h.ice -= 1
        bot.send(embed);
        if (i.golod == 0) {
            t.gol += 10
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
        } else {
            i.golod -= 1
        }
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    }else if (used == `кекс`) {
        if(h.cake < 1) return bot.send("У вас нет кекса");
        let Image_i = 3;
        let arrayImage = new Array (Image_i)
        arrayImage[0] = "https://i.pinimg.com/originals/f3/51/36/f351366a36da117093f10961420da44f.jpg";
        arrayImage[1] = "https://static.zerochan.net/Morino.Kirin.full.2653296.jpg";
        arrayImage[2] = "https://i.pinimg.com/originals/15/c8/49/15c849683d61b7ad5002fc99ab51ffab.png";
        let Image = getRandomInRange(0,Image_i-1);
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} ест кекс. Дай хоть кусочек... `)
        .setColor("#beff00")
        .setImage(arrayImage[Image])
        h.cake -= 1
        if (i.golod == 0) {
            t.gol += 10
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
        } else {
            i.golod -= 1
        }
        bot.send(embed);
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    }else if (used == `блин` || used == `блины`) {
        if(h.blin < 1) return bot.send("У вас нет блинов");
        let Image_i = 3;
        let arrayImage = new Array (Image_i)
        arrayImage[0] = "https://pbs.twimg.com/media/Dsa-SWtXoAAlpwa.jpg";
        arrayImage[1] = "https://i.pinimg.com/originals/3d/4d/5c/3d4d5ca893b24553d8e42a1fd4f3ab34.jpg";
        arrayImage[2] = "https://steamuserimages-a.akamaihd.net/ugc/405682981848207424/F80E1F79E80452B0D06A1CACE4E5751BC5BE4561/?imw=512&amp;imh=406&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true";
        let Image = getRandomInRange(0,Image_i-1);
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} ест блин. Даже не поделился... `)
        .setColor("#beff00")
        .setImage(arrayImage[Image])
        h.blin -= 1
        if (i.golod == 0) {
            t.gol += 10
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
        } else {
            i.golod -= 1
        }
        bot.send(embed);
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    }else if (used == `лимонад`) {
        if(h.lim < 1) return bot.send("У вас нет лимонада");
        let Image_i = 3;
        let arrayImage = new Array (Image_i)
        arrayImage[0] = "https://animesolution.com/wp-content/uploads/2017/09/Kobayashi-san-Chi-no-Maid-Dragon-OVA_16.42_2017.09.28_08.21.25.jpg";
        arrayImage[1] = "https://img.gifmagazine.net/gifmagazine/images/70914/original.gif";
        arrayImage[2] = "https://media1.tenor.com/images/911fe1f2c039d5e18cd709f74cd35fc8/tenor.gif?itemid=5741610";
        let Image = getRandomInRange(0,Image_i-1);
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} пьёт лимонад. Бульк  `)
        .setColor("#beff00")
        .setImage(arrayImage[Image])
        h.lim -= 1
        if (i.golod == 0) {
            t.gol += 5
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
        } else {
            i.golod -= 1
        }
        bot.send(embed);
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    }else if (used == `пастила`) {
        if(h.pastil < 1) return bot.send("У вас нет пастилы");
        let Image_i = 2;
        let arrayImage = new Array (Image_i)
        arrayImage[0] = "https://static.zerochan.net/Nakbe.full.1678976.jpg";
        arrayImage[1] = "https://avatars.mds.yandex.net/get-zen_doc/101122/pub_5d37fa36b96cfd00adb0b156_5d37fae2e4f39f00ae200618/scale_1200";
        let Image = getRandomInRange(0,Image_i-1);
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} ест пастилу. Ну да-а-а-а-а-ай... `)
        .setColor("#beff00")
        .setImage(arrayImage[Image])
        h.pastil -= 1
        if (i.golod == 0) {
            t.gol += 10
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
        } else {
            i.golod -= 1
        }
        bot.send(embed);
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    }else if (used == `шоколад`) {
        if(h.cokol < 1) return bot.send("У вас нет шоколада");
        let Image_i = 3;
        let arrayImage = new Array (Image_i)
        arrayImage[0] = "https://media1.tenor.com/images/6239f8cc64a5da033eb70cc10ba72c83/tenor.gif?itemid=14313134";
        arrayImage[1] = "https://giffiles.alphacoders.com/200/200045.gif";
        arrayImage[2] = "https://thumbs.gfycat.com/MintyDetailedClownanemonefish-size_restricted.gif";
        let Image = getRandomInRange(0,Image_i-1);
        let embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.member(message.author.id)} ест шоколад. Даже не поделился... `)
        .setColor("#beff00")
        .setImage(arrayImage[Image])
        h.cokol -= 1
        if (i.golod == 0) {
            t.gol += 10
            if (t.gol > t.gol_max) {
                let r = t.gol - t.gol_max
                t.gol -= r
            }
        } else {
            i.golod -= 1
        }
        bot.send(embed);
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    } else if (used == `кейс_вкусняшек`) {
        if (g.cace_nom < 1) return bot.send("У вас нет кейсов")
        var min = 1;
        var max = 12;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        if (random == 1){
            let embed = new Discord.MessageEmbed()
            .setDescription(`К сожалению, ${message.guild.member(message.author.id)}, кейс был пустой. Повезёт в другой раз.`)
            .setColor("#300000")
            bot.send(embed);
        } else if (random == 2){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} конфеты`)
            .setColor("#277ecd")
            bot.send(embed);
            h.candy += random
        } else if (random == 3){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} кексика`)
            .setColor("#277ecd")
            bot.send(embed);
            h.cake += random
        } else if (random == 4){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} мороженки`)
            .setColor("#277ecd")
            bot.send(embed);
            h.ice += random
        } else if (random == 5){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} тофу`)
            .setColor("#277ecd")
            bot.send(embed);
            h.tofu += random
        } else if (random == 6){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} шоколадки`)
            .setColor("#277ecd")
            bot.send(embed);
            h.cokol += random
        } else if (random == 7){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} лимонада`)
            .setColor("#277ecd")
            bot.send(embed);
            h.lim += random
        } else if (random == 8){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} суши`)
            .setColor("#277ecd")
            bot.send(embed);
            h.susi += random
        } else if (random == 9){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} пиццы`)
            .setColor("#277ecd")
            bot.send(embed);
            h.piza += random
        } else if (random == 10){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} торта`)
            .setColor("#277ecd")
            bot.send(embed);
            h.cace += random
        } else if (random == 11){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} пастилы`)
            .setColor("#277ecd")
            bot.send(embed);
            h.pastil += random
        } else if (random == 12){
            var min = 1
            var max = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.guild.member(message.author.id)}, из кейса вы получили ${random} блинчиков`)
            .setColor("#277ecd")
            bot.send(embed);
            h.blin += random
        }
        g.cace_nom -= 1
    } else if (used == "зелье-максимального-лечения") {
        if(u.hp_max < 1) return bot.send("У вас нет зелей максимального лечения");
        if (i.golod > 0) {
            u.hp_max -= 1
            let embed = new Discord.MessageEmbed()
            .setDescription(`Вы использовали зелье максимального лечения, но из-за эффекта голода вы не восстановили жизни`)
            .setColor("#47ff9b")
            .setThumbnail(message.author.displayAvatarURL())
            i.golod -= 1
            bot.send(embed);
        } else {
            u.hp_max -= 1
            let embed = new Discord.MessageEmbed()
            .setDescription(`Вы использовали зелье жизней, и полностью излечились OwO.`)
            .setColor("#47ff9b")
            .setThumbnail(message.author.displayAvatarURL())
            t.HP = t.HPm
            bot.send(embed);
        }
    } else {
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.member(message.author.id)} укажите предмет, который вы хотите использовать!`)
    .setColor("#f10b0b")
    .setThumbnail(message.author.displayAvatarURL())
    bot.send(embed);
    }
};
module.exports.help = {
    name: "use",
    aliases: [""]
};