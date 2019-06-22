const mongoose = require('mongoose')


const MONGO_URL = "mongodb+srv://luizalabs:admin@cluster0-omznt.mongodb.net/test?retryWrites=true&w=majority"

function connect (){


  mongoose.connect(MONGO_URL,
  {useNewUrlParser: true},
  function (error){
    if (error){
      console.log('ERROR: ', error)
    }else{
      console.log('------Database is connected.------')
    }
  }
  );


}

module.exports = { connect }