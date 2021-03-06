//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const db = require('quick.db')
const ayarlar = require('../A-ayarlar');
const client = global.discow

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
  console.log(chalk.bold.yellow("??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"))
}

function bosconsole() {
  console.log("")
}

function sesconsole(arg, arg2) {
  if(arg === true) console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Ses")+" / "+chalk.bold.green("Bot Ba??ar??yla Ses Kanal??na Ba??land??."))
  if(arg === false) console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Ses")+" / "+chalk.bold.green("Bot Ses Kanal??na Ba??lan??rken Bir Hata Olu??tu.\nHata : "+chalk.bold.magenta(arg2)))
}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

  const seskanal = client.channels.cache.get(ayarlar.config.seslioda)
  if(seskanal) {
  seskanal.join().then(x => {
    bosconsole()
    sesconsole(true)
}).catch(err => {
  sesconsole(false, err)
  })}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

client.user.setPresence({ activity: { name: ayarlar.status.status_footer, type: ayarlar.status.status_type }, status: ayarlar.status.status_stat }).catch(err => { })

var durumlar = ayarlar.status.status_name

setInterval(function() {
var random = Math.floor(Math.random()*(durumlar.length-0+1)+0);
    
  client.user.setActivity(durumlar[random])
}, 5000)

setTimeout(() => {
console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Bot")+" / "+chalk.bold.green("Bot Ba??ar??yla Aktif Oldu."))
cizgiconsole()
}, 5000)

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

}
module.exports.conf = {
  name: "ready",
  aciklama: "Durum - Ses Load"
};

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------