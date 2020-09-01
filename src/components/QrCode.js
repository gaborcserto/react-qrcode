import React from 'react';
import './QrCode.scss'
import { applyPolyfills, defineCustomElements } from '@deckdeckgo/qrcode/dist/loader';

applyPolyfills().then(() => {
	defineCustomElements(window);
});

const qrCode = ({content}) => {

	return (
		<div className="qr-code" >
			{content ?
			<deckgo-qrcode content={content}>
				<img slot="logo" src="../logo.svg" alt=""/>
			</deckgo-qrcode>
				: null }

		</div>

	);
}

export default qrCode;