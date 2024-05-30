const express = require('express');
const app = express();
const PORT = 8080;

const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.get('/', (req, res) => require("./src/controllers/homeFeed").getHomeWithFeed(req, res));
app.get('/posts/:target', (req, res) => require("./src/controllers/post").getPost(req, res));
app.get('/about', (req, res) => {
	req.target = "about";
	require("./src/controllers/post").getPost(req, res);
});
// posts page
// tags page
app.get('/public/:target', (req, res) => res.sendFile("./public/" + req.params.target, {root: __dirname }));

app.listen(PORT, console.log('Server is running on port: ' + PORT));
