import React from 'react';

class ColumnList extends React.Component {
	constructor(props) {
		super(props);
		this.columns = props.columns;
		console.log(parseDate('2020-09-01'));
	}
	render() {
		return (
			<div className='listTable'>
				{
					<div className='listRow'>
						{this.columns.map((col, index) => (
							<div className='listColumn' key={index}>
								{col.map((el, i) => (
									<div key={i} className='section'>
										<div className='heading'>{el.position}</div>
										<div>{el.employer}</div>
										<div>
											{parseDate(el.from)} - {parseDate(el.to)}
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				}
			</div>
		);
	}
}
function parseDate(d) {
	if (!d) return 'Current';
	const parsedData = Date.parse(d);
	const date = new Date(parsedData);
	const month = date.toLocaleString('default', { month: 'long' });
	return `${month} ${date.getFullYear()}`;
}
export default ColumnList;
