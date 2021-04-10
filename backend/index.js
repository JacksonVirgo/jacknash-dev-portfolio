const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('cors'));
if (running == 'production') {
	app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
	});
}
server.listen(PORT || 5000, () => {
	console.log(`Server listening on port ${PORT || 5000}`);
});
