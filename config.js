/* # Exclusively from VIRUS FUCKER Project 
# Do not use this fore any commercial thing
# Do not edit (Respect to the Devaoloper) 
# All rights reserved VIRUS FUCKER https://Wa.me/94779528221
# Credit : usufusta-whatsappAsena
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsalexa.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v1.3.2 Global Stable',
    CCRUN: "zeks",
    XRUN: "xteam",
    ZRUN: "zenzapi",
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.SESSION === undefined ? '' : process.env.SESSION,
    CAPTION_KEY: process.env.CP === undefined ? '*Copyright © 2021 | Queen Stefanie*' : process.env.CP,
    OWNER_NAME: process.env.OWNER_NAME === undefined ? 'Kaweesha Chamod' : process.env.OWNER_NAME,
    OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94779529221' : process.env.OWNER_NUMBER,
    Z_NUMBER: process.env.NUMBER === undefined ? '+94779529221' : process.env.NUMBER,
    Z_OWNER: process.env.OWNER_NAME === undefined ? 'VIRUS FUCKER' : process.env.OWNER_NAME,
    MENU_HEDER: process.env.MENU_HEDER === undefined ? '▢ ⇓Stefanie Commands⇓ ▢' : process.env.MENU_HEDER,
    RASHI: process.env.LOGO_LINK === undefined ? 'https://i.ibb.co/9rrnJ7g/20210815-080839.jpg' : process.env.LOGO_LINK,
    BOTPLK: process.env.BOT_NAME === undefined ? 'Queen stefanie' : process.env.BOT_NAME,
    BOT_NAME: process.env.BOT_NAME === undefined ? '👸 Stefanie 👸' : process.env.BOT_NAME,
    INBOX_BLOCK: process.env.INBOX_BLOCK === undefined ?'false' : process.env.INBOX_BLOCK,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/0edc0f3917fde20a7990a.jpg' : process.env.ALIVE_LOGO,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'true' : process.env.AUTO_BİO,
    MENTION: process.env.TAG_REPLY === undefined ? '918921483992@s.whatsapp.net' : process.env.TAG_REPLY,
    CAPTION_NAME: process.env.CAPTION_NAME === undefined ? '*Copyright © 2021 | Queen Stefanie*' : process.env.CAPTION_NAME,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BIO: process.env.BIO === undefined ? 'ɪ ᴀᵐ ⁿᵒᵗ ᵖᵉʳᶠᵉᶜᵗ ʙᵘᵗ ɪ  ᴀᵐ ʟⁱᵐⁱᵗᵉᵈ ᴇᵈⁱᵗⁱᵒⁿ👀🔥' : process.env.BIO,
    CAPTIONS: process.env.CAPTIONS === undefined ? 'Made by stefanie' : process.env.CAPTIONS,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    MENUTEXT: process.env.MENU === undefined ?'*Copyright © 2021 | Queen Stefanie*' : process.env.MENU, 
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    CK: process.env.CK === undefined ? '```Made by Stefanie™\n| Copyright © 2021 |```' : process.env.CK,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BOT_STATUS: process.env.BOT_STATUS === undefined ? 'online' : process.env.BOT_STATUS,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    FULLEVA: process.env.FULL_EVA === undefined ? 'true' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'true' : process.env.THERI_KICK,
    BAD_KICK: process.env.BAD_KICK === undefined ? 'true' : process.env.BAD_KICK,
    ALL_LINK_BAN: process.env.ALL_LINK_BAN === undefined ? 'false' : process.env.ALL_LINK_BAN,
    ANTI_BAD: process.env.ANTI_BAD === undefined ?'true' : process.env.ANTIBAD,
    WHATS_LINK_BLOCK: process.env.WHATS_LINK_BLOCK === undefined ?'true' : process.env.WHATS_LINK_BLOCK,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    WARN_COUNT: process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
    WARN_MSG: process.env.WARN_MSG === undefined ? "Ok bie" : process.env.WARN_MSG,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;#/]' : process.env.HANDLERS,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? '*📩 𝑫𝒂𝒕𝒂 𝑰𝒏 𝑷𝒓𝒐𝒄𝒆𝒔𝒔, 𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕 𝑨 𝑴𝒊𝒏𝒖𝒕𝒆*' : process.env.SONGU,
    VIDGD: process.env.VIDGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ' : process.env.VIDGD,
    VIDGU: process.env.VIDGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ' : process.env.VIDGU,
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    MENU_EGS: process.env.MENU_EGS === undefined ? '📝' : process.env.MENU_EGS,
    MENU_TEG: process.env.MENU_TEG === undefined ? '🎯' : process.env.MENU_TEG,
    EMOJI_COMMAND: process.env.EMOJI_COMMAND === undefined ? '🛡️' : process.env.EMOJI_COMMAND,
    EMOJI_DESCRIPTION: process.env.EMOJI_DESCRIPTION === undefined ? '⚙️' : process.env.EMOJI_DESCRIPTION,
    EMOJI_EXAMPLE: process.env.EMOJI_EXAMPLE === undefined ? '💬' : process.env.EMOJI_EXAMPLE,
    EMOJI_WARNING: process.env.EMOJI_WARNING === undefined ? '⚠️' : process.env.EMOJI_WARNING,
    PANEL_COMMAND: process.env.PANEL_COMMAND === undefined ? 'help' : process.env.PANEL_COMMAND,
    BUG_COMMAND: process.env.BUG_COMMAND === undefined ? 'bug' : process.env.BUG_COMMAND,
    TIME_ZONE: process.env.TIME_ZONE === undefined ? 'Asia/Colombo' : process.env.TIME_ZONE,
    COUNTRY_CODE: process.env.COUNTRY_CODE === undefined ? '91/94' : process.env.COUNTRY_CODE,
    FAKE_BAN: process.env.FAKE_BAN === undefined ? 'true' : process.env.FAKE_BAN,
    HTTPS: process.env.HTTPS === undefined ? 'https://' : process.env.HTTPS,
    SUP_HEROKU: process.env.SUP_HEROKU === undefined ? 'herokuapp.com/' : process.env.SUP_HEROKU,
    HLOCK: process.env.HLOCK === undefined ? 'zeks.me.' : process.env.HLOCK,
    ENCRYPTION: process.env.ENCRYPTION === undefined ? 'scrapers' : process.env.EYENCRYPTION,
    TOXIC_P: process.env.TOXIC_P === undefined ? 'photoxy/' : process.env.TOXIC_P,
    TOXIC_T: process.env.TOXIC_T === undefined ? 'textpro/' : process.env.TOXIC_T,
    DECODE: process.env.DECODE === undefined ? 'TEENU-VIP-API' : process.env.DECODE,
    FBS1: process.env.FBS1 === undefined ?'https://dapuhy-api.herokuapp.com/api/' : process.env.FBS1,
    FBS2: process.env.FBS2 === undefined ?'snapsave?url' : process.env.FBS2,
    VID1: process.env.VID1 === undefined ?'https://zenzapi.xyz/api/downloader/' : process.env.VID1,
    VID2: process.env.VID2 === undefined ?'RDMMiI1VlXspMp8&index=2' : process.env.VID2,
    MENU_INFO: process.env.MENU_INFO === undefined ?'ǫᴜᴇᴇɴ ꜱᴛᴇꜰᴀɴɪᴇ ɪꜱ ᴀ ᴘᴏᴡᴇʀꜰᴜʟʟ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ. ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴠɪʀᴜꜱ ꜰᴜᴄᴋᴇʀ ᴜse ᴇᴀꜱʏ ᴀɴᴅ ᴡᴏʀᴋɪɴɢ ᴘᴇʀᴇᴄᴛʟʏ..ꜱᴏ ǫᴜᴇᴇɴ ꜱᴛᴇꜰᴀɴɪᴇ ɪꜱ ʙᴇꜱᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ!!' : process.env.MENU_INFO,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    ALL: process.env.ALL_CAPTION === undefined ? '*Copyright © 2021 | Queen Stefanie*' : process.env.ALL_CAPTION,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    PLKBGM: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    CCN: "Ikyy69",
    ON: "hunter",
    TH: "THEVINDUapi",
    HLOCK: "hadi-api",
    ZTH: "d537895142",
    XT: "62203531b66c44b4",
    DATABASE: DATABASE_URL === './whatsalexa.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? false : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "905524317852-1612300121",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
