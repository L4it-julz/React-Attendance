const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./dbConfig');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());


server.get('/', (req,res) => {
    res.send(`
    <center>
    <h1>Welcome to the attendance app server!!!</h1>
    <div>
        <p>Developer: Julius Legaspi</p>
        <p>version: 1.0.0</p>
        <p>copyright: 2022</p>
    </div>
    </center>`)
});

// inventoryEntry table
server.get(`/:tb/:password`, async (req,res) => {
    // GET all todos
    const tableName = req.params.tb;
    const password = req.params.password;
    if(password == 'holden'){
        try {
            const todos = await db(tableName);
            res.status(200).json(todos);
        } catch(err) {
            console.log(err);
        }
    } else {
        res.status(404).json({ message: 'Todo not found'});
    }
   
});


// server.get(`/:tb/:id`, async (req,res) => {
//     // GET todo by id
//     const tableName = req.params.tb;
//     const id = req.params.id;
//     console.log({tableName, id});
//     try {
//         const currentTodo = await db(tableName).where(`empID`,id);
//         currentTodo.length === 0 ? res.status(404).json({ message: 'Todo not found'}) : res.status(200).json(currentTodo);
//     } catch(err) {
//         console.log(err)
//     }
// });

server.get(`/Employees/:internal`, async (req,res) => {
    // GET todo by id
    const tableName = 'Employees';
    const id = req.params.internal;
    console.log({tableName, id});
    try {
        const currentTodo = await db(tableName).where(`internalID`,id);
        currentTodo.length === 0 ? res.status(404).json({ message: 'Todo not found'}) : res.status(200).json(currentTodo);
    } catch(err) {
        console.log(err)
    }
});

server.get(`/Attendance/:dated/:id`, async (req,res) => {
    // GET todo by id
    const tableName = 'Attendance'
    const dated = req.params.dated;
    const id = req.params.id;
    console.log({tableName, id});
    try {
        const currentTodo = await db(tableName).where({logDate:dated, empID:id});
        currentTodo.length === 0 ? res.status(404).json({ message: 'Todo not found'}) : res.status(200).json(currentTodo);
    } catch(err) {
        console.log(err)
    }
});

server.post(`/:tb/:password`, async (req,res) => {
    // POST a todo
    const tableName = req.params.tb;
    const password = req.params.password;
    const data = req.body;
   if(password == 'holden'){
    if (!data) {
        return res.status(400).json({ data: 'You must include a message in your request.' })
    }
    try {
        await db(tableName).insert(data);
        res.status(201).json({ data: 'data successfully stored!' });
    } catch(err) {
        console.log(err)
    }
   } else {
    return res.status(400).json({ data: 'cant access, wrong password!' })
   }
    
});



module.exports = server;