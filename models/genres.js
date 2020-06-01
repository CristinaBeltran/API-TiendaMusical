const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class genres extends Model { }

module.exports = (sequelize)=> genres.init(
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },  
        Name: {
            type: Sequelize.STRING
        }
    },{ sequelize, modelName:'genres' }
)