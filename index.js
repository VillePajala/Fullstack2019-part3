require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('data', (req) => {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))


app.get('/api/persons', (req, res, next) => {
  Person.find({})
    .then(persons => {
      res.json(persons.map(person => person.toJSON()))
  })
  .catch(error => next(error))
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person.toJSON())
      } else {
        res.status(404).end()
      }
      
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body
  console.log(body)
  const person = {
    name: body.name,
    number: body.number,
  }
  console.log(person)
  Person.findByIdAndUpdate(req.params.id, person, { new: true})
    .then(updatedPerson => {
      res.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res) => {
  const body = req.body

  if(body.name === undefined || body.number === undefined) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  } 

  Person.find({})
    .then(persons => {
      const allNames = persons.map(person => person.name)
      if (allNames.includes(body.name)) {
        return res.status(400).json({
          error: 'name must be unique'
        })
      } 

      const person = new Person( {
        name: body.name,
        number: body.number,
      })
  
      person.save().then(savedPerson => {
        res.json(savedPerson.toJSON())
      })
    })
    .catch(error => next(error))
})

app.get('/info', (req, res) => {
  Person.find({})
    .then(persons => {
      const allNames = persons.map(person => person.name)
      res.send(`<div>
              Phonebook has info for ${allNames.length} people <br>
              ${new Date()}
            </div>`)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
