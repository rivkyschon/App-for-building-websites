const emailValidator = require('email-validator');
const usersServices = require('../services/usersServices')
const Joi = require('joi')
const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')



module.exports = {

    getUsers: async function (req, res, next) {

        try {
            const data = await usersServices.getUsers();
            res.json(data)
        }
        catch (err) {
            next(err);
        }
    },

    validateUser: async function (req, res, next) {

        try {
            const data = await usersServices.validUser(req.body.email, req.body.password)
            if (data)
                res.json(data);
        } catch (err) {
            next(err);
        }
    },

    addUser: async function (req, res, next) {

        try {

            const data = await usersServices.postUser(req.body);
            res.json(data);

        } catch (err) {
            next(err);
        }
    },

    sendPassword: async function (req, res, next) {

        var transporter = nodemailer.createTransport(
            {
                service: 'outlook',
                auth: {
                    user: 'no_reply_create_customized_websites@outlook.co.il',
                    pass: 'RIVKYrivky'
                }
            }
        );

        const handlebarOptions = {
            viewEngine: {
                partialsDir: path.resolve('./views/'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./views/'),
        };

        transporter.use('compile', hbs(handlebarOptions))


        var mailOptions = {
            from: 'no_reply_create_customized_websites@outlook.co.il',
            to: JSON.stringify(req.params.email),
            subject: 'email validation ',
            template: 'email',
            context: {
                email: req.params.email,
                company: 'My Company'
            }
        };


        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });

    },

    reset: async function (req, res, next) {
        console.log('reset')

        try {

            const data = await usersServices.resetPassword(req.body);

            res.json(data);

        } catch (err) {

            next(err);
        }
    }

}
























// console.log("send email");

// var transporter = nodemailer.createTransport({
//     service: 'outlook',
//     auth: {
//         user: 'no_reply_create_customized_websites@outlook.co.il',
//         pass: 'RIVKYrivky'
//     }
// });


// var mailOptions = {
//     from: 'no_reply_create_customized_websites@outlook.co.il',
//     to: 'handesaim.metugbar@outlook.co.il',
//     subject: 'Your validation code is here',
//     text: 'That was easy!',
//     html: '<h1>hi hi</h1>',
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });