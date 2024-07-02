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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263786023";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_52_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMxLFxuICAgICAgICA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMxLFxuICAgICAgICA3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxNTZTK3hLUjhTSzdKYlVOMzlxSE5jTUtUM3lXcHg5WGNUcVBvdXYyKzYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxMzQ2OTQ1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E3NDJEMkQwMkYyNzU4N0FFRkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTEwMzQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzEzNDY5NDU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUE4N0NCNkIzMjhGNkUzODM5MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5MTAzNTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM0Njk0NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNkM2NTlFRjRGRjA5Q0Q5OEQyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTkxMDM1NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTdlEyamxiWlJBT3ZUTWhpYlZMcXVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFhM2ZmNjQ1LWUwYzEtNDAwMS04NDU0LTBhZmQ2NWRkYjdkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICA5LFxuICAgICAgMTUsXG4gICAgICAyNTUsXG4gICAgICAyMDksXG4gICAgICAyMzUsXG4gICAgICAyMzAsXG4gICAgICAyMzAsXG4gICAgICAyMzYsXG4gICAgICA0NCxcbiAgICAgIDIwNCxcbiAgICAgIDIyMyxcbiAgICAgIDQ3LFxuICAgICAgNDksXG4gICAgICA5OSxcbiAgICAgIDAsXG4gICAgICAyMSxcbiAgICAgIDk4LFxuICAgICAgMTc1LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMTIwLFxuICAgICAgMTc4LFxuICAgICAgMTUxLFxuICAgICAgMTUsXG4gICAgICA4NSxcbiAgICAgIDIyMSxcbiAgICAgIDcwLFxuICAgICAgMTY3LFxuICAgICAgMzksXG4gICAgICA1MCxcbiAgICAgIDExOSxcbiAgICAgIDIxMCxcbiAgICAgIDI0LFxuICAgICAgMjI2LFxuICAgICAgMjI3LFxuICAgICAgNTUsXG4gICAgICA1NCxcbiAgICAgIDE5MCxcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKNEFOSFdSV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzEzNDY5NDU1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MzYwMjczNzkwOTk2MzozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkdlbml1c1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0txYmc0VUhFTWYvanJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZWlVODNyVVZwT0gybCtGYWR4TzJpa3FobTNGUVdMb1ppVlFyZ3BqeTZEdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3Z0owT09XVGVyRzVzNllrcllETUQvYkZhVHU0dGY3RVhFNUZjdVRNSi94RURwcG83OFh5bVRidEsvMkJqdWlWTTVYeElnRktFMHovTnAyOGRXODFCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiaHNBQUdwQ1Npb0VseGlTODFhTEx5blJ6aUtMWng1RlFtSlVHaUROaGRCcHZzUHRwVDhnQlBuSndvSG5nVVpsNkpzNUMwZWllUWNHWkc5bldsc0ZpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTM0Njk0NTU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTEwMzQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT05PXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPTk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMTmZDaG94elVRaldnTHoxMmRGTE1NMnpVazVlclFibGIvZEV3RitPU1BFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODk1ODY2MDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTkxMDM0NzI1NVwifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
