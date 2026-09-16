const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (middleware)
app.use(express.json()); // for parsing application/json
app.use(methodOverride('_method')); // for using PATCH or PUT or others
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
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
    comments.push({username, comment, id: uuid() });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
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


