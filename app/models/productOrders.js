module.exports = (sequelize, Sequelize) => {
    const productOrders = sequelize.define("productOrders", {
        orderId: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.INTEGER
        },
        count: {
            type: Sequelize.INTEGER
        }
    });

    return productOrders;
};