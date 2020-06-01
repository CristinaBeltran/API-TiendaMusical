const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const albums = await models.albums.findAll({
            attributes: ["ID", "Title"]
        });
        res.send(albums)
    });

    router.post("/", async (req, res)=> {
       const albums = req.body;
       await models.albums.create(albums);
       res.send({ message: "Album successfully added"});
    });

    router.get("/artistId=:id", async (req, res)=> {
        const id = req.params.id;
        models.artists.findByPk(id)
            .then(artists => {
                artists.getAlbums()
                    .then(albums => {
                        return res.send({albums})
                    })
            })
    });

    return router;
}