const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const tracks = await models.tracks.findAll({
            attributes: ["ID","Name","AlbumID","MediaTypeID","GenreID","Composer","Milliseconds","Bytes","UnitPrice"]
        });
        res.send(tracks)
    });

    router.post("/", async (req, res)=> {
       const tracks = req.body;
       await models.tracks.create(tracks);
       res.send({ message: "Track successfully added"});
    });

   /* router.get("/:id", async (req, res)=> {
        const id = req.params.id;
            models.artists.findByPk(id)
            .then(artists => {
                artists.getAlbums()
                    .then(albums => {
                        albums.getTracks()
                            .then(tracks => {
                                return res.send({tracks})
                    })
                })
            })
    });*/
    
    return router;
}