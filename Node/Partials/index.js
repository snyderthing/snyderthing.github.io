const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

/* Make files inside public accessible to the browser */
app.use(express.static(path.join(__dirname, "public")));

/* routes */

app.get('/', (req, res) => {
    res.render('home', {title: 'Home'});
});

app.get('/photos', (req, res) => {
    res.render('photos', {title: 'Photos'})
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});