import fetch from 'node-fetch'
let handler = async (m, { conn, command, args }) => {
if (!args[0]) return conn.reply(m.chat, '*[π] πΈπ½πΆππ΄ππ΄ π»π° πππ» π³π΄ ππ½π° πΏπ°πΆπΈπ½π°*', m)
let link = `https://api.screenshotmachine.com/?key=c04d3a&url=${args[0]}&screenshotmachine.com&dimension=720x720`
conn.sendMessage(m.chat, {image:{url:link}}, {quoted:m})}
handler.help = ['ss', 'ssf'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i
export default handler
