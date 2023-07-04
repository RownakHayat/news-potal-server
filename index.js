const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const category = require('./data/category.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('News')
});

app.get('/news-category', (req, res) => {
    res.send(category);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '00') {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(news => news.category_id === id);
        res.send(categoryNews);
    }
});

app.get('/news', (req, res) =>{
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(news => news._id === id);
    res.send(selectedNews);
    console.log(req.params.id);
});


app.listen(port, () => {
    console.log("News protal", port);
});
