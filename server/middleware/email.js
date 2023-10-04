const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

module.exports = {

    reply: async function (req, res, next) {

        var transporter = nodemailer.createTransport(
            {
                service: 'outlook',
                auth: {
                    user: 'handesaim.metugbar@outlook.co.il',
                    pass: 'ShiraShraga'
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
            from: 'handesaim.metugbar@outlook.co.il', 
            to: JSON.stringify(req.body.email), 
            subject: req.body.msg_subject,
            template: 'reply', 
            context: {
                name: req.body.name, 
                reply: req.body.message 
            }
        }

        transporter.sendMail(mailOptions, function (error, info) {

            if (error) {
      
                next(error);
            }
            next()
        });

    }
}