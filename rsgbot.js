const dateFns = require('date-fns')
const format = 'yyyy-MM-dd'
const nodeFetch = require('node-fetch')
const BOT_TOKEN = '1301976357:AAG1H4YRnV-mVbseVplSwwVvNcTCHQAhqy8'
const { Telegraf } = require('telegraf')
const bot = new Telegraf(BOT_TOKEN)
const bodyParser = require('body-parser')

// Start Coding
bot.start((ctx) => ctx.reply('Hello, Program!'))

bot.command('about', (ctx) => {ctx.reply(`Service Bot for RadioSg created by  @ritam_mukherjee using NodeJS and LibreTime \n Source: https://github.com/rit-am/TelegramLibreTIme `)})

bot.command('help', (ctx) => {ctx.reply(`Supported Commands \n \nabout \nhelp \nRadioUrl \nPreviousShow \nPreviousTrack \nCurrentShow \nCurrentTrack \nNextShow \nNextTrack \nSchedule\n \nPrecede Command with \\ \n\nCommands are Case Sensative`)})

bot.command('RadioUrl', (ctx) => {ctx.reply(`https://radiosg.in/play.html`)})

//bot.command('Schedule', (ctx) => {ctx.reply(`https://radiosg.in/play.html`)})

bot.command('PreviousTrack', (ctx) => { 
    require('https').get('https://radiosg.in/api/live-info-v2', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {console.log(body);
            var jsonParsed = JSON.parse(body);
            ctx.reply("Previous Track : " + jsonParsed.tracks.previous.name + "\n Starts : " + jsonParsed.tracks.previous.starts + "\n Ends : " + jsonParsed.tracks.previous.ends);
        });                
    });
})

bot.command('CurrentTrack', (ctx) => { 
    require('https').get('https://radiosg.in/api/live-info-v2', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {console.log(body);
            var jsonParsed = JSON.parse(body);
            ctx.reply("Current Track : " + jsonParsed.tracks.current.name + "\n Starts : " + jsonParsed.tracks.current.starts + "\n Ends : " + jsonParsed.tracks.current.ends);
        });                
    });
})

bot.command('NextTrack', (ctx) => { 
    require('https').get('https://radiosg.in/api/live-info-v2', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {console.log(body);
            var jsonParsed = JSON.parse(body);
            ctx.reply("Next Track : " + jsonParsed.tracks.next.name + "\n Starts : " + jsonParsed.tracks.next.starts + "\n Ends : " + jsonParsed.tracks.next.ends);
        });                
    });
})

bot.command('PreviousShow', (ctx) => {ctx.reply(`N/A`)})

bot.command('CurrentShow', (ctx) => { 
    require('https').get('https://radiosg.in/api/live-info-v2', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {console.log(body);
            var jsonParsed = JSON.parse(body);
            ctx.reply("Current Show : " + jsonParsed.shows.current.name + "\n Starts : " + jsonParsed.shows.current.starts + "\n Ends : " + jsonParsed.shows.current.ends);
        });                
    });
})

bot.command('NextShow', (ctx) => { 
    require('https').get('https://radiosg.in/api/live-info-v2', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {console.log(body);
            var jsonParsed = JSON.parse(body);
            ctx.reply("Next Show : " + jsonParsed.shows.next[0].name + "\n Starts : " + jsonParsed.shows.next[0].starts + "\n Ends : " + jsonParsed.shows.next[0].ends);
        });                
    });
})

bot.launch()
console.log('telegram bot start 🆙')