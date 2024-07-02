const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263786023973";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDg3LFxuICAgICAgICAxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk0raTh4K2Z2K3lrcUFIR1U3eUJtUnd3ejc0eWNNSm9qbEtseWcvUXk2TTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzEzNDY5NDU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUJGNjUxMzZERDE4MEQ0NUY5OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5NDI0MzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM0Njk0NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQUVDQkE4OURBQzZGQTJCNTIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTk0MjQ0MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPZFR4RDZFZ1JJU1R5THVxY1Z2Vkh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgwNjM2ODM2LTg5OTUtNDJlOS1hMTY4LWQzMWVkYjE0YTE0MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAyMTYsXG4gICAgICAxMDksXG4gICAgICA5MyxcbiAgICAgIDg3LFxuICAgICAgNjAsXG4gICAgICAxMDcsXG4gICAgICAyMTMsXG4gICAgICAyMjgsXG4gICAgICAyMTAsXG4gICAgICAyMjksXG4gICAgICAxMDgsXG4gICAgICAxNjEsXG4gICAgICA1OCxcbiAgICAgIDExNyxcbiAgICAgIDg1LFxuICAgICAgMTY2LFxuICAgICAgNjUsXG4gICAgICAyMTEsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgNjAsXG4gICAgICAxNjEsXG4gICAgICAxMDcsXG4gICAgICA3OCxcbiAgICAgIDE4MixcbiAgICAgIDE2MixcbiAgICAgIDIxMSxcbiAgICAgIDEwMSxcbiAgICAgIDI0MixcbiAgICAgIDIzNyxcbiAgICAgIDIzNyxcbiAgICAgIDIxMixcbiAgICAgIDUzLFxuICAgICAgOTEsXG4gICAgICAxNzIsXG4gICAgICAxMjcsXG4gICAgICA2OCxcbiAgICAgIDE3NCxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5KQ1JGU0g5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTM0Njk0NTU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjczNjAyNzM3OTA5OTYzOjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiR2VuaXVzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVNka2IwR0VLTDZrTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlaVU4M3JVVnBPSDJsK0ZhZHhPMmlrcWhtM0ZRV0xvWmlWUXJncGp5NkR3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklWbnJzSjExbDB0dFdOQ3BvZVlSOE5yaVlTaGtrUnZLc1pyUW5BY0x1Q2wvWGxETnlUMnVIOFJCbWpIUDluRHRSb012TVc4cjNMS09TRXFGNFlTa0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9iTmJLUForL0QvcUNWbjFGVm01eWRWbXo0ZUZWMHlLYVdjU21GWnBaZVVDazgwZDFzTGduMFNKOXVJOWlFQjJudEw1T2g4eHNpTkRPdXZsVGV2MWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzQ2OTQ1NTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5NDI0MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMU3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxTcy5qc29uIjogIntcImtleURhdGFcIjpcIlA1OFdYYXRkaEZhZytnZmtXSjF1QWhmNEtlREdUdkp5ZkVVVlZyc2Q0WGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTczODgyMTMxNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5OTQyNDM3MjU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mastermind",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
