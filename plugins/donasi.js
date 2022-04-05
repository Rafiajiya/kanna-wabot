let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 088233481992
│┝‷✧ *Dana:* 088233481992
│┝‷✧ *Linkaja:* 
│┝‷✧ *Gopay:* 
│┝‷✧ *Ovo:* 
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│ wa.me/62882007331744?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
