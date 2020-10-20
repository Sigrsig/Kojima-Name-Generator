import React from "react";

const Front = ({navigation}) => {
	


	const {previous, next} = navigation;
	
	return (
		<div className="Form">
			<h2>Welcome to the wonderful world of Kojima names</h2>
			<div className="buttSelect">
				<div className="prevButt">
					<i className="fas fa-grin-alt"></i>
					<button className="prevB" onClick={previous}>Previous</button>
				</div>
				<div className="nextButt">
					<i className="fas fa-heart"></i>
					<button className="nextB" onClick={next}>Next</button>
				</div>
			</div>
		</div>
	);
};

export default Front;