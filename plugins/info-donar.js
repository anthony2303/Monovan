const handler = async (m, { conn }) => {
    
const message = `
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 PAGAR 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 ${name}*
*┃*
*┃ 👉🏻 𝙰𝚀𝚄𝙸 𝙰𝙻𝙶𝚄𝙽𝙾𝚂 𝙳𝙰𝚃𝙾𝚂*
*┃ 𝙿𝙰𝚁𝙰 𝙿𝙰𝙶𝙰𝚁*
*┃*
*┃ ➤ TARJETA:* 
*┃ n/a*
*┃ ➤ 𝙱𝙰𝙽𝙲𝙾: STP* 
*┃ ➤ 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙰𝚁𝙸𝙾: n/a* 
*┃ ➤ 𝙲𝙾𝙽𝙲𝙴𝙿𝚃𝙾: APOYO O DONACIÓN*  
*┃*
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝙼𝙴 𝚂𝙸 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂*
*┃ 𝙼𝙰𝚂 𝙳𝙰𝚃𝙾𝚂 𝚈 𝙿𝙰𝚁𝙰 𝙰𝙶𝚁𝙰𝙳𝙴𝙲𝙴𝚁𝚃𝙴*
*┃ wa.me/n/a*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*`.trim()
    
conn.sendMessage(m.chat, {text: message}, {quoted: m})    
    
};
handler.command = /^(Pagar)$/i;
export default handler;