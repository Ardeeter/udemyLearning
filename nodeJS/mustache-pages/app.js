const express = require('express');
const app = express();
const PORT = 3000;
const mustacheExpress = require('mustache-express');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

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