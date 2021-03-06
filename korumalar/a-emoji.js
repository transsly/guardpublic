const Discord = require('discord.js')
const ayarlar = require('../A-ayarlar')
const db = require('quick.db');

const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

module.exports = async client => {

client.on("emojiCreate", async obje => {
const entry = await obje.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first());
    if(!entry || Date.now()-entry.createdTimestamp > 5000 || !entry.executor) return;
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
const insan = obje.guild.members.cache.get(entry.executor.id)
const insanid = entry.executor.id
const sunucu = obje.guild
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
    if(db.get("Guvenli&"+insanid) === "Evet") return;
    if(ayarlar.guard.sahipler.includes(insanid)) return;
    if(ayarlar.guard.botlar.includes(insanid)) return;
    if(insanid === client.user.id) return;
    if(insanid === sunucu.owner.id) return;
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
const discow = new Discord.MessageEmbed().setColor('BLACK').setFooter(`${ayarlar.status.status_footer}`, sunucu.iconURL({ dynamic: true, size: 2048 })).setTimestamp()
const ok = client.emojis.cache.get(ayarlar.emojiler.discow_ok)
const tik = client.emojis.cache.get(ayarlar.emojiler.discow_tik)
const dikkat = client.emojis.cache.get(ayarlar.emojiler.discow_carpi)

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
const olus = obje.createdAt
const gun = moment(new Date(olus).toISOString()).format('DD')
const ay = moment(new Date(olus).toISOString()).format('MM').replace("01", "Ocak").replace("02","??ubat").replace("03","Mart").replace("04", "Nisan").replace("05", "May??s").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "A??ustos").replace("09", "Eyl??l").replace("10","Ekim").replace("11","Kas??m").replace("12","Aral??k")
const yil = moment(new Date(olus).toISOString()).format('YYYY')
const saat = moment(new Date(olus).toISOString()).format('HH:mm:ss')
const olustarih = `${gun} ${ay} ${yil} | ${saat}`
            

            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
  await obje.delete({ reason: "DiscowZombie | Emoji Koruma Sistemi Aktif" })
  await insan.ban({ reason: "DiscowZombie | [Guard] Ban Sistemi "}).catch(err => { })
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

client.on("emojiDelete", async obje => {
const entry = await obje.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first());
    if(!entry || Date.now()-entry.createdTimestamp > 5000 || !entry.executor) return;
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
const insan = obje.guild.members.cache.get(entry.executor.id)
const insanid = entry.executor.id
const sunucu = obje.guild
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
    if(db.get("Guvenli&"+insanid) === "Evet") return;
    if(ayarlar.guard.sahipler.includes(insanid)) return;
    if(ayarlar.guard.botlar.includes(insanid)) return;
    if(insanid === client.user.id) return;
    if(insanid === sunucu.owner.id) return;
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
const discow = new Discord.MessageEmbed().setColor('BLACK').setFooter(`${ayarlar.status.status_footer}`, sunucu.iconURL({ dynamic: true, size: 2048 })).setTimestamp()
const ok = client.emojis.cache.get(ayarlar.emojiler.discow_ok)
const tik = client.emojis.cache.get(ayarlar.emojiler.discow_tik)
const dikkat = client.emojis.cache.get(ayarlar.emojiler.discow_carpi)

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
const olus = obje.createdAt
const gun = moment(new Date(olus).toISOString()).format('DD')
const ay = moment(new Date(olus).toISOString()).format('MM').replace("01", "Ocak").replace("02","??ubat").replace("03","Mart").replace("04", "Nisan").replace("05", "May??s").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "A??ustos").replace("09", "Eyl??l").replace("10","Ekim").replace("11","Kas??m").replace("12","Aral??k")
const yil = moment(new Date(olus).toISOString()).format('YYYY')
const saat = moment(new Date(olus).toISOString()).format('HH:mm:ss')
const olustarih = `${gun} ${ay} ${yil} | ${saat}`
            

            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
  await sunucu.emojis.create(obje.url, obje.name, { reason: "DiscowZombie | Emoji Koruma Sistemi Aktif" })
  await insan.ban({ reason: "DiscowZombie | [Guard] Ban Sistemi "}).catch(err => { })
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

client.on("emojiUpdate", async (eski, yeni) => {
const entry = await eski.guild.fetchAuditLogs({type: 'EMOJI_UPDATE'}).then(audit => audit.entries.first());
    if(!entry || Date.now()-entry.createdTimestamp > 5000 || !entry.executor) return;
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
const insan = eski.guild.members.cache.get(entry.executor.id)
const insanid = entry.executor.id
const sunucu = eski.guild
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
    if(db.get("Guvenli&"+insanid) === "Evet") return;
    if(ayarlar.guard.sahipler.includes(insanid)) return;
    if(ayarlar.guard.botlar.includes(insanid)) return;
    if(insanid === client.user.id) return;
    if(insanid === sunucu.owner.id) return;
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
const discow = new Discord.MessageEmbed().setColor('BLACK').setFooter(`${ayarlar.status.status_footer}`, sunucu.iconURL({ dynamic: true, size: 2048 })).setTimestamp()
const ok = client.emojis.cache.get(ayarlar.emojiler.discow_ok)
const tik = client.emojis.cache.get(ayarlar.emojiler.discow_tik)
const dikkat = client.emojis.cache.get(ayarlar.emojiler.discow_carpi)

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
const olus = eski.createdAt
const gun = moment(new Date(olus).toISOString()).format('DD')
const ay = moment(new Date(olus).toISOString()).format('MM').replace("01", "Ocak").replace("02","??ubat").replace("03","Mart").replace("04", "Nisan").replace("05", "May??s").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "A??ustos").replace("09", "Eyl??l").replace("10","Ekim").replace("11","Kas??m").replace("12","Aral??k")
const yil = moment(new Date(olus).toISOString()).format('YYYY')
const saat = moment(new Date(olus).toISOString()).format('HH:mm:ss')
const olustarih = `${gun} ${ay} ${yil} | ${saat}`
            

            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
  await yeni.setName(eski.name, "DiscowZombie | Emoji Koruma Sistemi Aktif")
  await insan.ban({ reason: "DiscowZombie | [Guard] Ban Sistemi "}).catch(err => { })
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

logcuk("Emoji [Create, Delete, Update]")

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

function cizgiconsole() {
  console.log(chalk.bold.yellow("??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"))
}

function bosconsole() {
  console.log("")
}

function logcuk(arg) {
    console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Guard")+" / "+chalk.bold.red(arg)+chalk.bold.green(" Korumas?? Ba??ar??yla Aktif Edildi."))
}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------