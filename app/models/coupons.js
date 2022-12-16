module.exports = (sequelize, Sequelize) => {
    const Coupons = sequelize.define("coupons", {
        code: {
            type: Sequelize.STRING
        },
        discountPercent: {
            type: Sequelize.INTEGER
        }
    });

    return Coupons;
};