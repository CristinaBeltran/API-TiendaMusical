const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const invoices = await models.invoices.findAll({
            attributes: ["ID", "CustomerID","InvoiceDate", "BillingAddress","BillingCity"]
        });
        res.send(invoices)
    });

    router.post("/", async (req, res)=> {
       const invoices = req.body;
       await models.invoices.create(invoices);
       res.send({ message: "Invoices successfully added"});
    });

    router.get("/idCustomer=:id", async (req, res)=> {
        const id = req.params.id;
        models.customers.findByPk(id)
            .then(customers => {
                customers.getInvoices()
                    .then(invoices => {
                        return res.send({invoices})
                    })
            })
    });

    router.get("/invoiceId=:id", async (req, res)=> {
        const id = req.params.id;
        models.invoices.findByPk(id)
            .then(invoices => {
                invoices.getInvoice_items()
                    .then(invoices => {
                        return res.send({invoices})
                    })
            })
    });
    return router;
}