import React from 'react';

export default class Input extends React.Component {
	constructor(props) {
		super(props);

		this.name = props.name;
		this.label = props.label;
		this.type = props.type;
		this.isHoneyPot = false;

		if (props.accept) this.accept = props.accept;
	}
	generateRender() {
		let input = null;
		let result = null;
		switch (this.type) {
			case 'text':
				input = <input id={this.name} name={this.name} type='text' />;
				break;
			case 'area':
				input = <textarea id={this.name} name={this.name} />;
				break;
			default:
				break;
		}
		if (!input) input = <div>ERROR - Failed to Render Input</div>;
		return (
			<>
				<label htmlFor={this.name}>{this.label}</label>
				{input}
			</>
		);
	}
	render() {
		let rend = this.generateRender();
		if (!rend) rend = <div>ERROR - Failed To Render Field</div>;
		return rend;
	}
}
