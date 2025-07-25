const { Joi } = require('express-validation');

module.exports = {
    create: {
        body: Joi.object({
            name: Joi.string().required(),
            description: Joi.string().allow(null, ''),
            price: Joi.number().precision(2).required(),
            stock: Joi.number().integer().optional(),
            sku: Joi.string().required(),
            image_url: Joi.string().uri().allow(null, ''),
            is_active: Joi.boolean().optional(),
            origin: Joi.string().valid('MANUAL', 'DROPSHIPPING').required(),
            integration_source: Joi.string().allow(null, ''),
            external_id: Joi.string().allow(null, '')
        })
    },
    update: {
        params: Joi.object({
            id: Joi.string().uuid().required()
        }),
        body: Joi.object({
            name: Joi.string().optional(),
            description: Joi.string().allow(null, ''),
            price: Joi.number().precision(2).optional(),
            stock: Joi.number().integer().optional(),
            sku: Joi.string().optional(),
            image_url: Joi.string().uri().allow(null, ''),
            is_active: Joi.boolean().optional(),
            origin: Joi.string().valid('MANUAL', 'DROPSHIPPING').optional(),
            integration_source: Joi.string().allow(null, ''),
            external_id: Joi.string().allow(null, '')
        })
    },
    softDelete: {
        params: Joi.object({
            id: Joi.string().uuid().required()
        })
    },
    getById: {
        params: Joi.object({
            id: Joi.string().uuid().required()
        })
    },
    list: {
        query: Joi.object({
            page: Joi.number().integer().optional(),
            limit: Joi.number().integer().optional(),
            origin: Joi.string().valid('MANUAL', 'DROPSHIPPING').optional(),
            integration_source: Joi.string().allow(null, ''),
            is_active: Joi.boolean().optional()
        })
    }
};
