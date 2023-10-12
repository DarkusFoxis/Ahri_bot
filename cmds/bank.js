const Discord = module.require("discord.js");
const fs = require("fs");

let profile = require("../profile.json");
let bank = require("../bank.json");

module.exports.run = async (bot,message,args) => {
    let t = profile[message.author.id];
    let uid = message.author.id;
    message.delete();
    if(!args[0]) {
        if(!bank[uid]){
            if(t.coins < 1000) return bot.send('У вас мало средств, для создания вклада в банк!')
            bank[uid] ={
                coin: 0,
                gems: 0,
                fox: 0,
                coin_max: 10000,
                gems_max: 1000,
                fox_max: 100
            };
            let embed = new Discord.MessageEmbed()
            .setColor('#43e2f7')
            .setTitle('Банк активирован!')
            .setDescription('Теперь вы можете положить деньги в банк, и тем самым сохранить их! \n Команды: `bank + [1/2/3] [сумма]`- положить деньги в банк. \n `bank - [1/2/3] [сумма]`- снять их. \n `bank bal`- баланс банка.')
            bot.send(embed)
            t.coins -= 1000
            fs.writeFile('./bank.json',JSON.stringify(bank),(err)=>{
                if(err) console.log(bank);
                });
        } else {
            let embed = new Discord.MessageEmbed()
            .setColor('#43e2f7')
            .setTitle('Команды банка:')
            .setDescription('`bank + [1/2/3] [сумма]`- положить деньги в банк. \n `bank - [1/2/3] [сумма]`- снять их. \n `bank bal` - баланс банка.')
            bot.send(embed)
        }
    } else if (args[0] == '+') {
        if (!args[1]) return bot.send('`1`- монеты \n `2`- кристаллы \n `3`- Foxкойны')
        if (!args[2]) return bot.send('А что ложить?!')
        var num1 = parseInt(args[1])
        var num2 = parseInt(args[2])
        if(!bank[uid]) return bot.send('У вас нет банка!')
        let r = bank[message.author.id]
        if (num1 == 1){
            if (num2 < 0) return bot.send ("Положить в банк отрицательную сумму?")
            if(t.coins < num2) return bot.send('У вас мало денег!!!')
            if(num2 > r.coin_max) return bot.send('Вы не можете положить в банк больше 10000 монет!!!')
            r.coin += num2
            if(r.coin > r.coin_max) {
                bot.send("Слишком много! Введите другую сумму!")
                r.coin -= num2
                return false;
            }
            t.coins -= num2
            let embed = new Discord.MessageEmbed()
            .setColor('#43e2f7')
            .setTitle('Вас счёт обновлён!')
            .setDescription(`В банке: ${r.coin} \n У вас на руках: ${t.coins}`)
            bot.send(embed)
        } else if (num1 == 2) {
            if (num2 < 0) return bot.send ("Положить в банк отрицательную сумму?")
            if(t.gem < num2) return bot.send('У вас мало денег!!!')
            if(num2 > r.gems_max) return bot.send('Вы не можете положить в банк больше 1000 кристаллов!!!')
            r.gems += num2
            if(r.gems > r.gems_max) {
                bot.send("Слишком много! Введите другую сумму!")
                r.gems -= num2
                return false;
            }
            t.gem -= num2
            let embed = new Discord.MessageEmbed()
            .setColor('#43e2f7')
            .setTitle('Вас счёт обновлён!')
            .setDescription(`В банке: ${r.gems} \n У вас на руках: ${t.gem}`)
            bot.send(embed)
        } else if (num1 == 3) {
            if (num2 < 0) return bot.send ("Положить в банк отрицательную сумму?")
            if(t.fox < num2) return bot.send('У вас мало денег!!!')
            if(num2 > r.fox_max) return bot.send('Вы не можете положить в банк больше 100 Foxкойнов!!!')
            r.fox += num2
            if(r.fox > r.fox_max) {
                bot.send("Слишком много! Введите другую сумму!")
                r.fox -= num2
                return false;
            }
            t.fcoin -= num2
            let embed = new Discord.MessageEmbed()
            .setColor('#43e2f7')
            .setTitle('Вас счёт обновлён!')
            .setDescription(`В банке: ${r.fox} \n У вас на руках: ${t.fcoin}`)
            bot.send(embed)
        }
        fs.writeFile('./bank.json',JSON.stringify(bank),(err)=>{
            if(err) console.log(bank);
            });
    } else if (args[0] == '-') {
        if (!args[1]) return bot.send('`1`- монеты \n `2`- кристаллы \n `3`- Foxкойны')
        if (!args[2]) return bot.send('А что снимать?!')
        var num1 = parseInt(args[1])
        var num2 = parseInt(args[2])
        if(!bank[uid]) return bot.send('У вас нет банка!')
        let r = bank[message.author.id]
        if (num1 == 1){
            if (num2 < 0) return bot.send ("Снять в банке отрицательную сумму?")
            if(num2 > r.coin_max) return bot.send('Вы не можете снять в банке больше 10000 монет!!!')
            r.coin -= num2
            if(r.coin < 0 ){
                bot.send("Слишком много! Введите другую сумму!")
                r.coin += num2
                return false;
            }
            t.coins += num2
            let embed = new Discord.MessageEmbed()
            .setColor('#43e2f7')
            .setTitle('Вас счёт обновлён!')
            .setDescription(`В банке: ${r.coin} \n У вас на руках: ${t.coins}`)
            bot.send(embed)
        } else if (num1 == 2) {
            if (num2 < 0) return bot.send ("Снять в банке отрицательную сумму?")
            if(num2 > r.gems_max) return bot.send('Вы не можете снять в банке больше 1000 кристаллов!!!')
            r.gems -= num2
            if(r.gems < 0) {
                bot.send("Слишком много! Введите другую сумму!")
                r.gems += num2
                return false;
            }
            t.gem += num2
            let embed = new Discord.MessageEmbed()
            .setColor('#43e2f7')
            .setTitle('Вас счёт обновлён!')
            .setDescription(`В банке: ${r.gems} \n У вас на руках: ${t.gem}`)
            bot.send(embed)
        } else if (num1 == 3) {
            if (num2 < 0) return bot.send ("Снять в банке отрицательную сумму?")
            if(num2 > r.fox_max) return bot.send('Вы не можете снять в банке больше 100 Foxкойнов!!!')
            r.fox -= num2
            if(r.fox < 0) {
                bot.send("Слишком много! Введите другую сумму!")
                r.fox += num2
                return false;
            }
            t.fcoin += num2
            let embed = new Discord.MessageEmbed()
            .setColor('#43e2f7')
            .setTitle('Вас счёт обновлён!')
            .setDescription(`В банке: ${r.fox} \n У вас на руках: ${t.fcoin}`)
            bot.send(embed)
        }
        fs.writeFile('./bank.json',JSON.stringify(bank),(err)=>{
            if(err) console.log(bank);
            });
    } else if (args[0] == 'bal'){
        if(!bank[uid]) return bot.send('У вас нет банка!')
        let r = bank[message.author.id]
        let embed = new Discord.MessageEmbed()
            .setColor('#43e2f7')
            .setTitle('Вас счёт:')
            .setDescription(`В банке: \n <:goldcoin:916990084807557120> Монет: ${r.coin} \n <:gem:916989982932099112> Кристаллов: ${r.gems} \n <:foxcoin:916990051240525824> Foxкойнов: ${r.fox}`)
            bot.send(embed)
    }

}

module.exports.help = {
    name: "bank",
    aliases: [""]
};