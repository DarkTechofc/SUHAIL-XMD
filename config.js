const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94764984597";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94764984597,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_29_09_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI3LFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICAyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA2LFxuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM4LFxuICAgICAgICA4NSxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyVDVJditGUGdXSDBtNTNQWk9iYzZsRk9WR2dnOTBwMzBxdjVLV0xPVlJRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY0OTg0NTk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MkU0MDFCNkIxMDJFMEQ1RTI0RTAyQkI3QzVGNUVFNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjYwMTgxNzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2NDk4NDU5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjIzQTQ3QTVGQzVGNEVCRkFFMEZERDQ3QUNGMDE3NEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2MDE4MTc1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjV0NzBITTZDU3ZlWGxHZXJCNGt0RUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjJkMDg1ZjMtYjMyMy00ZGI5LTg5NmMtZDc2YTRhMGI3YmU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDE0OCxcbiAgICAgIDMzLFxuICAgICAgMTIxLFxuICAgICAgMjM4LFxuICAgICAgMTU0LFxuICAgICAgMjcsXG4gICAgICAyNyxcbiAgICAgIDEwNSxcbiAgICAgIDUsXG4gICAgICAxNTMsXG4gICAgICAxOTksXG4gICAgICAyMjksXG4gICAgICAyMjUsXG4gICAgICAxMzEsXG4gICAgICAxNSxcbiAgICAgIDIwMyxcbiAgICAgIDE3MSxcbiAgICAgIDExMSxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDIwNSxcbiAgICAgIDEyMSxcbiAgICAgIDIzNyxcbiAgICAgIDE2NyxcbiAgICAgIDE4NSxcbiAgICAgIDI0MCxcbiAgICAgIDIwNSxcbiAgICAgIDEyMCxcbiAgICAgIDYwLFxuICAgICAgNzgsXG4gICAgICAxNjgsXG4gICAgICA3OCxcbiAgICAgIDcyLFxuICAgICAgMTg5LFxuICAgICAgMTgwLFxuICAgICAgMixcbiAgICAgIDExNyxcbiAgICAgIDIzOCxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1KOUIyR01aXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NDk4NDU5Nzo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAzOTMwMDcxNjM4MTYxOjQ3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuS5oe+8pPCdmb0g4oOQ8J+Oi+KDkSDwnZmK8J2YjfCdmIog8J+OjvCfjq3jgLRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQU1o3ZXNCRVBma2c3Y0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInB5Z0xUY1BtY0VSZlE3bFRBSFROZ01KVytoY0pZd3FlaHhod3lUSGpzRWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZDhZMjZZRk5jREp2TzQrYmJTeGxRMHdobFBtQjZTd2E1Tm83aG8zNlZRcVhaT0ZpdVNXT2gwZE1BK2E3VzJIQUtzK21rZEpSa0RwMllaQUI0UlNMQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiblphQmMzQ1JuQU04cVJENnRmazBaRU0vdEVQTDlSLy9FRjhERCtBYXNjQXVRTmo0Y3ZVL3RDWFNvYUhGRFZVNGdqa2JWb0p5eVg4MTU2K09LdnVDaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjQ5ODQ1OTc6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYwMTgxNzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJV2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlXai5qc29uIjogIntcImtleURhdGFcIjpcIjMzMmR2MWpXMXhYaDgxRmpVUXpBWCsvMzZYQjhhajRqUWE4SXFxUTIxams9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDk0NjE5ODkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjYwMTgxNzQxOTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "乡Ｄ𝙽 ⃐🎋⃑ 𝙊𝘍𝘊 🎎🎭〴",
  packname: process.env.PACK_NAME || "乡Ｄ𝙽 ⃐🎋⃑ 𝙊𝘍𝘊 🎎🎭〴",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "乡Ｄ𝙽 ⃐🎋⃑ 𝙊𝘍𝘊 🎎🎭〴",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "suhail-md-dn",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
