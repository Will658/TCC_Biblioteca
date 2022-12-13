const Sequelize = require('sequelize');
const db = require('./db');

const Inst = db.define('instituicoes', {
    idInst: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeInst: {
        type: Sequelize.STRING(90),
        allowNull: false, 
    },
    telInst: {
        type: Sequelize.INTEGER(11),
        allowNull: false, 
    },
    endInst: {
        type: Sequelize.STRING(100),
        allowNull: false, 
    },
})

module.exports = Inst;