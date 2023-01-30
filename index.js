const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

// app.use(morgan('tiny')) 第一小题 3.7
morgan.token('body', function (res) { return JSON.stringify(res.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let data = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423123"
    }
]

app.get('/api/persons', (req, res) => {
    res.json(data)
})

app.get('/info', (req, res) => {
    const body = `
    <p>Phonebook has info for ${data.length} people</p>
    <p>${new Date()}</p>
    `
    res.send(body)
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    // 注意id是一个字符串
    let result = data.find(num => num.id === Number(id))
    if (result) {
        res.json(result)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    data = data.filter(num => num.id !== id)

    res.status(204).end()
})

//为post中的新内容生成id
const generateId = () => {
    //三元表达式将map结果数组转化成单个数字
    const maxId = Math.max(...data.map(num => num.id))
    return Math.floor(Math.random() * 100000) + maxId + 1
}

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name) {
        return res.status(400).json({
            error: 'name missing'      //必须使用return，否则代码会执行到最后
        })
    }

    if (!body.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    }

    const existed = data.find(person => person.name === body.name)

    if (existed) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number || 0
    }

    data = data.concat(person)

    res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})