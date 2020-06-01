const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class albums extends Model { }

module.exports = (sequelize)=> albums.init(
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },  
        Title: {
            type: Sequelize.STRING
        }
    },{ sequelize, modelName:'albums' }
)