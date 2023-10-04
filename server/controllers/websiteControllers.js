
const WebsiteServices = require('../services/websiteService.js');
const fs = require('fs');




module.exports = {


    createWebsite: async function (req, res, next) {

        try {
            const data = await WebsiteServices.createWebsite(req.body, req.params.id);
            res.json(data)

        }
        catch (err) {
            next(err);
        }

    },


    storeData: async function (req, res, next) {

        let style = req.body[0];
        console.log("array length  " + style.length);
        for (let i = 0; i < style.length; i++) {
            console.log("in for");
            try {
                await WebsiteServices.storeWebsiteStyle(style[i], req.params.site_id, i);
            }
            catch (err) {

                next(err);
            }
        }
        res.json({ "message": "ok" });
    },

    storeImage: async function (req, res, next) {

        req.files.map(async (item, i) => {

            try {
                await WebsiteServices.storeImage(req.params.site_id, item.filename, i + 1)
            }
            catch (err) {
                next(err);
            }
        })

    },

    showImage: async function (req, res) {

        const dir = await WebsiteServices.GetImageURL(req.params.site_id, req.params.image_id);

        if (dir[0] && dir[0].src) {
            fs.createReadStream(dir[0].src).pipe(res);
        }

    },

    updateData: async function (req, res, next) {

        let style = req.body[0];

        for (let i = 0; i < style.length; i++) {

            try {
                await WebsiteServices.updateWebsiteStyle(style[i], req.params.site_id);
                res.json({ "message": "ok" });
            }
            catch (err) {
                next(err);
            }
        }

    },

    getWebsites: async function (req, res, next) {

        try {
            const data = await WebsiteServices.getWebsites(req.params.user_id);
            res.json(data)

        }
        catch (err) {
            next(err);
        }

    }
}