import React from "react";
import Counter from "./Rolls/ManCond";
import DEight from "./Rolls/CondCond";
import DTwelve from "./Rolls/CloneCond";
import KojimaCond from "./Rolls/KojimaCond";


const NameConditions = ({setForm, formData, navigation}) => {
	const {test} = formData;

	const {previous, next} = navigation;
	
	
		
	return (
		<div className="Form">
			<div className="flav-text">
				<h2>Section 4: Determining Your Name Conditions</h2>
				<p>Sometimes, a character will have a plot-based condition that affects their name. You, too, might have a condition that affects your name. Conditions can stack so please make note of how many your name has.</p>
			</div>
			<div id="conditions">
				<div id="manC">
					<h2>THE -MAN CONDITION: Roll a d4 to determine whether you have this condition</h2>
					<Counter />
				</div>
				<div id="cond-cond">
					<h2>THE CONDITION CONDITION: Roll a d8 to determine what this condition will do to you</h2>
					<DEight />
				</div>
				<div id="clone-cond">
					<h2>THE CLONE CONDITION: Roll a d12 to determine if you have this condition:</h2>
					<DTwelve />
				</div>
				<div>
					<h2>THE KOJIMA CONDITION: Rolld a d100 to determine if you have this condition:</h2>
					<KojimaCond />
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