import React from 'react';
import Form from '../forms/Form';
import server from '../../config/server.js';
import { sendContactEmail } from '../../scripts/fetch';

class Contact extends React.Component {
	state = {
		progress: '',
	};
	onSubmit(e) {
		const { sender, email, message, pot } = e.target;
		const data = { sender: sender.value, email: email.value, message: message.value };
		if (!pot.value) {
			sendContactEmail(data, this.contactResponse.bind(this));
		} else {
			this.setState({ progress: 'Form Data Invalid' });
		}
	}
	contactResponse(e) {
		const { data } = e;
		if (data.response === 200) {
			this.setState({ progress: 'Message Sent!' });
		} else if (data.response === 500) {
			this.setState({ progress: 'Message Failed!' });
			console.log(data.data);
		}
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
						{ name: 'pot', label: 'HoneyPot', type: 'text', isHoney: true },
					]}
				/>
				<span>{this.state.progress}</span>
			</div>
		);
	}
}

export default Contact;
