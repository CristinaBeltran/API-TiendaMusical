const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class invoice_items extends Model { }

module.exports = (sequelize)=> invoice_items.init(
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        UnitPrice: {
            type: Sequelize.NUMBER
        },
        Quantity:{
            type: Sequelize.INTEGER
        }
    },{ sequelize, modelName:'invoice_items' }
)