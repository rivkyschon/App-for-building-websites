const messagesService = require('../services/messagesService')

module.exports = {

    postMessage: async function (req, res, next) {


        try {
            const data = await messagesService.postMessage(req.body);

            res.json(data);
        }
        catch (err) {
            next(err);
        }


    },

    getUnreadMessages: async function (req, res, next) {

        try {
            const data = await messagesService.getUnreadMessages();
            res.json(data)
        }
        catch (err) {
            next(err);
        }
    },

    updateMessage: async function (req, res, next) {

        try {
            const data = await messagesService.updateMessage(req.body);
            res.json(data)
        }
        catch (err) {
            next(err);
        }
    },

    deleteMessage: async function (req, res, next) {

        try {

            const data = await messagesService.deleteMessage(req.body);
            res.json(data);

        }
        catch (err) {
            next(err);
        }
    }

}