const express = require('express');
const router = express.Router();
const cors = require('cors');
const path = require('path');
const fs = require('fs');

router.route('/resume').get((req, res) => {
	const pdf = path.join(__dirname, '..', '..', 'files', 'resume.pdf');
	fs.readFile(pdf, (err, data) => {
		res.contentType('application/pdf');
		res.send(data);
	});
});

module.exports = router;
