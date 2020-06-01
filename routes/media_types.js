const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const  media_types = await models.media_types.findAll({
            attributes: ["ID", "Name"]
        });
        res.send(media_types)
    });

    router.post("/", async (req, res)=> {
       const media_types = req.body;
       await models.media_types.create(media_types);
       res.send({ message: "Media type successfully added"});
    });

    return router;
}