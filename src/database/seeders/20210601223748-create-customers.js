"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("customers", [
      {
        name: "André",
        cpf: "000.000.000-00",
        phone: "(71) 99999-9999",
        email: "andre@email.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Maria",
        cpf: "000.000.000-00",
        phone: "(71) 99999-9999",
        email: "maria@email.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customers");
  },
};
