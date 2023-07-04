const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const category = require('./data/caregory.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('News')
});

app.get('/news-category', (req, res) =>{
    res.send(category);
})
app.listen(port, ()=>{
    console.log("Nes protal", port);
});
