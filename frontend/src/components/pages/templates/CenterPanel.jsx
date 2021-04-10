import React from 'react';

class CenterPanel extends React.Component {
	constructor(props) {
		super(props);
		this.child = props.child;
	}
	render() {
		return <div className='centerPanel'>{this.child}</div>;
	}
}
