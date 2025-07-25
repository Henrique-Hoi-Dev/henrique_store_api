const ProductService = require('./product_service');
const BaseController = require('../../base/base_controller');
const HttpStatus = require('http-status');

class ProductController extends BaseController {
    constructor() {
        super();
        this._productService = new ProductService();
    }

    async list(req, res, next) {
        try {
            const { page, limit, origin, integration_source, is_active } = req.query;
            const result = await this._productService.list({ page, limit, origin, integration_source, is_active });
            res.status(HttpStatus.OK).json(this.parseKeysToCamelcase(result));
        } catch (err) {
            next(this.handleError(err));
        }
    }

    async getById(req, res, next) {
        try {
            const product = await this._productService.getById(req.params.id);
            if (!product) return next(this.notFound('PRODUCT_NOT_FOUND'));
            res.status(HttpStatus.OK).json(this.parseKeysToCamelcase(product));
        } catch (err) {
            next(this.handleError(err));
        }
    }

    async create(req, res, next) {
        try {
            const product = await this._productService.create(req.body);
            res.status(HttpStatus.CREATED).json(this.parseKeysToCamelcase(product));
        } catch (err) {
            next(this.handleError(err));
        }
    }

    async update(req, res, next) {
        try {
            const product = await this._productService.update(req.params.id, req.body);
            if (!product) return next(this.notFound('PRODUCT_NOT_FOUND'));
            res.status(HttpStatus.OK).json(this.parseKeysToCamelcase(product));
        } catch (err) {
            next(this.handleError(err));
        }
    }

    async softDelete(req, res, next) {
        try {
            const product = await this._productService.softDelete(req.params.id);
            if (!product) return next(this.notFound('PRODUCT_NOT_FOUND'));
            res.status(HttpStatus.OK).json(this.parseKeysToCamelcase(product));
        } catch (err) {
            next(this.handleError(err));
        }
    }
}

module.exports = ProductController;
