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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_59_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICA4NixcbiAgICAgICAgMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMSxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDMzLFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxLFxuICAgICAgICA3LFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDksXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM5LFxuICAgICAgICA3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwdUNkNUk3WmY4aVJNMDB0bUd1T0NvWXBYTVppMHhoR3Z2L0lmMWQybWk0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIM19yaGVOMFJGaWNEVWxuMFNuLWJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZlMTYxYTEwLWZiYmItNDNhMi1iMjU3LWIxYzAzOTU2YjFkNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDcsXG4gICAgICAyMSxcbiAgICAgIDMxLFxuICAgICAgMTE0LFxuICAgICAgMjM3LFxuICAgICAgMjM0LFxuICAgICAgMTE5LFxuICAgICAgMTQ0LFxuICAgICAgMTAzLFxuICAgICAgMTMsXG4gICAgICAxNjksXG4gICAgICAxMixcbiAgICAgIDMxLFxuICAgICAgMjM4LFxuICAgICAgMTY1LFxuICAgICAgMTU0LFxuICAgICAgMjAzLFxuICAgICAgMSxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDI2LFxuICAgICAgMjA5LFxuICAgICAgMTQ2LFxuICAgICAgMjUyLFxuICAgICAgMjAyLFxuICAgICAgMTIyLFxuICAgICAgMTEzLFxuICAgICAgMTc0LFxuICAgICAgMTM4LFxuICAgICAgNjMsXG4gICAgICAyNTAsXG4gICAgICAyMjgsXG4gICAgICAxMDksXG4gICAgICAxNixcbiAgICAgIDQ2LFxuICAgICAgMTA0LFxuICAgICAgMjIsXG4gICAgICAzMSxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVBOUU2Sks5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMzA0NzY5NzY6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCYWQgTXVuZGFcIixcbiAgICBcImxpZFwiOiBcIjI3NzY4Mjk1NjgxMjMwMzo1OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPV28xSkFCRUtLR3FiVUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhvM2tkOTU2WGx5Y3RVdGxRM3dRZ3NCNlhDY3JTUUx4c3RLUzJVcEZQaG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWHJOWjJyZHViYUt5UDZXQjZRNEM1YmJnaEVseTFlZWVxNzZicHFOdEVjZmRnZDZyNWRUR1hkMDA3K2VFc25laTlDU0svdklHTEFIREdCeURiSGw4RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYVVWS21hRzNNT284L29ZeTY5SktqSFpLUHRjbTlsM2ZRSkxLUUZIQ3NtQ2tLZFJJbHVaY2hrZEFxeWxYUHFCd2M1ZG1YeGk0S3d6RTNyVUNoK3B6akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTMwNDc2OTc2OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDM0MzQxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
