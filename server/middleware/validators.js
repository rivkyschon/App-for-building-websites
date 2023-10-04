const Joi = require('joi');

module.exports = {

    createAccountSchema: (req, res, next) => {

        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        });

        const options = {
            abortEarly: false,   
            allowUnknown: true,  
            stripUnknown: true 
        };

        const { error, value } = schema.validate(req.body, options);

        if (error) {

            next(error);

        } else {

            req.body = value;
            next();
        }
    },
    
    postMessageSchema: (req, res, next) => {

        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            subject: Joi.string().required(),
            message: Joi.string().required(),
        });

        const options = {
            abortEarly: false,  
            allowUnknown: true,  
            stripUnknown: true   
        };

        const { error, value } = schema.validate(req.body, options);

        if (error) {

            next(error);
        } 
        else {

            req.body = value;
            next();
        }
    }
}