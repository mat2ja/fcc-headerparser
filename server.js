// server.js
// where your node app starts

require('dotenv').config();
var express = require('express');
var app = express();

const PORT = process.env.PORT || '3001';

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', (req, res) => {
	res.send({ greeting: 'hello API' });
});

const listener = app.listen(PORT, () => {
	console.log(`Your app is listening on port ${listener.address().port}`);
});
