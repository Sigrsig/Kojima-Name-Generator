import React from "react";

const Front = ({navigation}) => {
	


	const {next} = navigation;
	
	return (
		<div className="Form">
			<h2>Welcome to the wonderful world of Kojima names</h2>
			<div>
				<button onClick={next}>Next</button>
			</div>
		</div>
	);
};

export default Front;