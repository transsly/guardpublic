//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const db = require('quick.db')
const ayarlar = require('../A-ayarlar');
const client = global.discow
const fs = require('fs')

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

module.exports = async () => {

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

const discow = new Discord.MessageEmbed().setColor('BLACK').setFooter(`${ayarlar.status.status_footer}`, client.user.avatarURL({ dynamic: true, size: 2048 })).setTimestamp()
const dikkat = client.emojis.cache.get(ayarlar.emojiler.discow_carpi)
const tik = client.emojis.cache.get(ayarlar.emojiler.discow_tik)
const ok = client.emojis.cache.get(ayarlar.emojiler.discow_ok)

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

function cizgiconsole() {
  console.log(chalk.bold.yellow("——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————"))
}

function bosconsole() {
  console.log("")
}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

fs.readdir("./korumalar", (err, files) => {
        if (err) return console.error(err);
    bosconsole()
    files.filter((file) => file.endsWith(".js")).forEach((file) => {
require(`../korumalar/${file}`)(client)
});
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

}
module.exports.conf = {
  name: "ready",
  aciklama: "Koruma Load"
};

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------