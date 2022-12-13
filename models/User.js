const Sequelize = require('sequelize');
const db = require('./db');
const Hora = require('./hora');
const Inst = require('./inst');
const Curso = require('./curso');

const User = db.define('usuarios', {
    idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeUsuario: {
        type: Sequelize.STRING(40),
        allowNull: false, 
    },
    emailUsuario: {
        type: Sequelize.STRING(40),
        allowNull: false, 
    },
    senhaUsuario: {
        type: Sequelize.STRING(30),
        allowNull: false, 
    },
})

User.belongsTo(Inst, {
    constraint: true,
    foreignKey: 'idInst'
})

User.belongsTo(Curso, {
    constraint: true,
    foreignKey: 'idCurso'
})

User.belongsTo(Hora, {
    constraint: true,
    foreignKey: 'idHorario'
})

module.exports = User;