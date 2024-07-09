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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349018001569";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_57_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MyxcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU2LFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQzLFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NixcbiAgICAgICAgODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInFLSGxnMWo0bldXZGYrZ21abTdkOTdaNngvSldRaUdpRy9OSnluTC92T0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImQwWV95UDEtVG91cVlRNEloenJYSGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzBmNTFjYTktNWMwYy00NTk0LWJlYzMtNTFmNzhiMGI4MGI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgNDgsXG4gICAgICA4MCxcbiAgICAgIDEzMyxcbiAgICAgIDEwNyxcbiAgICAgIDI0OSxcbiAgICAgIDYzLFxuICAgICAgNDQsXG4gICAgICAxMjAsXG4gICAgICA4OSxcbiAgICAgIDExMyxcbiAgICAgIDE3MyxcbiAgICAgIDEyNCxcbiAgICAgIDY5LFxuICAgICAgMixcbiAgICAgIDI0MCxcbiAgICAgIDExMixcbiAgICAgIDI3LFxuICAgICAgODgsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgMjE3LFxuICAgICAgMTMxLFxuICAgICAgMTgzLFxuICAgICAgMjcsXG4gICAgICAxNzcsXG4gICAgICA0OCxcbiAgICAgIDExMyxcbiAgICAgIDIxMyxcbiAgICAgIDEyNixcbiAgICAgIDI1MCxcbiAgICAgIDkyLFxuICAgICAgMjM5LFxuICAgICAgMTMwLFxuICAgICAgMTQ5LFxuICAgICAgMTQwLFxuICAgICAgMzIsXG4gICAgICAzMSxcbiAgICAgIDE0NixcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIzNzlFWFExXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE4MDAxNTY5Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNzE5NzQzNjY4MzQ0Ojc3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xUd2wrSURFS1dzdHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2tvWVZiaXkxKytTMHZqUzlYeGN3UlpqdXRwMFlQYk5mbEI5NFFVaE1CTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqYzJGYm0xQWkrZXdrYVp6bDFlUEJZb0wvcUVLQTQva3ppQUk0Skl0akN0L0hzVUkvVFFaOHdjZUNMNTZ4bzhWTTJHa0dXZEhmL0pyTXZ1bDFxVmVEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5SU5xeGhjWGhpM0p1RHJVbWhzamRmMHBmQm9sMlVGZHdJbU8vS1VjNWIvcm5yczNqWjdQdjJIRnNyRC9VdDdIYkRjMXpNR01hUUdWdThGOHhpTFdCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE4MDAxNTY5Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1NTUwNDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
