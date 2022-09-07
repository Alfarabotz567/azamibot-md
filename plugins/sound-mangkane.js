let fetch = require("node-fetch")
let fs = require('fs')
const delay = time => new Promise(res => setTimeout(res, time))
let moment = require('moment-timezone')
async function handler(m, {command}) {
	let res = await fetch(`https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`)
json = await res.buffer()
 conn.sendFile(m.chat, 'https://vio.wtf/uploads/1661398126172-haori.webp', 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: `${ucapan()}`, body: 'Sebentar Yah Kak Lagi Di Proses', sourceUrl: 'https://youtube.com/channel/UCaFh82MyrVgcgIvJxvTA39w', thumbnail: await (await fetch('https://telegra.ph/file/2b669452f7517d2b5097a.jpg')).buffer(),}} 
     })
await delay(1900)
  await conn.sendFile(m.chat, json, 'error.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: false, seconds: 9999999,contextInfo: { 
         externalAdReply: { 
 	     sourceUrl: 'https://youtube.com/channel/UCaFh82MyrVgcgIvJxvTA39w',
           title: '▶︎ ━━━━━━━●────────── ',  
            body: 'Now Playing...', 
           thumbnail: await (await fetch('https://telegra.ph/file/1f8e012df6e4aca2fbd11.jpg')).buffer()
}
     }
    })
 } 
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Good Morning 🌆"
  if (time >= 4) {
    res = "Good Morning 🌄"
  }
  if (time > 10) {
    res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
    res = "Good Evening 🌇"
  }
  if (time >= 18) {
    res = "Good Night 🌃"
  }
  return res
    }
handler.help = ['mangkane1','mangkane2','mangkane3','mangkane4','mangkane5','mangkane6','mangkane7','mangkane8','mangkane9','mangkane10','mangkane11','mangkane12','mangkane13','mangkane14','mangkane15','mangkane16','mangkane17','mangkane18','mangkane19','mangkane20','mangkane21','mangkane22','mangkane23','mangkane24']
handler.tags = ['sound']
handler.command = /^(mangkane1|mangkane2|mangkane3|mangkane4|mangkane5|mangkane6|mangkane7|mangkane8|mangkane9|mangkane10|mangkane11|mangkane12|mangkane13|mangkane14|mangkane15|mangkane16|mangkane17|mangkane18|mangkane19|mangkane20|mangkane21|mangkane22|mangkane23|mangkane24)$/i
handler.owner = false
handler.limit = false
module.exports = handler
