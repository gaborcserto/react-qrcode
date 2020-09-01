import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import QrCode from './components/QrCode';

function App() {
	const [codeContent, setCodeContent] = useState('Text here');

	const handleInputChange = e => {
		e.preventDefault();
		setCodeContent(e.target.value);
	}

	const handleInputReset = e => {
		setCodeContent('');
	}

	return (
		<div className="App">
			<Header title="QR code"/>
			<QrCode content={codeContent}/>
			<form>
				<input
					type="text"
					className="input"
					onChange={handleInputChange}
					value={codeContent}/>
				{codeContent ? <button className="reset" onClick={handleInputReset}>✖</button> : null}
			</form>
		</div>
	);
}

export default App;
