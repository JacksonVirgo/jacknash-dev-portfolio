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
}
