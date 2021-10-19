const Discord = require('discord.js')
const ayarlar = require('../A-ayarlar')
const db = require('quick.db');

const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

module.exports = async client => {

client.on("roleCreate", async obje => {
const entry = await obje.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
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
const ay = moment(new Date(olus).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
const yil = moment(new Date(olus).toISOString()).format('YYYY')
const saat = moment(new Date(olus).toISOString()).format('HH:mm:ss')
const olustarih = `${gun} ${ay} ${yil} | ${saat}`
            

            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
  await obje.delete({ reason: "DiscowZombie | Rol Koruma Sistemi Aktif" })
  await insan.ban({ reason: "DiscowZombie | [Guard] Ban Sistemi "}).catch(err => { })
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

client.on("roleDelete", async obje => {
const entry = await obje.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
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
const ay = moment(new Date(olus).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
const yil = moment(new Date(olus).toISOString()).format('YYYY')
const saat = moment(new Date(olus).toISOString()).format('HH:mm:ss')
const olustarih = `${gun} ${ay} ${yil} | ${saat}`
            

            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
  await sunucu.roles.create({
    data: {
      name: obje.name,
      color: obje.hexColor,
      hoist: obje.hoist,
      position: obje.position,
      permissions: obje.permissions,
      mentionable: obje.mentionable
}, reason: "DiscowZombie | Rol Koruma Sistemi" });
  await insan.ban({ reason: "DiscowZombie | [Guard] Ban Sistemi "}).catch(err => { })
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

client.on("roleUpdate", async (eski, yeni) => {
const entry = await eski.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first());
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
const ay = moment(new Date(olus).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
const yil = moment(new Date(olus).toISOString()).format('YYYY')
const saat = moment(new Date(olus).toISOString()).format('HH:mm:ss')
const olustarih = `${gun} ${ay} ${yil} | ${saat}`
            

            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
  await yeni.edit({
    name: eski.name,
    color: eski.hexColor,
    hoist: eski.hoist,
    permissions: eski.permissions,
    mentionable: eski.mentionable,
    position: eski.position
}, "DiscowZombie | Rol Koruma Sistemi");

  await yeni.setPosition(eski.position)
  await insan.ban({ reason: "DiscowZombie | [Guard] Ban Sistemi "}).catch(err => { })
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

logcuk("Rol [Create, Delete, Update]")

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

function cizgiconsole() {
  console.log(chalk.bold.yellow("——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————"))
}

function bosconsole() {
  console.log("")
}

function logcuk(arg) {
    console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Guard")+" / "+chalk.bold.red(arg)+chalk.bold.green(" Koruması Başarıyla Aktif Edildi."))
}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------