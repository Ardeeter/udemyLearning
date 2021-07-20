const express = require('express');
const app = express();
const PORT = 3000;

app.get('/movies', (req, res) => {

    let movies = [
        { title: "Lord of the Rings", year: 2014 },
        { title: "Superman", year: 2018 },
        { title: "Black Sheet", year: 1997 }
    ]

    // let movie = { title: "Lord of the Rings", year: 2014}
     
    res.json(movies)
})

app.listen(PORT, () => {
    console.log("Listening on Port " + PORT);
})