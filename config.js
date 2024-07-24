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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_27_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI5LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICA1NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4LFxuICAgICAgICA4LFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDg1LFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk5LFxuICAgICAgICA1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICA1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSmZCSTJvb2JHZWpJUENSaU4veUFPOTFoT01wMEp5QWlTSm5ZOENnTm56Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ3JBemJDajJSN0tkZlY0bVlYcGNmd1wiLFxuICBcInBob25lSWRcIjogXCI3YTc0YmY5NS0wYmI1LTQ2MzItOTIzOS0xZTVjYzdmNTVkMzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgOTMsXG4gICAgICA4LFxuICAgICAgMTQ5LFxuICAgICAgMjA4LFxuICAgICAgNjMsXG4gICAgICAyMTcsXG4gICAgICAxOTIsXG4gICAgICAxMjYsXG4gICAgICAyNTIsXG4gICAgICAxNjMsXG4gICAgICAxNTEsXG4gICAgICAxMzgsXG4gICAgICA1NCxcbiAgICAgIDc5LFxuICAgICAgMTgyLFxuICAgICAgNDgsXG4gICAgICAxNDcsXG4gICAgICAxMTIsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMTYxLFxuICAgICAgMTE5LFxuICAgICAgOTcsXG4gICAgICAyLFxuICAgICAgNDMsXG4gICAgICAyMzYsXG4gICAgICAxNjEsXG4gICAgICA4LFxuICAgICAgOTgsXG4gICAgICAxODksXG4gICAgICAyMjUsXG4gICAgICAyMjYsXG4gICAgICAxOTgsXG4gICAgICAyNDAsXG4gICAgICAxOTAsXG4gICAgICAxMTcsXG4gICAgICAyMzcsXG4gICAgICAxMzQsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjQyMjQ4V0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzMDQ3Njk3Njo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJhZCBNdW5kYVwiLFxuICAgIFwibGlkXCI6IFwiMjc3NjgyOTU2ODEyMzAzOjUwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09PbzFKQUJFSTZGZ3JVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOG8za2Q5NTZYbHljdFV0bFEzd1Fnc0I2WENjclNRTHhzdEtTMlVwRlBobz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKNzFVVVpqQ0lkTWRTWEE0VWcxd1FycEVsT3g0YWFEQldpb1pUc2ZDc3JjQU42dnFSZ0hNdHBRbzJia3laTm1DYWk2aXQvbnNwYmZXSGM2dkJnS3JDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVUTN3Qk8wVGtSQlRFNG9nM0h0MGFNMGZxZ1dSZEpUSEIvc2ZXdEYwQmhOSkhCbnhhZHZYZGpGUTg5eUl0QjVYd2Qxa0Y1ZTZYK3RJNFZVV2xCOHJCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMzA0NzY5NzY6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3OTUyMThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
