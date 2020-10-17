import React from "react";
import ItemForm from "./itemForm";

const KojimaInfo = ({setForm, formData, navigation}) => {
	const {favChar, kubrickWord} = formData;


	const {previous, next} = navigation;
	
	return (
		<div className="Form">
			<ItemForm
				label="Fav Character"
				name="favChar"
				value={favChar}
				onChange={setForm}
		  	/>
		  	<ItemForm
				label="Kubrick Word"
				name="kubrickWord"
				value={kubrickWord}
				onChange={setForm}
		  	/>
			<div>
				<button onClick={previous}>Previous</button>
				<button onClick={next}>Next</button>
			</div>
		</div>
	);
};

export default KojimaInfo;