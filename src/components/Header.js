import React from 'react';
import './Header.scss';
const header = ({title}) => {
	return (
		<header className="header">
			<h1 data-text={title}>{title}</h1>
		</header>
	)
}

export default header;