const LOCAL_URL = 'http://localhost:5000';

const getServerURL = () => {
	const { hostname, protocol } = window.location;
	let result = '';
	if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
		result = LOCAL_URL;
	} else {
		result = `${protocol}//${hostname}`;
	}
	console.log('Server URL:', result);
	return result;
};
export default {
	url: getServerURL(),
};
