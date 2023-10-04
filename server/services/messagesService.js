const db = require('./dbService');

async function postMessage(msg) {
    const data = await db.query(`INSERT INTO buildportfolio.messages VALUES(default,default,${JSON.stringify(msg.name)}, ${JSON.stringify(msg.email)},  ${JSON.stringify(msg.message)}, ${JSON.stringify(msg.subject)}, default)`)
    return data;
}

async function getUnreadMessages() {
    const data = await db.query(`select*from buildportfolio.messages where answer=0 order by msg_date`)
    return data;
}

async function updateMessage(msg) {
    const data = await db.query(`UPDATE  messages SET answer=true WHERE msg_id = ${msg.msg_id}`)
    return data;
}

async function deleteMessage(msg) {
    const data = await db.query(`DELETE FROM buildportfolio.messages WHERE msg_id=${msg.msg_id}`)
    return data;
}

module.exports = {
    postMessage,
    getUnreadMessages,
    updateMessage,
    deleteMessage
}