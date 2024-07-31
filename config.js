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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_13_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDgzLFxuICAgICAgICA5MixcbiAgICAgICAgMjM1LFxuICAgICAgICA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYzLFxuICAgICAgICA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICA5NixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICA0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjh3MFJOVEJUbmNYamx1eXQvZHRER2xtRnVUdkUzNy9LSmxOVlI0RlVwNHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJQRHRDMU1RU3JXS0ZkQzFhWVBQYVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDg1MjRmZTctMTcxMC00NzAyLTljZjYtZTczMmUyMzE5ZmZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDg4LFxuICAgICAgNjMsXG4gICAgICAzMCxcbiAgICAgIDE3LFxuICAgICAgMzAsXG4gICAgICAxMDEsXG4gICAgICAxMTMsXG4gICAgICAxNTYsXG4gICAgICAyMTcsXG4gICAgICAxMTIsXG4gICAgICAxMjEsXG4gICAgICAxMTEsXG4gICAgICA3NyxcbiAgICAgIDEwMyxcbiAgICAgIDI0MixcbiAgICAgIDU1LFxuICAgICAgMjE2LFxuICAgICAgMTAsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMjYsXG4gICAgICA5MixcbiAgICAgIDE0NixcbiAgICAgIDQ3LFxuICAgICAgMjIwLFxuICAgICAgMTM5LFxuICAgICAgMTcyLFxuICAgICAgMTM0LFxuICAgICAgODksXG4gICAgICAyMTUsXG4gICAgICA4NyxcbiAgICAgIDE5MyxcbiAgICAgIDEzNSxcbiAgICAgIDIzOCxcbiAgICAgIDE5LFxuICAgICAgNzIsXG4gICAgICAyMzIsXG4gICAgICA3NixcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU1MzFYNjVQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMzA0NzY5NzY6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCYWQgTXVuZGFcIixcbiAgICBcImxpZFwiOiBcIjI3NzY4Mjk1NjgxMjMwMzo1NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPV28xSkFCRVBYSHA3VUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhvM2tkOTU2WGx5Y3RVdGxRM3dRZ3NCNlhDY3JTUUx4c3RLUzJVcEZQaG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidjlubG10ZFMzTWZmMVJtT1JnUFVJNThGYWkvbkN3aXFkY2xOMFI1bzB1bG5zOEZOa0NaSm90WGRVekVWTFFrWWlXMDM2Qys4dXlGbWNaSmdwZk13REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic2ljYkRzMlEySDUreFByL3FqclZOa3kwdVA0U2xQdUltQk9VN2k5RUJwelhxTGJvTkxDN2JBQ21BNFVkcE9nMzhoWW1CUWo2YTdQSnpXNHBVN3JsalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTMwNDc2OTc2OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDA5OTc2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
