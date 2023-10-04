const db = require('./dbService');

async function getWebDesign(siteId) {
    const elements = await db.query(`select * from buildportfolio.elements e where e.site_id = ${siteId};`);
    return elements;
}

module.exports = {
    getWebDesign
}