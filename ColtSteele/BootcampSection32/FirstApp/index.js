const express = require('express');
const app = express();
const port = 3000;

/* app.use() is a method to register middleware functions in Express. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can execute code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack. */


app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

app.post('/cats', (req, res) => {
  res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT FROM A GET REQUEST!');
});

app.get('/cats', (req, res) => {
  res.send('MEOW!!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('Nothing found if nothing searched.');
  } else {
    res.send(`<h1>Search results for: ${q}</h1>`);
  }
});

app.get('/{*path}', (req, res) => {
  res.send(`I don't know that path!`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// app.use(() => {
//     console.log("We got a new request!");
//     res.send('<h1>This is my webpage!</h1>');
// });