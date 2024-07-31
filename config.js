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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_39_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDM3LFxuICAgICAgICA4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1LFxuICAgICAgICA5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgODksXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTksXG4gICAgICAgIDk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDc4LFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU01CdTVXNC8wdldaL3d6V09OUTV3V2NhbUVMQng4ZGNiS2tTWDF0VElGRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWHFmSHZrVGVSM3kzU1p5WHl0VkdzQVwiLFxuICBcInBob25lSWRcIjogXCI2NjJkNDBiZC0zMjYyLTRjMDQtYTNmZS0wNDNjN2FiZTNjOGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMjE2LFxuICAgICAgMjM1LFxuICAgICAgMjIyLFxuICAgICAgNTAsXG4gICAgICA1NyxcbiAgICAgIDEzNyxcbiAgICAgIDEzMSxcbiAgICAgIDg0LFxuICAgICAgNDcsXG4gICAgICA1MixcbiAgICAgIDAsXG4gICAgICAxNSxcbiAgICAgIDE0NSxcbiAgICAgIDIzMCxcbiAgICAgIDE2MCxcbiAgICAgIDE2OSxcbiAgICAgIDEyMSxcbiAgICAgIDE2MyxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDIyNCxcbiAgICAgIDEsXG4gICAgICAyMzQsXG4gICAgICA1OSxcbiAgICAgIDIxNCxcbiAgICAgIDExMixcbiAgICAgIDIzNSxcbiAgICAgIDE4NixcbiAgICAgIDIxNixcbiAgICAgIDE4NixcbiAgICAgIDEwMCxcbiAgICAgIDIzMCxcbiAgICAgIDIsXG4gICAgICAyMzksXG4gICAgICA1NSxcbiAgICAgIDIwMyxcbiAgICAgIDE5NCxcbiAgICAgIDIsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSUldFOFM1OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE2MTAxMzcxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExMDMzODIxMzIwNDAwOToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHZW81SUVFTE9TcExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRXlQU05qaGhPTGx0VnpsM2tuVkVjU1ZPRmpDSHVRczRMRVhTd0JhWjJBND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIaTVOdEhNeUxkQWZuL3VTMWwzWEluaVBKOWpkbXVacUZodVZWQWFQb3RFdmp0c0ZuMG5qRVNGdyt0QkRlUVkzUFhvekJrdkFPbjdXbXMxQUFqNEhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiRmU1ajF2aE9oeUI1WU9Va3N1Y2JLdlFaUDFqaitVWlNyVjc4M3NoTU5CYmxiaXhISk9iLzNOZ0VXQXE5YW9ZN3FvaDJwczdvYWpJc1dhMEtnUlhBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTYxMDEzNzE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzUzOTc2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
