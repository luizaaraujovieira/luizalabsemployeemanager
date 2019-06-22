const mongoose = require("mongoose")

var Schema = mongoose.Schema;
var EmployeeSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    email: { type: String, required: true  }, 
    department: {type: String, required: true }
})

const employeeModel = mongoose.model("employee", EmployeeSchema)

module.exports = employeeModel