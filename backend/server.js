const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./EmployeeController')

const server = express()
server.use(cors())
server.use(bodyParser.json())

server.get('/employee', (request, response) => {
  controller.getAll()
    .then(employee => response.send(employee))
})

server.post('/employee', (request, response) => {
  controller.add(request.body)
    .then(employee => {
      const _id = employee._id
      response.send(_id)
    })
    .catch(error => {
      if (error.name === "ValidationError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

server.delete('/employee/:id', (request, response) => {
  controller.remove(request.params.id)
    .then(employee => {
      if(employee === null || employee === undefined){
      response.sendStatus(404)
      } else {
        response.sendStatus(204)
      } 
    })
    .catch(error => {
      if (error.name === "CastError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

server.listen(8000)
console.log("------Server is working------")
console.log("PORT : http://localhost:8000/employee/")