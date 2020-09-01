import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import QrCode from './components/QrCode';

function App() {
	const [codeContent, setCodeContent] = useState(null);

	const HandleInput = e => {
		e.preventDefault();
		setCodeContent(e.target.value);
	}

	return (
		<div className="App">
			<Header title="QR code"/>
			<QrCode content={codeContent}/>
			<input type="text" className="input" onChange={HandleInput}/>
		</div>
	);
}

export default App;
