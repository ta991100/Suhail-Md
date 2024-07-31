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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_30_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgNixcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYzLFxuICAgICAgICA2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICA3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDczLFxuICAgICAgICAyNyxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAzNixcbiAgICAgICAgNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5LFxuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMjUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY5LFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQXk0UkVNU1ZzQStoZ0hsazhORlRVZVQxZUdBRlJwc09NaDdibHMxNS9jMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieXdwdjBhNXBTTi1SRWp4U3FMTkRSZ1wiLFxuICBcInBob25lSWRcIjogXCIyZTVlMmYwNy1mMDA1LTRjMjAtYTlmYi03MjA1OWJlYTA1MmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgMTczLFxuICAgICAgNjcsXG4gICAgICA5MyxcbiAgICAgIDE2NCxcbiAgICAgIDEwNSxcbiAgICAgIDExMCxcbiAgICAgIDIwNCxcbiAgICAgIDgzLFxuICAgICAgNDIsXG4gICAgICAyNDgsXG4gICAgICAyNixcbiAgICAgIDExNyxcbiAgICAgIDI0NixcbiAgICAgIDI1MyxcbiAgICAgIDE0LFxuICAgICAgNTgsXG4gICAgICA0NixcbiAgICAgIDEwNCxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMTYxLFxuICAgICAgNjAsXG4gICAgICAxMDUsXG4gICAgICAxNjQsXG4gICAgICAxOTMsXG4gICAgICAxNTMsXG4gICAgICAxMDAsXG4gICAgICAyMTcsXG4gICAgICAxNTYsXG4gICAgICAyMDcsXG4gICAgICAzMCxcbiAgICAgIDE2NSxcbiAgICAgIDE3LFxuICAgICAgNTUsXG4gICAgICAxNDksXG4gICAgICAxNjUsXG4gICAgICA5LFxuICAgICAgMjU1LFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5aQktFM0FZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMzA0NzY5NzY6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCYWQgTXVuZGFcIixcbiAgICBcImxpZFwiOiBcIjI3NzY4Mjk1NjgxMjMwMzo1N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPV28xSkFCRUpYUXA3VUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhvM2tkOTU2WGx5Y3RVdGxRM3dRZ3NCNlhDY3JTUUx4c3RLUzJVcEZQaG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnBzRjFuYVd4Y2ZZSm9MNkJJWGNVd2RQcUxpWkUvTFRhNmQ3dGtLWkFrOEhMSmlYcWVqK0RxM1ZoVG1XQ0c0RlQ3VGxFZFAxWDNZOVFwQTA1NElwQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibUhBQlVTUWlxSy9KM0dhcDIxU3dDa0RtTFlNM0JaMVVTdXcxL2xjaG1JemZzRXI1aUt0NC94cUJUQU9HNlhDb3BTYUV2cWtOUkU4RkdlZTdxVk5oaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTMwNDc2OTc2OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDExMDMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjBIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOMEguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtaGk5NkVNVDJpOEYyNGh3VWl4eHFMdHZkdXpuWWNDaC9jSGUxK2tSMm9jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwMzM3MTM2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc4OTQ0NzYxMFwifSIKfQ=="  // PUT your SESSION_ID 


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
