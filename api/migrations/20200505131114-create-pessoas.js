"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Pessoas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
        validate: {
          funcaoValidadora: function (dado) {
            if (dado.length < 3)
              throw new Error("o campo nome de ter mais de 3 caracteres");
          },
        },
      },
      ativo: {
        type: Sequelize.BOOLEAN,
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "dados do tipo e-mail inválido",
          },
        },
      },
      role: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Pessoas");
  },
};
