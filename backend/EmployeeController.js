const { connect } = require('./EmployeeRepository')
const employeeModel = require('./EmployeeSchema')

connect() 

const getAll = () => {
  return employeeModel.find((error, employee) => {
    return employee
  })
}


const add = (employee) => {
  const newEmployee = new employeeModel(employee)
  return newEmployee.save()
}


const remove = (id) => {
  return employeeModel.findByIdAndDelete(id)
}


module.exports = {
  getAll,
  add,
  remove
}