module.exports = (sequelize, Sequelize) => {
    const Inventory = sequelize.define("inventory", {
        productId: {
            type: Sequelize.INTEGER
        },
        count: {
            type: Sequelize.INTEGER
        }
    });

    Inventory.associate = (models) => {
        // associations can be defined here
        authoriseDate.belongsTo(models.Products, { foreignKey: 'id', });
    };

    return Inventory;
};