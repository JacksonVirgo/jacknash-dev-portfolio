const express = require('express');
const router = express.Router();
const cors = require('cors');

const nodemailer = require('nodemailer');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cors());
router.route('/contact').post((req, res) => {
	const { sender, email, message } = req.body;
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});
	let mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_TARGET,
		subject: 'Website Message',
		text: `${sender} at ${email} sent... \n\n${message}`,
	};
	transporter.sendMail(mailOptions, (err, info) => {
		if (err) console.log(err);
		else console.log(`Email Sent: ${info.response}`);
	});
});
module.exports = router;
