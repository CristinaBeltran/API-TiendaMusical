const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class tracks extends Model { }

module.exports = (sequelize)=> tracks.init(
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },  
        Name: {
            type: Sequelize.STRING
        },
        Composer:{
            type: Sequelize.STRING
        },
        Milliseconds:{
            type: Sequelize.INTEGER,
        },
        Bytes:{
            type: Sequelize.INTEGER,
        },
        UnitPrice:{
            type: Sequelize.NUMBER,
        }
    },{ sequelize, modelName:'tracks' }
)