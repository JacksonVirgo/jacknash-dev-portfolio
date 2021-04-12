import React from 'react';
import Form from '../forms/Form';
import server from '../../config/server.js';

class Contact extends React.Component {
	onSubmit(e) {
		const { sender, email, message } = e.target;
		const result = JSON.stringify({ sender: sender.value, email: email.value, message: message.value });
		fetch(`${server.url}/api/contact`, {
			method: 'POST',
			body: result,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.status === 'success') console.log('Message Sent');
				else if (res.status === 'fail') console.log('Message Failed to Send');
			});
	}
	render() {
		return (
			<div className='centerPanel'>
				<h1>Contact Me</h1>
				<p>Emails will get a response faster!</p>
				<br />
				<Form
					onSubmit={this.onSubmit.bind(this)}
					submitText='Send Email'
					children={[
						{ name: 'sender', label: 'Sender Name', type: 'text' },
						{ name: 'email', label: 'Your Email', type: 'text' },
						{ name: 'message', label: 'Message', type: 'area' },
					]}
				/>
				<br />
			</div>
		);
	}
}

export default Contact;
