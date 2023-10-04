const uploadedWebServices = require('../services/uploadedWebService')

module.exports = {

    getWebDesign: async function (req, res, next) {


        const siteId = req.params.siteId;
        try {
            const data = await uploadedWebServices.getWebDesign(siteId);
            res.json(data)

        } catch (err) {
            next(err);
        }
    },

}