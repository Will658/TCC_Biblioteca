const Sequelize = require('sequelize');
const db = require('./db');

const Hora = db.define('horarios', {
    idHorario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeHorario: {
        type: Sequelize.STRING(15),
        allowNull: false, 
    }
})

module.exports = Hora;