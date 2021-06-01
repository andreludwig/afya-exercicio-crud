const { Sequelize, Model } = require("sequelize");

class Customer extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      cpf: Sequelize.STRING,
      phone: Sequelize.STRING,
      email: Sequelize.STRING,
    },{
      sequelize
    }
    );
  }
}

module.exports = Customer;