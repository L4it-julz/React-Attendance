const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./dbConfig');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());


server.get('/', (req,res) => {
    res.send('Welcome to the Todo app server!!!')
});

// inventoryEntry table
server.get(`/:tb`, async (req,res) => {
    // GET all todos
    const tableName = req.params;
    try {
        const todos = await db(tableName);
        res.status(200).json(todos);
    } catch(err) {
        console.log(err);
    }
});

// server.get(`/:tb/:id`, async (req,res) => {
//     // GET todo by id
//     const tableName = req.params.tb;
//     const id = req.params.id;
//     console.log({tableName, id});
//     try {
//         const currentTodo = await db(tableName).where(`${tableName}ID`,id);
//         currentTodo.length === 0 ? res.status(404).json({ message: 'Todo not found'}) : res.status(200).json(currentTodo);
//     } catch(err) {
//         console.log(err)
//     }
// });

// server.get(`/inventory/search/date/:dt`, async (req, res) => {
//     // GET id, branchID, date
//     const dt = req.params.dt;
//     try {
//         const sortByDate = await db('inventoryEntry').where({invdate:dt});
//         console.log(sortByDate)
//         sortByDate.length === 0 ? res.status(404).json({ message: 'date not found'}) : res.status(200).json(sortByDate);
//     } catch(err) {
//         console.log(err)
//     }
// });

server.get(`/inventory/:br/:dt`, async (req, res) => {
    // GET id, branchID, date
    const branch = req.params.br;
    const dt = req.params.dt;
    try {
        const sortByDate = await db('inventoryEntry').where({branchID:branch,invdate:dt});
        sortByDate.length === 0 ? res.status(404).json({ message: 'Todo not found'}) : res.status(200).json(sortByDate);
    } catch(err) {
        console.log(err)
    }
});

// server.get(`/order/:id/:dt`, async (req, res) => {
//     // GET id, branchID, date
//     const id = req.params.id;
//     const dt = req.params.dt;
//     try {
//         const sortByDate = await db('order').where({supplierID:id,dated:dt});
//         sortByDate.length === 0 ? res.status(404).json({ message: 'Order not found'}) : res.status(200).json(sortByDate);
//     } catch(err) {
//         console.log(err)
//     }
// });

server.get(`/order/date/:dt`, async (req, res) => {
    // GET id, branchID, date
    const dt = req.params.dt;
    try {
        const sortByDate = await db('order').where({dated:dt});
        sortByDate.length === 0 ? res.status(404).json({ message: 'Order not found'}) : res.status(200).json(sortByDate);
    } catch(err) {
        console.log(err)
    }
});

server.get(`/orderControl/date/:dt`, async (req, res) => {
    
    const dt = req.params.dt;
    try {
        const sortByDate = await db('orderControl').where({dated:dt});
        sortByDate.length === 0 ? res.status(404).json({ message: 'order Control not found'}) : res.status(200).json(sortByDate);
    } catch(err) {
        console.log(err)
    }
});

server.post(`/:tb`, async (req,res) => {
    // POST a todo
    const tableName = req.params;
    const data = req.body;
    console.log(req.body)
    if (!data) {
        return res.status(400).json({ data: 'You must include a message in your request.' })
    }
    try {
        await db(tableName).insert(data);
        res.status(201).json({ data: 'Todo successfully stored!' });
    } catch(err) {
        console.log(err)
    }
});

server.put(`/:tb/:id`, async (req,res) => {
    // UPDATE a todo
    const tableName = req.params.tb;
    const id = req.params.id;
    const data = req.body;
    console.log(req.body)
    try {
        const currentTodo = await db(tableName).where(`${tableName}ID`,id).update(data);
        res.status(200).json({ message: 'Update successful!' });
    } catch (err) {
        console.log(err)
    }
});

server.delete(`/:tb/:id`, async (req,res) => {
    // DELETE a todo
    const tableName = req.params.tb;
    const id = req.params.id;
    try {
        await db(tableName).where(`${tableName}ID`,id).del();
        res.status(200).json({ message: 'Delete successful!' });
    } catch (err) {
        console.log(err)
    }
});
// ************************************************************** //


module.exports = server;