const express = require('express');
const app = express();
const port = 3000;

/* app.use() is a method to register middleware functions in Express. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can execute code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack. */
app.use(() => {
    console.log("We got a new request!");
})

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});