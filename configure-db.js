const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

sequelize.authenticate()
    .then(()=> {
        console.log("Conexión a la base de datos establecida");
    })
    .error((error)=> {
        console.error(error);
    });

const albums = require("./models/albums")(sequelize);
const artists = require("./models/artists")(sequelize);
const customers = require("./models/customers")(sequelize);
const employees = require("./models/employees")(sequelize);
const genres = require("./models/genres")(sequelize);
const invoices = require("./models/invoices")(sequelize);
const invoice_items = require("./models/invoice_items")(sequelize);
const media_types = require("./models/media_types")(sequelize);
const playlists = require("./models/playlists")(sequelize);
const playlist_tracks = require("./models/playlist_tracks")(sequelize);
const tracks = require("./models/tracks")(sequelize);

artists.hasMany(albums, { foreignKey: 'ArtistID', as: 'Albums'})
albums.hasMany(tracks, { foreignKey: 'AlbumID', as: 'Tracks'})
customers.hasMany(invoices, { foreignKey: 'CustomerID', as: 'Invoices'})
employees.hasMany(employees, { foreignKey: 'ReportsTo', as: 'Employees'})
employees.hasMany(customers, { foreignKey: 'SupportRepID', as: 'Customers'})
genres.hasMany(tracks, { foreignKey: 'GenreID', as: 'Tracks'})
invoices.hasMany(invoice_items, { foreignKey: 'InvoicedID', as: 'Invoice_items'})
media_types.hasMany(tracks, { foreignKey: 'MediaTypeID', as: 'Tracks'})
tracks.hasMany(invoice_items, { foreignKey: 'TrackID', as: 'Invoice_items'})

playlists.belongsToMany(tracks, { as: 'playlist_track', through: 'Playlist_tracks', foreignKey: 'IDTrack' })
tracks.belongsToMany(playlists, { as: 'playlist_track', through: 'playlist_Tracks', foreignKey: 'IDPlaylist' })

sequelize.sync({force:false});

module.exports = {
    artists,albums,customers,employees,genres,invoices,invoice_items,media_types,playlists,playlist_tracks,tracks
}