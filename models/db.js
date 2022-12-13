const Sequelize = require('sequelize');

const sequelize = new Sequelize("portaldoslivros", "root", "usbw", {
    host: "localhost",
    dialect: "mysql",
    port: 3307,
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão do arquivo db de sequelize com o banco de dados bem sucedido!");
}).catch((erro) => {
    console.log("Erro: Conexão do arquivo db de sequelize não foi sucedida com o banco de dados. " + erro);
});

module.exports = sequelize;