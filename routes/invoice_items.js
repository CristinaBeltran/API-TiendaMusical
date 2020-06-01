const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const invoice_items = await models.invoice_items.findAll({
            attributes: ["ID", "InvoicedID", "TrackID", "UnitPrice", "Quantity"]
        });
        res.send(invoice_items)
    });

    router.post("/", async (req, res)=> {
       const invoice_items = req.body;
       await models.invoice_items.create(invoice_items);
       res.send({ message: "Item successfully added to invoice"});
    });

    return router;
}