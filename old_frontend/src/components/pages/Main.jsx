import React from 'react';
import HorizontalButtonList from '../lists/HorizontalButtonList';
import server from '../../config/server';
export default function Main() {
	return (
		<div>
			<h1>Jack Nash</h1>
			<h2>Web Development</h2>
			<p>Site Under Heavy Development</p>
			<br />
			<HorizontalButtonList
				buttons={[
					{ href: `${server.url}/files/resume`, text: 'Resume [pdf]', type: 'link' },
					{ href: '/history', text: 'Work History', type: 'link' },
					{ href: '/contact', text: 'Contact', type: 'link' },
				]}
			/>
		</div>
	);
}
