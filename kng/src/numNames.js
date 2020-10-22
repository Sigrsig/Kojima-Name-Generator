import React from "react";
import NameNum from "./Rolls/NameNum";


const NumNamePage = ({setForm, formData, navigation}) => {
	const {test} = formData;

	const {previous, next} = navigation;
	
	
		
	return (
		<div className="Form">
			<div className="flav-text">
				<h2>Section 1: Determining how many names you have</h2>
				<p>Kojima often creates characters that have many alternate names, so we must first figure out how many names you will have.</p>
			</div>
			<div id="conditions">
				<div id="name-cond">
					<h2>Roll a d6 to determine how many names you have:</h2>
					<NameNum />
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

export default NumNamePage;