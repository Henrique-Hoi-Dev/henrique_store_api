const express = require('express');
const router = express.Router();
const ProductController = require('./product_controller');
const validation = require('./product_validation');
const validator = require('../../../../utils/validator');
const { ensureAuthorization, verifyToken } = require('../../../../main/middleware');

const productController = new ProductController();

router.get('/', ensureAuthorization, verifyToken, validator(validation.list), productController.list);
router.get('/:id', ensureAuthorization, verifyToken, validator(validation.getById), productController.getById);
router.post('/', ensureAuthorization, verifyToken, validator(validation.create), productController.create);
router.put('/:id', ensureAuthorization, verifyToken, validator(validation.update), productController.update);
router.delete('/:id', ensureAuthorization, verifyToken, validator(validation.softDelete), productController.softDelete);

module.exports = router;
