const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const customers = await models.customers.findAll({
            attributes: ["ID", "LastName", "FirstName","Company","Address","City","State","Country"
        ,"PostalCode","Phone","Fax","Email","SupportRepID"]
        });
        res.send(customers)
    });

    router.post("/", async (req, res)=> {
       const customers = req.body;
       await models.customers.create(customers);
       res.send({ message: "Customer successfully added"});
    });

    router.get("/employee=:id", async (req, res)=> {
        const id = req.params.id;
            models.employees.findByPk(id)
            .then(employees => {
                employees.getCustomers()
                    .then(employees => {
                        return res.send({employees})
                    })
            })
    });

    router.get("/:id", async (req, res)=> {
        const id = req.params.id;
        const Customer = await models.customers.findOne({
            attributes: ["ID", "LastName", "FirstName","Company","Address","City","State","Country"
        ,"PostalCode","Phone","Fax","Email","SupportRepID"],
            where: { id: id}
        });

        res.send(Customer);
    });

   /* router.get("/:id/tracks", async (req, res)=> {
        const id = req.params.id;
        models.customers.findByPk(id)
            .then(customers => {
                customers.getInvoices()
                .then(invoices => {
                    invoices.getInvoice_items()
                    .then(invoice_items => {
                        return res.send({invoice_items})
                    })
                })
            })
    });*/ 
    
    return router;
}