const Discord = module.require("discord.js");

let prof = require('../prof.json');
let profile = require('../profile.json');
let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
    let t = prof[message.author.id];
    let y = profile[message.author.id];
    let o = inf[message.author.id];
    message.delete();
    let rUser = message.guild.member(message.author.id);
    if (o.blok == 1) return bot.send(`Доступ закрыт. Вы не в системе атак!`)
    if (args[0]) {
        var num1 = parseInt(args[0])
        if (rUser.roles.cache.has("844836335520710670")) {
            if(t.ev == 0){
                if (num1==1){
                    if (t.HPm >= 200) return bot.send("Ваши жизни максимального уровня,используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.HPm += 25;
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 2){
                    if (t.at >= 10) return bot.send("Ваша атака максимального уровня, используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.at += 1
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 3){
                    let gg = t.def + 10
                    if (t.def >= 50) return bot.send("Ваша защита максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                    if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.def += 1
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= gg
                }
            } else if (t.ev == 1) {
                if (num1==1){
                    if (t.HPm >= 400) return bot.send("Ваши жизни максимального уровня,используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.HPm += 50
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 2){
                    if (t.at >= 30) return bot.send("Ваша атака максимального уровня, используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.at += 5
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 3){
                    let gg = t.def + 10
                    if (t.def >= 50) return bot.send("Ваша защита максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                    if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.def += 1
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= gg
                }
            } else if (t.ev == 2){
                if (num1==1){
                    if (t.HPm >= 600) return bot.send("Ваши жизни максимального уровня,используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.HPm += 50
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 2){
                    if (t.at >= 50) return bot.send("Ваша атака максимального уровня, используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.at += 5
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 3){
                    let gg = t.def + 10
                    if (t.def >= 50) return bot.send("Ваша защита максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                    if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.def += 5
                    if (t.def > 50){
                        let ty = t.def - 50
                        t.def -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= gg
                }
            } else if (t.ev == 3){
                    if (num1==1){
                        if (t.HPm >= 1000) return bot.send("Ваши жизни максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                        if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                        t.HPm += 100
                        if (t.HPm > 1000){
                            let hy = t.HPm - 1000
                            t.HPm -= hy
                        }
                        let embed = new Discord.MessageEmbed()
                        .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                        .setColor("#ef0aff")
                        bot.send(embed);
                        y.gem -= 30
                    } else if (num1 == 2){
                        if (t.at >= 100) return bot.send("Ваша атака максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                        if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                        t.at += 10
                        if (t.at > 100){
                            let ty = t.at - 100
                            t.at -= ty
                        }
                        let embed = new Discord.MessageEmbed()
                        .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                        .setColor("#ef0aff")
                        bot.send(embed);
                        y.gem -= 30
                    } else if (num1 == 3){
                        let gg = t.def + 10
                        if (t.def >= 50) return bot.send("Ваша защита максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                        if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                        t.def += 10
                        if (t.def > 50){
                            let ty = t.def - 50
                            t.def -= ty
                        }
                        let embed = new Discord.MessageEmbed()
                        .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                        .setColor("#ef0aff")
                        bot.send(embed);
                        y.gem -= gg
                    }
            } else if (t.ev == 4){
                if (num1==1){
                    if (t.HPm >= 5000) return bot.send("Ваши жизни максимального уровня. Дойдите до 5-того уровня сброса, и поднимите уровень эволюции!");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.HPm += 500
                    if (t.HPm > 5000){
                        let hy = t.HPm - 5000
                        t.HPm -= hy
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 2){
                    if (t.at >= 500) return bot.send("Ваша атака максимального уровня. Дойдите до 5-того уровня сброса, и поднимите уровень эволюции!");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.at += 50
                    if (t.at > 500){
                        let ty = t.at - 500
                        t.at -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 3){
                    let gg = t.def + 10
                    if (t.def >= 100) return bot.send("Ваша защита максимального уровня.");
                    if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.def += 5
                    if (t.def > 100){
                        let ty = t.def - 100
                        t.def -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= gg
                }
            } else if (t.ev == 5){
                if (num1==1){
                    if (t.HPm >= 10000) return bot.send("Ваши жизни максимального уровня.");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.HPm += 1000
                    if (t.HPm > 10000){
                        let hy = t.HPm - 10000
                        t.HPm -= hy
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 2){
                    if (t.at >= 1000) return bot.send("Ваша атака максимального уровня.");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.at += 100
                    if (t.at > 1000){
                        let ty = t.at - 1000
                        t.at -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 3){
                    let gg = t.def + 10
                    if (t.def >= 100) return bot.send("Ваша защита максимального уровня.");
                    if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.def += 5
                    if (t.def > 100){
                        let ty = t.def - 100
                        t.def -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= gg
                }
            }
        } else if (!rUser.roles.cache.has("844836335520710670")){
            if(t.ev == 0){
                if (num1==1){
                    if (t.HPm >= 200) return bot.send("Ваши жизни максимального уровня,используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.HPm += 25;
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 2){
                    if (t.at >= 10) return bot.send("Ваша атака максимального уровня, используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.at += 1
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 3){
                    let gg = t.def + 10
                    if (t.def >= 50) return bot.send("Ваша защита максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                    if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.def += 1
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= gg
                }
            } else if (t.ev == 1) {
                if (t.HPm < 200 || t.at < 10) return bot.send("Доступ заблокирован. Что бы вы могли повышать характеристики не улучшая прошлые до конца, поддержите сервер до изумрудной роли.")
                if (num1==1){
                    if (t.HPm >= 400) return bot.send("Ваши жизни максимального уровня,используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.HPm += 50
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 2){
                    if (t.at >= 30) return bot.send("Ваша атака максимального уровня, используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:")
                    t.at += 5
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 3){
                    let gg = t.def + 10
                    if (t.def >= 50) return bot.send("Ваша защита максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                    if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.def += 5
                    if (t.def > 50){
                        let ty = t.def - 50
                        t.def -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= gg
                }
            } else if (t.ev == 2){
                if (t.HPm < 400 || t.at < 3) return bot.send("Доступ заблокирован. Что бы вы могли повышать характеристики не улучшая прошлые до конца, поддержите сервер до изумрудной роли.")
                if (num1==1){
                    if (t.HPm >= 600) return bot.send("Ваши жизни максимального уровня,используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.HPm += 50
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 2){
                    if (t.at >= 50) return bot.send("Ваша атака максимального уровня, используйте ;evol для повышения порога");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.at += 5
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 3){
                    let gg = t.def + 10
                    if (t.def >= 50) return bot.send("Ваша защита максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                    if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.def += 5
                    if (t.def > 50){
                        let ty = t.def - 50
                        t.def -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= gg
                }
            } else if (t.ev == 3){
                if (t.HPm < 600 || t.at < 50) return bot.send("Доступ заблокирован. Что бы вы могли повышать характеристики не улучшая прошлые до конца, поддержите сервер до изумрудной роли.")
                    if (num1==1){
                        if (t.HPm >= 1000) return bot.send("Ваши жизни максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                        if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                        t.HPm += 100
                        let embed = new Discord.MessageEmbed()
                        .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                        .setColor("#ef0aff")
                        bot.send(embed);
                        y.gem -= 30
                    } else if (num1 == 2){
                        if (t.at >= 100) return bot.send("Ваша атака максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                        if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                        t.at += 10
                        if (t.at > 100){
                            let ty = t.at - 100
                            t.at -= ty
                        }
                        let embed = new Discord.MessageEmbed()
                        .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                        .setColor("#ef0aff")
                        bot.send(embed);
                        y.gem -= 30
                    } else if (num1 == 3){
                        let gg = t.def + 10
                        if (t.def >= 50) return bot.send("Ваша защита максимального уровня. Дойдите до 2-рого уровня сброса, и поднимите уровень эволюции!");
                        if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                        t.def += 10
                        if (t.def > 50){
                            let ty = t.def - 50
                            t.def -= ty
                        }
                        let embed = new Discord.MessageEmbed()
                        .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                        .setColor("#ef0aff")
                        bot.send(embed);
                        y.gem -= gg
                    }
            } else if (t.ev == 4){
                if (t.HPm < 1000||t.at < 100) return bot.send("Доступ заблокирован. Что бы вы могли повышать характеристики не улучшая прошлые до конца, поддержите сервер до изумрудной роли.")
                if (num1==1){
                    if (t.HPm >= 5000) return bot.send("Ваши жизни максимального уровня. Дойдите до 5-того уровня сброса, и поднимите уровень эволюции!");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.HPm += 500
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 2){
                    if (t.at >= 500) return bot.send("Ваша атака максимального уровня. Дойдите до 5-того уровня сброса, и поднимите уровень эволюции!");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.at += 50
                    if (t.at > 500){
                        let ty = t.at - 500
                        t.at -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 3){
                    let gg = t.def + 10
                    if (t.def >= 100) return bot.send("Ваша защита максимального уровня.");
                    if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.def += 5
                    if (t.def > 100){
                        let ty = t.def - 100
                        t.def -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= gg
                }
            } else if (t.ev == 5){
                if (t.HPm < 5000|| t.at < 500) return bot.send("Доступ заблокирован. Что бы вы могли повышать характеристики не улучшая прошлые до конца, поддержите сервер до изумрудной роли.")
                if (num1==1){
                    if (t.HPm >= 10000) return bot.send("Ваши жизни максимального уровня.");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.HPm += 1000
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили своё максимальное здоровье, теперь оно равно: ${t.HPm} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 2){
                    if (t.at >= 1000) return bot.send("Ваша атака максимального уровня.");
                    if (y.gem < 30) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.at += 100
                    if (t.at > 1000){
                        let ty = t.at - 1000
                        t.at -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою атаку, теперь она равна: ${t.at} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= 30
                } else if (num1 == 3){
                    let gg = t.def + 10
                    if (t.def >= 100) return bot.send("Ваша защита максимального уровня.");
                    if (y.gem < gg) return bot.send("Недостаточно кристаллов для покупки :disappointed_relieved:");
                    t.def += 5
                    if (t.def > 100){
                        let ty = t.at - 100
                        t.def -= ty
                    }
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`Вы улучшили свою защиту, теперь она равна: ${t.def} UwU`)
                    .setColor("#ef0aff")
                    bot.send(embed);
                    y.gem -= gg
                }
            }
        }
    } else {
        let uu = "30 кристаллов"
        let ff = `${t.def + 10} кристаллов`
        let embed = new Discord.MessageEmbed()
        .setDescription(`Улучшение статистик:`)
        .addField("Жизни[1]:", uu)
        .addField("Атака[2]:",uu)
        .addField("Защита[3]", ff)
        .setColor("#ef0aff")
        bot.send(embed);
    };
}

module.exports.help = {
    name: "upd",
    aliases: [""]
};