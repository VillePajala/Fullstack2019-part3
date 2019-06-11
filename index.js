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


app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons.map(person => person.toJSON()))
  })
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then(person => {
    res.json(person.toJSON())
  })
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body

  if(body.name === undefined || body.number === undefined) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  } 

  Person.find({}).then(persons => {
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
})

app.get('/info', (req, res) => {
  res.send(`<div>
              Phonebook has info for ${persons.length} people <br>
              ${new Date()}
            </div>`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
