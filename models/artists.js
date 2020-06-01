const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class artists extends Model { }

module.exports = (sequelize)=> artists.init(
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },  
        Name: {
            type: Sequelize.STRING
        }
    },{ sequelize, modelName:'artists' }
)