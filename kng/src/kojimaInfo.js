import React from "react";
import ItemForm from "./itemForm";

const KojimaInfo = ({setForm, formData, navigation}) => {
	const {favChar, kubrickWord, joyD, npr, mads, oneMads} = formData;


	const {previous, next} = navigation;
	
	return (		
		<div className="Form">
			<h2>Section 3: Kojima Information</h2>
			<p>Kojima character names reflect his own idiosyncrasies. He can‘t help himself.</p>
		
			<ItemForm
				className="item"
				label="16. Who is your favorite film character? (NOTE: must be played by Kurt Russel)"
				name="favChar"
				value={favChar}
				onChange={setForm}
				placeholder=""
		  	/>
		  	<ItemForm
				className="item"
				label="17. What is the last word of the title of your favorite Kubrick film?"
				name="kubrickWord"
				value={kubrickWord}
				onChange={setForm}
				placeholder=""
		  	/>
			<ItemForm
				className="item"
				label="18. What is the first word in the title of your avorite Joy Division album?"
				name="joyD"
				value={joyD}
				onChange={setForm}
				placeholder=""
		  	/>
			<ItemForm
				className="item"
				label="19 What is a scientific term you picked up from listening to NPR once?"
				name="npr"
				value={npr}
				onChange={setForm}
				placeholder=""
		  	/>
			<ItemForm
				className="item"
				label="10. What is a piece of military hardware you think looks cool even though war is bad?"
				name="kubrickWord"
				value={kubrickWord}
				onChange={setForm}
				placeholder=""
		  	/>
			<ItemForm
				className="item"
				label="21. What is something you'd enjoy watching Mads Mikkelsen do??"
				name="mads"
				value={mads}
				onChange={setForm}
				placeholder=""
		  	/>
			<ItemForm
				className="item"
				label="21a. Please condense into one word."
				name="oneMads"
				value={oneMads}
				onChange={setForm}
				placeholder=""
		  	/>
		
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

export default KojimaInfo;