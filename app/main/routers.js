const productRouter = require('../api/v1/business/product/product_router');

const addRouters = (router) => {
    router.route('/health').get((req, res) => {
        res.setHeader('csrf-token', req.csrfToken());
        return res.status(200).send();
    });

    router.use('/product', productRouter);

    return router;
};

module.exports = addRouters;
