module.exports = app => {
    const Products = require("../controllers/product.js");

    var router = require("express").Router();

    // Retrieve all Tutorials
    router.get("/product", Products.findAll);
    router.get("/checkout", Products.checkOut);
    router.get("/orders/:id", Products.getOrder);

    app.use('/api/', router);
};