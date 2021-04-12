require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use('/api', require('./router'));

if (process.env.running == 'production') {
	app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
	});
}
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
