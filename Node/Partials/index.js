const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (middleware)
app.use(express.json()); // for parsing application/json
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: 2,
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: 3,
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: 4,
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

/* Make files inside public accessible to the browser */
app.use(express.static(path.join(__dirname, "public")));

/* routes */

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment});
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/show', { comment });
});

app.get('/', (req, res) => {
    res.render('home', {title: 'Home'});
});

app.get('/photos', (req, res) => {
    res.render('photos', {title: 'Photos'})
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/tacos', (req, res) => {
    // res.render('tacos', {title: 'Tacos'});
    res.send("GET /tacos response");
});

app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body;
    console.log(req.body);
    res.send(`OK, here are your ${qty} ${meat} tacos.`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});


