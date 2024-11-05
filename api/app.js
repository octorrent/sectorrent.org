const express = require('express');
const http = require('http');
const fs = require('fs');

const mainController = require('./controllers/main');

const app = express();

app.set('views', __dirname+'/views');

/*
app.use((req, res, next) => {
	next();
});
*/
const server = http.createServer(app);

server.listen(80, () => {
	console.log(`api.octorrent.org started`);
});


app.get('/', mainController.getHome);