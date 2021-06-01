import React from 'react';
import ColumnList from '../lists/ColumnList';
import workHistory from '../../config/workHistory.js';

function getWorkHistory() {
	const result = [[], []];
	let columnMax = Math.ceil(workHistory.length / 2) - 1;
	for (let i = 0; i < workHistory.length; i++) {
		const index = columnMax >= i ? 0 : 1;
		result[index].push(workHistory[i]);
	}
	return result;
}

export default function WorkHistory() {
	return (
		<div className='centerPanel'>
			<h1>Work History</h1>
			<h2>Web Development</h2>
			<br />
			<ColumnList columns={getWorkHistory()} />
		</div>
	);
}
