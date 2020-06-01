const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class invoices extends Model { }

module.exports = (sequelize)=> invoices.init(
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },  
        InvoiceDate: {
            type: Sequelize.DATE
        },
        BillingAddress:{
            type: Sequelize.STRING
        },
        BillingCity:{
            type: Sequelize.STRING
        }
    },{ sequelize, modelName:'invoices' }
)