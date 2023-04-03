// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()
// Setup Middleware
app.use(express.json())
app.use(cors())


let employees = [
    {
        id: 1,
        firstName: 'Amy',
        lastName: 'Ango',
        gender: 'female',
        age: 21,
    },
    {
        id: 2,
        firstName: 'Becca',
        lastName: 'Baba',
        gender: 'female',
        age: 22,
    },
    {
        id: 3,
        firstName: 'Charlie',
        lastName: 'Dudd',
        gender: 'male',
        age: 23,
    },
    {
        id: 4,
        firstName: 'David',
        lastName: 'King',
        gender: 'male',
        age: 24,
    },
    {
        id: 5,
        firstName: 'Emma',
        lastName: 'Greek',
        gender: 'female',
        age: 25,
    },
]
app.get('/employee', (req, res) => {
       
    res.status(200).send(employees)
}),

app.get('/employees/:name', (req, res) => {
    const { name } = req.params
    const index = employees.findIndex(ee => ee.firstName.toLowerCase() === name)
    res.status(200).send(employees[index])
})

app.get('/employee', (req, res) => {
    const { age } = req.query

    let filtered = employees.filter(ee => {
        return ee.age > age
    })

    res.status(200).send(filtered)
})

let id = 6

app.post('/employee', (req, res) => {
    let newEe = {...req.body, id}
    employees.unshift(newEe)
    res.status(200).send(employees)
    id++
})

// app.put('/employees/:id', updateEmployee),
// app.delete('/employees/:id', deleteEmployee),
// app.post('/users', addUser),

// Start server with app.listen

app.listen(4040, () => console.log('Server running on port 4040'));
