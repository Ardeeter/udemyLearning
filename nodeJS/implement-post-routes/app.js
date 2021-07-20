const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/movies', (req,res) => {
    res.send('Movies')
})

// {title: "Lord of the Rings", year: 2013}

app.post('/movies', (req,res) => {
    let title = req.body.title;
    let year = req.body.year;
    let revenue = req.body.revenue;
    console.log(title);
    console.log(year);
    console.log(revenue);
    res.send("OK");
})

app.listen(PORT, () => {
    console.log("Listening on Port " + PORT);
})