const express = require('express')
const app = express()

let persons = [
    {
        name : "Arto Hellas",
        number : "040-123456",
        id: 1
    },
    {
        name : "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name : "Dan Abramov",
        number: "12-43-234354",
        id: 3
    },
    {
        name: "Mary Poppindick",
        number: "39-123-98812",
        id: 4
    }
]

app.use(express.json())

app.get("/",(request, response) => {
    response.send("<h1>Phonebook Backend</h1>")
})

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

app.get("/info", (request, response) => {
    const now = new Date()
    const infoString = `Phonebook has info for ${persons.length} people.`
    
    response.send(`<p>${infoString}</p><p>${now.toString()}</p>`)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
