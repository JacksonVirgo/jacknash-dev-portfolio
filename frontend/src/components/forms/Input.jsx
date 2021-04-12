import React from 'react';

export default class Input extends React.Component {
	constructor(props) {
		super(props);
		this.name = props.name;
		this.label = props.label;
		this.type = props.type;

		if (props.accept) this.accept = props.accept;
	}
	generateRender() {
		let result = null;
		switch (this.type) {
			case 'text':
				result = <input id={this.name} name={this.name} type='text' />;
				break;
			case 'area':
				result = <textarea id={this.name} name={this.name} />;
				break;
			default:
				break;
		}
		if (!result) result = <div>ERROR - Failed to Render Input</div>;

		return (
			<>
				<label htmlFor={this.name}>{this.label}</label>
				{result}
			</>
		);
	}
	render() {
		let rend = this.generateRender();
		if (!rend) rend = <div>ERROR - Failed To Render Field</div>;
		return rend;
	}
}
