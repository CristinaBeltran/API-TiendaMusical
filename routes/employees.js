const router = require("express").Router();

module.exports = (models) => {

    router.get("/", async (req, res)=> {
        const employees = await models.employees.findAll({
            attributes: ["ID", "LastName", "FirstName","Title","ReportsTo", "BirthDate",
            "HireDate","Address"]
        });
        res.send(employees)
    });
    
    router.post("//", async (req, res)=> {
       const employees = req.body;
       await models.employees.create(employees);
       res.send({ message: "Employee successfully added"});
    });

   router.put("/:id", async (req, res)=> {
        const id = req.params.id;
            models.employees.findByPk(id)
            .then(employees => {
                employees.update(req.body)
                    .then(employees => {
                        return res.send({employees})
                    })
            }) 
    })

    router.get("/:id", async (req, res)=> {
        const id = req.params.id;
            models.employees.findByPk(id)
            .then(employees => {
                employees.getEmployees()
                    .then(employees => {
                        return res.send({employees})
                    })
            })
    });

    return router;
}