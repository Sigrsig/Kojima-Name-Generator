import React from "react";

import ItemForm from "./itemForm";

const items = "fdsf";

function getRandomInt() {
  
	alert("worked");
}




const NameConditions = ({setForm, formData, navigation}) => {
	const {test } = formData;

	const {previous, next} = navigation;
	
	
	const manCond = 0;
	const condCond = 0;
	const cloneCond = 0;
	const kojimaCond = 0;
	

	
	return (
		<div className="Form">
			<div className="flav-text">
				<h2>Section 4: Determining Your Name Conditions</h2>
				<p>Sometimes, a character will have a plot-based condition that affects their name. You, too, might have a condition that affects your name. Conditions can stack so please make note of how many your name has.</p>
			</div>
			<div id="conditions">
				<div id="manC">
					<p>THE -MAN CONDITION: Roll a d4 to determine whether you have this condition</p>
				
					<p id="demo">{manCond}</p>
					<button id="manButt" onClick="getElementById('demo').innerHTML = Date()">Click</button>
		
		

		
					
				</div>
			</div>
		  	
		
		
			<div className="buttSelect">
				<div className="prevButt">
					<i class="fas fa-grin-alt"></i>
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

export default NameConditions;