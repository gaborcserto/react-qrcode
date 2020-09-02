import React from 'react';
import './QrCode.scss'
import { QRNormal } from 'react-qrbtf'

const qrCode = ({content}) => {

	return (
		<div className="qr-code" >
			{content ? <QRNormal value={content} otherColor="#000000" posColor="#000000"/> : null }
		</div>
	);
}

export default qrCode;