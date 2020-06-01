const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const playlist_tracks = await models.playlist_tracks.findAll({
            attributes: ["IDTrack", "IDPlaylist"]
        });
        res.send(playlist_tracks)
    });

    router.post("/", async (req, res)=> {
       const playlist_tracks = req.body;
       await models.playlist_tracks.create(playlist_tracks);
       res.send({ message: "Track successfully added to playlist"});
    });

    return router;
}