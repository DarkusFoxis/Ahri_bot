const Discord = require('discord.js');
const ytdl = require("discord-ytdl-core");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
let profile = require('./profile.json');
let inv = require('./inv.json');
let brg = require('./birg.json');
let prof = require('./prof.json');
let crf = require('./craft.json');
let inf = require('./inf.json');
let bank = require('./bank.json');
let nom = require('./nom.json');
let caze = require('./case.json');
let effect = require('./effect.json');
let reaction = require('./reaction.json');
let botinf = require('./botinf.json');
let dnew = require('./dnew.json');
let dey = require('./deyst.json')
fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props);
    });
});


bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["MANAGE_ROLES","BAN_MEMBERS","KICK_MEMBERS","MANAGE_MESSAGES","ADD_REACTIONS","ADMINISTRATOR"]).then(link =>{
        console.log(link);
        bot.user.setPresence({
            status: 'online',
            activity: {
                type: 'WATCHING',
                name: ';help UwU',
            },
        });
    });
/*    bot.setInterval(() => {
        for (let i in reaction) {
          if (reaction[i]) {
            if (reaction[i].time != -1) {
              if (Date.now() > reaction[i].time) {
                delete reaction[i];
              }
            }
          }
        }
      }, 5000);*/
});

bot.on('ready', () => {
    var min = 1;
    var max = 30;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`${random}`)
    let a = brg;
    a.obm = random
});

bot.on('ready', () => {
    var min = 1;
    var max = 15;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`${random}`)
    let a = brg;
    a.ttt = random
});

bot.on('ready', () => {
    var min = 100;
    var max = 500;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`${random}`)
    let a = brg;
    a.yyy = random
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!profile[uid]){
        profile[uid] ={
            coins:10,
            xp:0,
            lvl:1,
            gem: 0,
            fcoin: 0,
            stat: "Статус не указан.",
            msgg: 0,
            mmm: "Сообщений нет.",
            vip: 1,
            rep: 0,
            ancoin: 1,
            farm: 1
        };
    };
    let u = profile[uid];

    u.xp++;

    if(u.xp>= (u.lvl * 35)){
        if (u.lvl < 10) {
        u.xp = 0;
        u.lvl += 1;
        u.fcoin += 3
        await message.channel.send("Поздравляю, " + message.author.username + ", ты поднял свой уровень! Держи в награду 3 Foxкоина UwU. Твой текущий уровень: " + u.lvl );
        } else if (u.lvl >= 10) {
            u.xp = 0;
            u.lvl += 1;
            u.fcoin += 6
            await message.channel.send("Поздравляю, " + message.author.username + ", ты поднял свой уровень! Держи в награду 6 Foxкоинов UwU. Твой текущий уровень: " + u.lvl );
        }
    };
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
    bot.uId = message.author.id;
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!inv[uid]){
        inv[uid] ={
            xp_up: 1,
            cofee: 0,
            tea: 0,
            hel: 0,
            hp_max: 1
        };
    };
    if (!inv[uid].hp_max){
        inv[uid].hp_max = 0
    }
    fs.writeFile('./inv.json',JSON.stringify(inv),(err)=>{
        if(err) console.log(err);
    });
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!prof[uid]){
        prof[uid] ={
            HP: 100,
            HPm: 100,
            at: 1,
            gol: 100,
            gol_max: 100,
            det: 0,
            ev: 0,
            kil: 0,
            rel: 0,
            ang: 0,
            dem: 0,
            def: 0,
};
    };
    let t = prof[uid];

    t.ang ++;
    if(t.ang >= 5) {
        t.ang = 0
        t.gol -= 2
        if (t.gol < 10){
            bot.send(`Внимание ${message.author}! Ваш голод меньше 10 едениц!!! Восстановите его!!!`)
        }
        if (t.gol <= 0){
            t.gol = 0
            t.HP -= 3
        }
    }
    if (t.HP <= 0){
        await message.channel.send("О нет, " + message.author.username + " умер!!!");
        let t = prof[uid];
        let y = inv[uid];
        let q = crf[uid];
        let u = profile[uid];
        let ef = effect[uid];
        u.coins = 0,
        u.xp = 0,
        u.lvl = 1,
        u.gem = 0,
        u.fcoin = 0,
        y.xp_up = 0,
        y.lvl_up = 0,
        y.cofee = 0,
        y.tea = 0,
        y.hel = 0
        t.HP = 100,
        t.HPm =100,
        t.gol = t.gol_max
        t.at = 1,
        t.ev = 0,
        t.wep = "Отсутствует",
        q.fire_ston = 0,
        q.dark_ston = 0,
        q.mag_ston = 0,
        q.stick = 0,
        t.det += 1,
        ef.fire.time = 0,
        ef.fire.atak = 0,
        ef.poison.atak = 0
        ef.poison.golod = 0
        ef.poison.time = 0
    };
    fs.writeFile('./prof.json',JSON.stringify(prof),(err)=>{
        if(err) console.log(err);
    });
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!crf[uid]){
        crf[uid] ={
            mag_ston: 0,
            stick: 10,
            fire_ston: 0,
            dark_ston: 0,
            aqua_ston: 0,
            infor_ston: 0,
            volcanic_ston: 0,
            fire_essence: 1,
            dark_essence: 1,
            aqua_essence: 1,
            volcanic_essence: 1,
            infor_essence: 0
        };
    };
    fs.writeFile('./craft.json',JSON.stringify(crf),(err)=>{
        if(err) console.log(err);
    });
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!inf[uid]){
        inf[uid] ={
            nick: `${message.author.username}`,
            age: "Неизвестен",
            blok: 0,
            bl: "Разрешён",
            toc: 1,
            rol: "Роль отсутствует"
        };
    };
    fs.writeFile('./inf.json',JSON.stringify(inf),(err)=>{
        if(err) console.log(err);
    });
});

bot.on('message', async message => {
    if(message.content == `<@763735590029361182>`) {
        message.channel.send(`Привет,` + message.author.username + `, вызывал? Помни, мой префикс- "`+ config.prefix +`" UwU`)
    }
});

bot.on('message', async message => {
    if(message.author.bot) return;
    fs.writeFile('./bank.json',JSON.stringify(bank),(err)=>{
    if(err) console.log(bank);
    });
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!nom[uid]){
        nom[uid] ={
            cace: 0,
            candy: 0,
            ice: 0,
            cake: 0,
            blin: 0,
            lim: 0,
            piza: 0,
            susi: 0,
            pastil: 0,
            cokol: 0,
            tofu: 0,
        };
    };
    fs.writeFile('./nom.json',JSON.stringify(nom),(err)=>{
        if(err) console.log(err);
    });
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!caze[uid]){
        caze[uid] ={
            cace_nom: 0,
        };
    };
    fs.writeFile('./case.json',JSON.stringify(caze),(err)=>{
        if(err) console.log(err);
    });
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!effect[uid]){
        effect[uid] ={
            fire: {time:0,atak:0},
            golod: 0,
            poison: {time:0,atak:0,golod:0},
            amogus: {time:0,atak:0}
        };
    };
    let ef = effect[uid];
    let t = prof[uid];

    if(ef.fire.time > 0){
        t.HP -= ef.fire.atak
        ef.fire.time -= 1
        if (ef.fire.time == 0) {
            ef.fire.atak = 0
        }

    } 
    if(ef.poison.time > 0){
        t.HP -= ef.poison.atak
        t.gol -= ef.poison.golod
        ef.poison.time -= 1
        if (t.gol <= 0){
            t.gol = 0
            t.HP -= ef.poison.golod
        }
        if (ef.poison.time == 0) {
            ef.poison.atak = 0
            ef.poison.golod = 0
        }

    } 
    if (ef.golod > 0) {
        t.gol = 0
    }
    if (ef.amogus > 0) {
        t.hp_max -= ef.amogus.atak
        t.hp -= ef.amogus.atak
        ef.amogus.time -= 1
        if (ef.amogus.time == 0) {
            ef.amogus.atak = 0
        }
    }
    fs.writeFile('./effect.json',JSON.stringify(effect),(err)=>{
        if(err) console.log(err);
    });
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!dey[uid]){
        dey[uid] ={
            work: {use: 0, prize: 0},
            hug: {use: 0, prize: 0},
            bite: {use: 0, prize: 0},
            rud: {use: 0, prize: 0},
            kiss: {use: 0, prize: 0},
            like: {use: 0, userID: "0", useuser: 0},
            pat: {use: 0, prize: 0},
            shop: {use: 0, prize: 0},
            atak: {use: 0, prize: 0},
            zzz: {use: 0, prize: 0},
            durk: {use: 0, prize: 0},
            revers: {use: 0, prize: 0},
            mining: {use: 0, prize: 0},
            trd: {use: 0, prize: 0},
            by: 0,
            prize: {moment: 0, max: 50}
        };
        let rUser = message.guild.member(message.author.id);
        let d = dey[uid];
        let role = message.guild.roles.cache.find(role => role.id === "994334084757213195");

        if (d.prize.moment == d.prize.max && !rUser.roles.cache.has("994334084757213195")){
            let embed = new Discord.MessageEmbed()
            .setTitle('Поздравляем!!!')
            .setColor("#f47fff")
            .setDescription(`${ message.author.username} получил **все** достижения!!! \n Поздравьте его!!! \n В награду, он получает роль <@994334084757213195> UwU`)
            .setTimestamp()
            bot.send(embed);
            rUser.roles.add(role)
        }
    };
    fs.writeFile('./deyst.json',JSON.stringify(dey),(err)=>{
        if(err) console.log(err);
    });
});

bot.on('message', async message => {
    fs.writeFile('./botinf.json',JSON.stringify(botinf),(err)=>{
        if(err) console.log(err);
    });
    
    fs.writeFile('./dnew.json',JSON.stringify(dnew),(err)=>{
        if(err) console.log(err);
    });
    fs.writeFile('./birg.json', JSON.stringify(brg),(err)=>{
        if(err) console.log(err);
    });
})
/*bot.on("raw", async event => {
    for (let i in reaction) {
      if (!events.hasOwnProperty(event.t)) return;
      const { d: data } = event;
      const user = bot.users.cache.get(data.user_id);
      if (user.bot) return;
      const channel = bot.channels.cache.get(data.channel_id) || (await user.createDM());
      const message = await channel.messages.fetch(data.message_id);
      if (message.id == reaction[i].message) {
        const emojiKey = data.emoji.id ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
        const reaction = message.reactions.cache.get(emojiKey);
  
        let member = bot.guilds.cache.get(message.guild.id).members.cache.find(x => x.id == user.id);
        if (member.id == reaction[i].member) {
          if (reaction[i].name == "mining") {
            if (event.t == "MESSAGE_REACTION_ADD") {
              for (let j in reaction[i].event) {
                if (reaction[i].event[j].emoji == emojiKey) {
                  reaction.users.remove(member);
                  let cmd = bot.commands.get("mining");
                  if (cmd) cmd.run(bot, message, reaction[i].event[j].list);
                }
              }
            }
          }
          if (event.t == "MESSAGE_REACTIONN_ADD") {
          }
        }
      }
    }
  });*/

bot.login(token);