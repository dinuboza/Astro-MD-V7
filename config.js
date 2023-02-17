const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? '┌─❖
│ Hi 👋 
└┬❖  🚭🚭🚭🚭
┌┤✑  🇱🇰🇱🇰🇱🇰🇱🇰
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗦𝗽𝗲𝗲𝗱 : 0.0223 miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : 49 minutes, 18 seconds
│𝗣𝗼𝘄𝗲𝗿𝗲𝗱 : @⁨YoWhatsApp⁩
│𝗕𝗼𝘁 : Dinuwa Official
│𝗢𝘄𝗻𝗲𝗿 : @⁨Dinuwa
│𝗣𝗿𝗲𝗳𝗶𝘅 :  NO-PREFIX 
│𝗠𝗼𝗱𝗲 : Public
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : localhost
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : android
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : 98
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : 3889090
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : 18264
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝗡𝗮𝗺𝗲 : ❤️‍🔥❤️‍🔥❤️‍🔥
│𝗡𝘂𝗺𝗯𝗲𝗿 : @⁨🔎🔎
│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ❌
│𝗟𝗶𝗺𝗶𝘁 : 〽️12
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│🇱🇰🇱🇰🇱🇰🇱🇰🇱🇰
│🇱🇰🇱🇰🇱🇰🇱🇰🇱🇰
└┬────────────┈ ⳹
   │✑  Please Select
   │✑  The Button Below
   └─────────────┈ ⳹
Dinuwa Official' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'EN' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.ibb.co/fx1crQd/Picsart-22-12-14-08-38-16-768.jpg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? 'Dinuwa Official' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '*Dinuwa Official*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*Inbox not allowed' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? 'Replit' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? 'ASTRO=QzpTVQqT#WJYIA-IIxxL7e6eHHl_OffZAj5dLVq5lfXXDvAapEuU' : process.env.SESSION_ID
};
