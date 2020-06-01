const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const genres = await models.genres.findAll({
            attributes: ["ID", "Name"]
        });
        res.send(genres)
    });

    router.post("/", async (req, res)=> {
       const genres = req.body;
       await models.genres.create(genres);
       res.send({ message: "Genre successfully added"});
    });

    return router;
}