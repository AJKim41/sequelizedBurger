module.exports = (sequelize, DataTypes) => {
  let Burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  /*   Burger.associate = models => {
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  }; */

  return Burger;
};

/* module.exports = (sequelize, DataTypes) => {
  let Customer = sequelize.define("Customer", {
    name: DataTypes.STRING
  });

  Customer.associate = models => {
    Customer.hasMany(models.Burger, {
      onDelete: "cascade"
    });
  };
  return Customer;
};
 */
