const Discord = module.require("discord.js");

let crt = require('../craft.json');
let profile = require('../profile.json');
let prof = require('../prof.json');
let inf = require('../inf.json');

module.exports.run = async (bot,message,args) => {
    let y = profile[message.author.id];
    let t = crt[message.author.id]
    let r = prof[message.author.id];
    let o = inf[message.author.id];
    message.delete();
}
module.exports.help = {
    name: "craft",
    aliases: [""]
};