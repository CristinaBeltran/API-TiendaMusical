const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const artists = await models.artists.findAll({
            attributes: ["ID", "Name"]
        });
        res.send(artists)
    });

    router.post("/", async (req, res)=> {
       const artists = req.body;
       await models.artists.create(artists);
       res.send({ message: "Artist successfully added"});
    });

    return router;
}