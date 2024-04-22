const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<center><h1>Hello  Beanstalk!</h1></center>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
