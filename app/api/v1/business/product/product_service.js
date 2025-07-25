const Product = require('./product_model');
const BaseService = require('../../base/base_service');

class ProductService extends BaseService {
    constructor() {
        super();
        this._productModel = Product;
    }

    async list({ page = 1, limit = 20, origin, integration_source, is_active }) {
        const where = {};
        if (origin) where.origin = origin;
        if (integration_source) where.integration_source = integration_source;
        if (typeof is_active !== 'undefined') where.is_active = is_active;
        const offset = (page - 1) * limit;
        const { rows, count } = await this._productModel.findAndCountAll({
            where,
            offset,
            limit: parseInt(limit, 10),
            order: [['created_at', 'DESC']]
        });
        return {
            data: rows,
            meta: {
                total: count,
                page: parseInt(page, 10),
                limit: parseInt(limit, 10)
            }
        };
    }

    async getById(id) {
        return this._productModel.findByPk(id);
    }

    async create(data) {
        return this._productModel.create(data);
    }

    async update(id, data) {
        const product = await this._productModel.findByPk(id);
        if (!product) return null;
        await product.update(data);
        return product;
    }

    async softDelete(id) {
        const product = await this._productModel.findByPk(id);
        if (!product) return null;
        await product.update({ is_active: false });
        return product;
    }
}

module.exports = ProductService;
