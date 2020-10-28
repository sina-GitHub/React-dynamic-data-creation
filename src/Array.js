import React from 'react';

let jsxElement = (
	<div
		style={{
			width: '200px',
			height: '200px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			margin: '5px',
			border: '2px solid #666',
		}}
	>
		<div>
			<input placeholder="enter time" />
		</div>
		<div>
			<input placeholder="enter time" />
		</div>
		<h1>submit</h1>
	</div>
);

export default function Home() {
	const [generateJSX, setGenerateJSX] = React.useState({
		data: [jsxElement],
	});

	const foo = () => {
		let temp = [...generateJSX.data];
		temp.push(jsxElement);

		setGenerateJSX({data: temp});
	};

	return (
		<div className="array">
			<h1 onClick={foo}>click to generate dynamic JSX</h1>
			{generateJSX.data.map((item, index) => {
				return <div key={'generateJSX-' + index}>{item}</div>;
			})}
		</div>
	);
}
