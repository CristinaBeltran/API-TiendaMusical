const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const models = require('./configure-db');

const albumsApi = require("./routes/albums")(models);
app.use("/api/albums",albumsApi);

const artistApi = require("./routes/artists")(models);
app.use("/api/artist",artistApi);

const customersApi = require("./routes/customers")(models);
app.use("/api/customers",customersApi);

const employeesApi = require("./routes/employees")(models);
app.use("/api/employees",employeesApi);

const genresApi = require("./routes/genres")(models);
app.use("/api/genres",genresApi);

const invoicesApi = require("./routes/invoices")(models);
app.use("/api/invoices",invoicesApi);

const invoice_itemsApi = require("./routes/invoice_items")(models);
app.use("/api/invoice_items",invoice_itemsApi);

const media_typesApi = require("./routes/media_types")(models);
app.use("/api/media_types",media_typesApi);

const playlistsApi = require("./routes/playlists")(models);
app.use("/api/playlists",playlistsApi);

const playlist_tracksApi = require("./routes/playlist_tracks")(models);
app.use("/api/playlist_tracks",playlist_tracksApi);

const tracksApi = require("./routes/tracks")(models);
app.use("/api/tracks",tracksApi);

app.set("views", "./views");
app.set("view engine", "pug");

app.all("/", (req, res)=> {
    res.render("index");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});