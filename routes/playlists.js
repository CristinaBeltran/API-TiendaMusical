const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const playlists = await models.playlists.findAll({
            attributes: ["ID", "Name"]
        });
        res.send(playlists)
    });

    router.post("/", async (req, res)=> {
       const playlists = req.body;
       await models.playlists.create(playlists);
       res.send({ message: "Playlist successfully added"});
    });

  /*  router.get("/track:id", async (req, res)=> {
        const id = req.params.id;
            models.tracks.findByPk(id)
            .then(tracks => {
                tracks.getPlaylists()
                    .then(playlist_tracks => {
                        return res.send({playlist_tracks})
                    })
            })
    });*/

    return router;
}