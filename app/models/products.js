module.exports = (sequelize, Sequelize, DataTypes) => {
  const Products = sequelize.define("products", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    priceInRs: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  });

  // Products.associate = (models) => {
  //   // associations can be defined here
  //   user.hasOne(models.Inventory, {
  //     foreignKey: 'productId'
  //   });
  // };

  return Products;
};