const express = require('express');
const router = express.Router();
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cors());
router.route('/contact').post((req, res) => {
	const { sender, email, message } = JSON.parse(JSON.stringify(req.body));
	try {
		let transporter = nodemailer.createTransport({
			host: 'mail.privatemail.com',
			port: 465,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
			dkim: {
				domainName: 'jacknash.dev',
				keySelector: 'default',
				privateKey: process.env.NOREPLY_PK,
			},
		});
		let mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_TARGET,
			subject: 'Website Message',
			text: `${sender} at ${email} sent... \n\n${message}`,
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) res.send({ response: 500, data: err });
			else res.send({ response: 200, data: info.response });
		});
	} catch (e) {
		res.send({ response: 500 });
	}
});
module.exports = router;
