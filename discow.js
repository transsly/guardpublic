//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

const moment = require('moment');
require('moment-duration-format');

const tokens = require('./Z-token-girme');
const ayarlar = require('./A-ayarlar');

const chalk = require('chalk');
const fs = require('fs');

moment.locale("tr")

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

global.discow = client
global.sesli = ayarlar.config.seslioda

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

function cizgiconsole() {
    console.log(chalk.bold.yellow("——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————"))
}

function bosconsole() {
    console.log("")
}

function sesconsole(arg, arg2) {
    if(arg === true) console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Ses")+" / "+chalk.bold.green("Bot Başarıyla Ses Kanalına Bağlandı."))
    if(arg === false) console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Ses")+" / "+chalk.bold.green("Bot Ses Kanalına Bağlanırken Bir Hata Oluştu.\nHata : "+chalk.bold.magenta(arg2))+"\n")
}

function girisconsole(arg, arg2) {
    if(arg === true) console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Giriş")+" / "+chalk.bold.green("Bot Başarıyla Giriş Yaptı.")+" / "+chalk.bold.red(client.user.tag)+" / "+chalk.bold.red(client.user.id)+" / "+chalk.bold.red(client.guilds.cache.size.toString()))
    if(arg === false) console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Giriş")+" / "+chalk.bold.green("Bot Giriş Yaparken Bir Hata Oluştu.\nHata : "+chalk.bold.magenta(arg2))+"\n")
}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

function eventconsole(arg) {
    console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Event")+" / "+chalk.bold.green(chalk.bold.red(arg)+" Fonksiyonu Başarıyla Başlatıldı."))
}

function komutsayconsole(arg) {
    console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Komutsay")+" / "+chalk.bold.green(chalk.bold.red(arg)+" Adet Komut Yüklenicek."))
}

function komutconsole(arg, arg2, arg3) {
    console.log(chalk.yellow(moment(new Date()).format("DD MMMM YYYY : HH:mm:ss"))+" / "+chalk.magenta("DiscowZombie | Komut")+" / "+chalk.bold.green("Bir Komut  Yüklendi. / Yüklenek Komut : "+chalk.bold.red(arg)+" / Yüklenen Kod : "+chalk.bold.red(arg2)+" / Komutun Alias'ları : "+chalk.bold.red(arg3)))
}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

require('./A-events/komut')(client);

    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
fs.readdir("./A-komutlar/", async (err, files) => {
        if (err) console.error(err);
    cizgiconsole()
    komutsayconsole(files.length)
files.forEach(f => {
let props = require(`./A-komutlar/${f}`);
    komutconsole(props.discow.isim,f,props.discow.aliases.map(x => `${x}`).join(", "));
    client.commands.set(props.discow.isim, props);
props.discow.aliases.forEach(alias => {
    client.aliases.set(alias, props.discow.isim);
}); 
});
});

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

client.login(tokens.discow).then(x => {
    bosconsole()
    girisconsole(true)
}).catch(err => girisconsole(false, err))

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

fs.readdir("./B-fonksiyonlar", (err, files) => {
        if (err) return console.error(err);
    bosconsole()
    files.filter((file) => file.endsWith(".js")).forEach((file) => {
let prop = require(`./B-fonksiyonlar/${file}`);
        if (!prop.conf) return;
    client.on(prop.conf.name, prop);
    eventconsole(prop.conf.name+" / "+prop.conf.aciklama);
});
});
  
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------