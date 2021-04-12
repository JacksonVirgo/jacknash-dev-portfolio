import React from 'react';
import HorizontalButtonList from '../lists/HorizontalButtonList';

export default function Main() {
	return (
		<div>
			<h1>Jack Nash</h1>
			<h2>Web Development</h2>
			<br />
			<HorizontalButtonList
				buttons={[
					{ href: '/resume', text: 'Resume [pdf]', type: 'link' },
					{ href: '/history', text: 'Work History', type: 'link' },
					{ href: '/contact', text: 'Contact', type: 'link' },
				]}
			/>
		</div>
	);
}
