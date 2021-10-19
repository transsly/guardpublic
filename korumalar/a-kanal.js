const Discord = require('discord.js')
const ayarlar = require('../A-ayarlar')
const db = require('quick.db');

const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

module.exports = async client => {

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

client.on("channelCreate", async obje => {
const entry = await obje.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
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
            
  await obje.delete({ reason: "DiscowZombie | Kanal Koruma Sistemi Aktif" })
  await insan.ban({ reason: "DiscowZombie | [Guard] Ban Sistemi "}).catch(err => { })
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

client.on("channelDelete", async obje => {
const entry = await obje.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
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
            
  await obje.clone({ reason: "DiscowZombie | Kanal Koruma Sistemi Aktif" }).then(async kanal => {
    if (obje.parentID != null) await kanal.setParent(obje.parentID);
  await kanal.setPosition(obje.position);

    if (obje.type === "category") await obje.guild.channels.cache.filter(k => k.parentID == obje.id).forEach(x => x.setParent(kanal.id));

  obje.permissionOverwrites.forEach(perm => {
let thisPermOverwrites = {};

  perm.allow.toArray().forEach(p => {
    thisPermOverwrites[p] = true;
});

  perm.deny.toArray().forEach(p => {
    thisPermOverwrites[p] = false;
});

  kanal.createOverwrite(perm.id, thisPermOverwrites);
});
})
  await insan.ban({ reason: "DiscowZombie | [Guard] Ban Sistemi "}).catch(err => { })
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

client.on("channelUpdate", async (eski, yeni) => {
const entry = await eski.guild.fetchAuditLogs({type: 'CHANNEL_UPDATE'}).then(audit => audit.entries.first());
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
            
    if (yeni.type !== "category" && yeni.parentID !== eski.parentID) yeni.setParent(eski.parentID, { reason: "DiscowZombie | Kanal Koruma Sistemi Aktif" });
    if (yeni.type === "category") {
  
  await yeni.edit({
    name: eski.name,
}, { reason: "DiscowZombie | Kanal Koruma Sistemi" });

} else if (yeni.type === "text") {
  await yeni.edit({
    name: eski.name,
    topic: eski.topic,
    nsfw: eski.nsfw,
    rateLimitPerUser: eski.rateLimitPerUser
}, { reason: "DiscowZombie | Kanal Koruma Sistemi" });

} else if (yeni.type === "voice") {
  await yeni.edit({
    name: eski.name,
    bitrate: eski.bitrate,
    userLimit: eski.userLimit,
}, { reason: "DiscowZombie | Kanal Koruma Sistemi" });

};

  eski.permissionOverwrites.forEach(perm => {
let thisPermOverwrites = {};

  perm.allow.toArray().forEach(p => {
    thisPermOverwrites[p] = true;
});

  perm.deny.toArray().forEach(p => {
    thisPermOverwrites[p] = false;
});

  yeni.createOverwrite(perm.id, thisPermOverwrites);
});
  await insan.ban({ reason: "DiscowZombie | [Guard] Ban Sistemi "}).catch(err => { })
            
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
            
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

logcuk("Kanal [Create, Delete, Update]")

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