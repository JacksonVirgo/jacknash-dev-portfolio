import React from 'react';
import Field from './Field';
import Input from './Input';
class Form extends React.Component {
	constructor(props) {
		super(props);
		const { onSubmit, children, submitText, doDefault } = props;
		this.doDefault = doDefault ? doDefault : false;
		this.onSubmit = onSubmit;
		this.children = children ? children : [];
		this.submitText = submitText ? submitText : 'Submit Form';
	}
	defaultOnSubmit(e) {
		if (!this.doDefault) e.preventDefault();
		if (this.onSubmit) this.onSubmit(e);
		else console.log('Unhandled Form Submission', e);
	}
	render() {
		return (
			<form onSubmit={this.defaultOnSubmit.bind(this)}>
				{this.children.map((c, i) => {
					return <Field key={c.name} child={<Input name={c.name} label={c.label} type={c.type} />} />;
				})}
				<input type='submit' value={this.submitText} />
			</form>
		);
	}
}
export default Form;
