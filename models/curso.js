const Sequelize = require('sequelize');
const db = require('./db');
const Inst = require('./inst');
const Hora = require('./hora');

const Curso = db.define('cursos', {
    idCurso: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeCurso: {
        type: Sequelize.STRING(90),
        allowNull: false, 
    },
})

Curso.belongsTo(Inst, {
    constraint: true,
    foreignKey: 'idInst'
})

Hora.hasMany(Curso, {
    foreignKey:'idHorario'
})

module.exports = Curso;