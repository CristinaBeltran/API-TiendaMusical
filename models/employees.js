const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class employees extends Model { }

module.exports = (sequelize)=> employees.init(
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },  
        LastName: {
            type: Sequelize.STRING
        },
        FirstName: {
            type: Sequelize.STRING
        },
        Title: {
            type: Sequelize.STRING
        },
        BirthDate: {
            type: Sequelize.DATE
        },
        HireDate: {
            type: Sequelize.DATE
        },
        Address: {
            type: Sequelize.STRING
        }
    },{ sequelize, modelName:'employees' }
)