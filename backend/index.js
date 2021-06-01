const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.use('/api', require('./router'));
app.use('/files', require('./routes/fileRouter'));

app.get('/', (req, res) => {
	app.use(express.static(path.join(__dirname, '..', 'frontend')));
	res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});
app.get('/projects', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'frontend', 'pages', 'projects.html'));
});
app.get('/aboutme', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'frontend', 'pages', 'about.html'));
});
app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'frontend', 'pages', 'contact.html'));
});

require('dotenv').config();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
