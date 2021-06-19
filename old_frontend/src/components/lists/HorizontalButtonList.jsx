import React from 'react';

class HorizontalButtonList extends React.Component {
	constructor(props) {
		super(props);
		this.buttons = props.buttons;
	}
	render() {
		return (
			<ul className='horizButtons'>
				{this.buttons.map((obj) => {
					let result = null;
					switch (obj.type) {
						case 'link':
							result = (
								<a href={obj.href} target='_blank'>
									<li>{obj.text}</li>
								</a>
							);
							break;
						case 'file':
							break;
						default:
							break;
					}
					return result;
				})}
			</ul>
		);
	}
}
export default HorizontalButtonList;
