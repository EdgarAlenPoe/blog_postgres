const express = require('express');
const app = express();
const PORT = 8080;

const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.get('/', (req, res) => res.send('<h1>Hello Express</h1>'));
app.get('/public/:target', (req, res) => res.sendFile("./public/" + req.params.target, {root: __dirname }));
app.get('/handle', (req, res) => res.render('example.handlebars', { doesWhat: "test"}));

app.listen(PORT, console.log('Server is running on port: ' + PORT));
