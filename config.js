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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_14_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICA2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDk1LFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhsZGxSelNhV3crMC9zZllMUGdobFBHLzF6NWMwalBJcFFjQWtHZkhVWkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkM0X0tWaVJPUzRxM2JHNmNnQWZLWHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2FmOWQ5YzUtZGQ1NC00ZDFjLTgxODYtNWYwYWM0Nzc4YTk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMjAzLFxuICAgICAgMTI1LFxuICAgICAgMTE4LFxuICAgICAgNTMsXG4gICAgICAyMTUsXG4gICAgICA4OCxcbiAgICAgIDIwNCxcbiAgICAgIDY5LFxuICAgICAgMTQ5LFxuICAgICAgMTg0LFxuICAgICAgMTc3LFxuICAgICAgMTU4LFxuICAgICAgMTEwLFxuICAgICAgNDUsXG4gICAgICAxNjcsXG4gICAgICA0NCxcbiAgICAgIDU2LFxuICAgICAgMTI2LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgMTIxLFxuICAgICAgNixcbiAgICAgIDU5LFxuICAgICAgMjMxLFxuICAgICAgMTEsXG4gICAgICAxNzYsXG4gICAgICAxMjEsXG4gICAgICAxMjYsXG4gICAgICAxMjgsXG4gICAgICAxMTcsXG4gICAgICA3OCxcbiAgICAgIDI0MixcbiAgICAgIDk0LFxuICAgICAgNjEsXG4gICAgICAyMDQsXG4gICAgICA3NSxcbiAgICAgIDIwNixcbiAgICAgIDI0NyxcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIMVI0UE44QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTMwNDc2OTc2OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmFkIE11bmRhXCIsXG4gICAgXCJsaWRcIjogXCIyNzc2ODI5NTY4MTIzMDM6NTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NvMUpBQkVOUzFqYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4bzNrZDk1NlhseWN0VXRsUTN3UWdzQjZYQ2NyU1FMeHN0S1MyVXBGUGhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBhSGxiVmEvYkhlU1k5NkxFcy80R2lsaWNkb3UwWGIyQ0dwRUd2VkF2Z0RXd3VBRHc2dGRHZjZGUkRNME1Fd3p2UTIwNW9VdUUxTGhYMmxPTExickFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNSRzV3cUdlOTdqQkJJem90WlRMM0VWeFN6b0N5N3hPMkhZUUFxOGFoc2dKU3RzWVZTdFFPTGJhdjc2dFR0TGtRdjNpa3Foemg2RkxxUG1oZG14MWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEzMDQ3Njk3Njo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTk4MTY1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU4wSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjBILmpzb24iOiAie1wia2V5RGF0YVwiOlwibWhpOTZFTVQyaThGMjRod1VpeHhxTHR2ZHV6blljQ2gvY0hlMStrUjJvYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDMzNzEzNjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE3ODk0NDc2MTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Tabish Ali",
  packname: process.env.PACK_NAME || "Bad Munda",
  botname : process.env.BOT_NAME  || "Tabish-Ali",
  ownername:process.env.OWNER_NAME|| "Tabish Ali",


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
