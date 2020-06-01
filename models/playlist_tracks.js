const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class playlist_tracks extends Model { }

module.exports = (sequelize)=> playlist_tracks.init({
    IDTrack:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    IDPlaylist:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    }
},
    { sequelize, modelName:'playlist_tracks' }
)