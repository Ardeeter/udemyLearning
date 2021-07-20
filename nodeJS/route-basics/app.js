const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello Express!")
})

app.get('/movies', (req, res) => {
    res.send('Movies')
})

// app.get('/movies/year', (req, res) => {
//     res.send('Movies/Year')
// })

// app.get('/movies/comedy/year/1992', (req, res) => {
//     res.send("Comedy Movies")
// })
// app.get('/movies/romance', (req, res) => {
//     res.send("Romance Movies")
// })
// app.get('/movies/action', (req, res) => {
//     res.send("Action Movies")
// })

app.get('/movies/:genre/year/:year', (req, res) => {
    let genre = req.params.genre;
    let year = req.params.year;
    console.log(genre);
    console.log(year);
    res.send("Movies Route")
})

app.listen(PORT, () => {
    console.log("Listening on Port 3000");
})