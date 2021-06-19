import React from 'react';

class WorkList extends React.Component {
	constructor(props) {
		super(props);
		this.state = props;
	}
	render() {
		return (
			<div className='project'>
				<img src={this.state.thumbnail} />
				<div className='projectTitle'>{this.state.title}</div>
				<div className='projectDesc'>{this.state.description}</div>
				<div className='projectInfo' onClick={this.state.onClick}>
					More Info
				</div>
			</div>
		);
	}
}

export default WorkList;
