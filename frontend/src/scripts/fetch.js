import axios from 'axios';
import server from '../config/server';
export default axios.create({
	baseURL: `${server.url}/api/`,
	responseType: 'json',
});

export async function sendContactEmail(data, response) {
	try {
		const res = await axios.post(`${server.url}/api/contact`, data);
		response(res);
	} catch (e) {
		console.log(`Axios Request Failed: ${e}`);
	}
	// fetch(`${server.url}/api/contact`, {
	// 	method: 'POST',
	// 	body: data,
	// 	headers: {
	// 		Accept: 'application/json',
	// 		'Content-Type': 'application/json',
	// 	},
	// })
	// 	.then((res) => {
	// 		console.log('#1');
	// 		res.json();
	// 	})
	// 	.then((res) => {
	// 		let returnMessage = null;
	// 		switch (res.status) {
	// 			case 'success':
	// 				returnMessage = 'Message Sent Successfully';
	// 				break;
	// 			case 'fail':
	// 				returnMessage = 'Message Failed';
	// 				break;
	// 			default:
	// 				returnMessage = '[Message Failed]';
	// 				break;
	// 		}
	// 		response(returnMessage);
	// 	});
}
