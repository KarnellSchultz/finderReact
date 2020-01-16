import React from 'react';

type Props = {
	label: string;
	symbol: any;
	size?: string;
};

const Emoji = ({ label, symbol, size = '90px' }: Props) => (
	<>
		<span
			style={{ fontSize: size }}
			className="emoji"
			role="img"
			aria-label={label ? label : ''}
			aria-hidden={label ? 'false' : 'true'}>
			{symbol}&nbsp;
		</span>
		<p>{label}</p>
	</>
);

export default Emoji;

// const folderStyles = {
// 	fontSize: '90px',
// };
