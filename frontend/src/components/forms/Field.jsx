import e from 'cors';
import React from 'react';

export default function Field(props) {
	const { child, isHoney } = props;
	let clsName = 'field';
	if (isHoney) clsName = clsName + ' honeyPot';
	else clsName += ' potato';
	return <div className={clsName}>{child}</div>;
}
