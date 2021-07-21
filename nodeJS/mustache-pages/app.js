const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mustacheExpress = require('mustache-express');

const VIEWS_PATH = path.join(__dirname, '/views');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH); 
app.set('view engine', 'mustache');

app.get('/add-user', (req,res) => {
    res.render('add-user')
    
})

app.post('/add-user', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    console.log(name);
    console.log(age);

    res.status(200).send()
})

app.get('/users', (req, res) => {
    
    let users = [
        {name: "John Doe", age: 34},
        {name: "Mary Doe", age: 32},
        {name: "Alex Lowe", age: 27}
    ]

    users = [];

    res.render('users', {users: users})
})

app.get('/', (req, res) => {

    let user = {
        name: "John Doe",
        address: {
            street: "789 Street",
            city: "Houston",
            state: "Texas"
        },

    }
    res.render('index', user);
})

app.listen(PORT, () => {
    console.log("Listening on Port " + PORT);
})
