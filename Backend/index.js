const express = require('express');
const cors = require('cors');

const UserRouter = require('./routers/UserRouter');

//initializing express
const app = express();
const port = 5000;

//middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use( express.json() );
app.use( '/user', UserRouter );

//routes or endpoints
app.get('/', (req, res) => {
    res.send('Response from express');
});

app.get('/add', (req, res) => {
    res.send('Response from add');
});

app.get('/getall', (req, res) => {
    res.send('Response from getall');
});

app.get('/update', (req, res) => {
    res.send('Response from update');
});

app.listen ( port, () => { console.log(" Server Started");})