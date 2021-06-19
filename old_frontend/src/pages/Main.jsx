import React from 'react';
import knightL from '../resources/chessKnight.png';
import knightR from '../resources/chessKnightFlipped.png';

class Main extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className='centerWrapper'>
				<img src={knightL} className='knightL' />
				<img src={knightR} className='knightR' />
				<div className='header'>
					<h1>Jack Nash</h1>
					<h2>Web Developer</h2>
				</div>
				<div className='content'>
					<div className='leftButtons'>
						<div className='interactive'>Projects</div>
						<div className='interactive'>Resume</div>
					</div>
					<div className='rightButtons'>
						<div className='interactive'>Contact</div>
						<div className='interactive'>History</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Main;
