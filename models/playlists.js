const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class playlists extends Model { }

module.exports = (sequelize)=> playlists.init(
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },  
        Name: {
            type: Sequelize.STRING
        }
    },{ sequelize, modelName:'playlists' }
)