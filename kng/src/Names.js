import React from "react";
import ItemForm from "./itemForm";

const Names = ({setForm, formData, navigation}) => {
	const {fullName, job, jobToo, pet, memory, memorySh} = formData;


	const {next} = navigation;
	
	return (
		<div className="Form">
			<div className="flav-text">
				<h2>Section 2: Personal Information</h2>
				<p>Kojima‘s characters have names that are directly related to their own character traits. This information will make sure your name fits your personality.</p>
			</div>
			<ItemForm
				label="1. What is your full name?"
				name="fullName" 
				value={fullName}
				onChange={setForm}
		  	/>
		  	<ItemForm
				label="2. What do you do at your occupation?"
				name="job"
				value={job}
				onChange={setForm}
		  	/>
			<ItemForm
				className="side-q"
				label="2a. Condense the verb in your answer into a single -er noun. (e.g. if you are a sheep farmer, your answer will be “Farmer”)"
				name="jobToo"
				value={jobToo}
				onChange={setForm}
			/>
			<ItemForm
				label="3. What was your first pet‘s specific species/breed? If you have never had a pet, please answer with an animal you wish you owned"
				name="pet"
				value={pet}
				onChange={setForm}
		  	/>
			<ItemForm
				label="4. What's your most embarrassing childhood memory? Be specific."
				name="memory"
				value={memory}
				onChange={setForm}
		  	/>
			<ItemForm
				className="side-q"
				label="4a. Condense story into two words."
				name="memorySh"
				value={memorySh}
				onChange={setForm}
			/>
		
			<div>
				<button onClick={next}>Next</button>
			</div>
		</div>
	);
};

export default Names;