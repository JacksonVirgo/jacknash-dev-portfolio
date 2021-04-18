import axios from 'axios';
export default axios.create({
	baseURL: `${process.env.SERVER_URL}/api/`,
	responseType: 'json',
});

export async function sendContactEmail(data, response) {
	try {
		const res = await axios.post(`${process.env.SERVER_URL}/api/contact`, data);
		response(res);
	} catch (e) {
		console.log(`Axios Request Failed: ${e}`);
	}
}
