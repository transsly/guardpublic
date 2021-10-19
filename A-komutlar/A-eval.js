//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

const Discord = require('discord.js');
const db = require('quick.db');

const moment = require('moment');
const chalk = require('chalk');

const ayarlar = require('../A-ayarlar');

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

  exports.run = async (client, message, args) => {

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

const discow = new Discord.MessageEmbed().setColor('BLACK').setFooter(`${ayarlar.status.status_footer}`, message.author.avatarURL({ dynamic: true, size: 2048 })).setTimestamp()
const dikkat = client.emojis.cache.get(ayarlar.emojiler.discow_carpi)
const tik = client.emojis.cache.get(ayarlar.emojiler.discow_tik)
const ok = client.emojis.cache.get(ayarlar.emojiler.discow_ok)

const msunucu = message.guild
const muye = message.member
const msahip = message.author
const mkanal = message.channel

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

    if(!ayarlar.config.sahipler.includes(msahip.id)) return;

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

    if(!args[0]) return gonderm(`${dikkat} **Lütfen Yapmak İstediğin İşlemi Belirt.** ${dikkat}

${ok} **Normal Eval :** **\`${ayarlar.bot.prefix}eval normal <kod>\`**
${ok} **Text Eval :** **\`${ayarlar.bot.prefix}eval text <kod>\`**`)

    if(args[0].toLowerCase() === "normal") {

const kod = args.slice(1).join(" ");
    if(!kod) return dikkatm(`**Lütfen Bir Kod Belirt.**`)

  try {
    if (kod.includes(client.token)) return dikkatm(`**Sen Bir Orospu Çocuğusun**`)
  eval(kod)
} catch(err) {
  gonderm(`${dikkat} **Denediğin Kodda Bir Hata Oluştu. ${dikkat}\n\n${ok} Hata :\n\`\`\`js\n${err}\`\`\`**`)
}
}

    if(args[0].toLowerCase() === "text") {

const kod = args.slice(1).join(" ");
    if(!kod) return dikkatm(`**Lütfen Bir Kod Belirt.**`)

  try {
var result = clean(await eval(kod));
    if (result.includes(client.token)) return dikkatm(`**Sen Bir Orospu Çocuğusun**`)
  codem(result);
} catch (err) {
  codem(err);
}

function clean(text) {
    if (typeof text !== "string")
  text = require("util").inspect(text, { depth: 0 });
  text = text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  return text;
}
}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

function gonderm(mesaj) {
  mkanal.send(discow.setDescription(mesaj)).then(x => x.delete({ timeout: 15000 }))
}

function dikkatm(mesaj) {
  mkanal.send(discow.setDescription(`${dikkat} ${mesaj} ${dikkat}`)).then(x => x.delete({ timeout: 15000 }))
}

function codem(mesaj) {
  mkanal.send(mesaj, { code: "js", split: true })
}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

}
exports.discow = {
  aliases: ["eval", "test", "deneme", "texteval", "yazieval", "yazi-eval", "eval-yazi", "evalyazi"],
  isim: 'Eval Komutu',
  kategori: "sahip"
};

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------