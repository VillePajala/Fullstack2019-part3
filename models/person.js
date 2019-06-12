const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const url = process.env.MONGODB_URI

console.log('connecting...')

mongoose.connect(url, {useNewUrlParser:true })
  .then(result => {
    console.log('connected to MongDB')
  })
  .catch((error)=> {
    console.log('error connecting to MongoDB')
  })

  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  })

  personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('Person', personSchema)