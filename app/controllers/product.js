const db = require("../models");
const Products = db.products;
const ProductOrders = db.productOrders
const Inventory = db.inventory
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

    let limit = req.query.limit ? Number(req.query.limit) : 20
    let offset = req.query.offset ? Number(req.query.offset) : 0

    Products.findAll({
            limit: limit,
            offset: offset
            // include: [{
            //     model: Inventory,
            //     where: {
            //         productId: Products.id
            //     },
            //     required: false

            // }]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err, 'err');

            res.status(500).send({
                message: err.message || "Error occurred while retrieving products."
            });
        });

};

exports.checkOut = (req, res) => {

    let payload = req.body
    const products = payload.products

    let productId = []
    products.map((data) => {
        productId.push(data.productId)
    })

    Products.findAll({
            where: {
                id: productId
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while retrieving products."
            });
        });
};

exports.getOrder = (req, res) => {

    let orderId = req.params.id

    ProductOrders.findAll({
        where: {
            id: orderId
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving products."
        });
    });


}