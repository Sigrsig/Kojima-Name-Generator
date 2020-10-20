import React from "react";
import ItemForm from "./itemForm";

const Names = ({setForm, formData, navigation}) => {
	const {fullName, job, jobToo, pet, memory, memorySh, stabbed, goodAt, carrots, intFear, tanFear, prior, bodyShape, matterSt, soundsLike, zodiak, personality} = formData;


	const {next} = navigation;
	
	return (
		<div className="Form">
			<div className="flav-text">
				<h2>Section 2: Personal Information</h2>
				<p>Kojima‘s characters have names that are directly related to their own character traits. This information will make sure your name fits your personality.</p>
			</div>
			<ItemForm
				className="item"
				label="1. What is your full name?"
				name="fullName" 
				value={fullName}
				onChange={setForm}
				placeholder="Thomas Edward Yorke"
		  	/>
		  	<ItemForm
				className="item"
				label="2. What do you do at your occupation?"
				name="job"
				value={job}
				onChange={setForm}
				placeholder="Polygon.com Video Producer"
		  	/>
			<ItemForm
				className="item sideItem"
				label="2a. Condense the verb in your answer into a single -er noun. (e.g. if you are a sheep farmer, your answer will be “Farmer”)"
				name="jobToo"
				value={jobToo}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="3. What was your first pet‘s specific species/breed? If you have never had a pet, please answer with an animal you wish you owned"
				name="pet"
				value={pet}
				onChange={setForm}
				placeholder=""
		  	/>
			<ItemForm
				className="item"
				label="4. What's your most embarrassing childhood memory? Be specific."
				name="memory"
				value={memory}
				onChange={setForm}
				placeholder=""
		  	/>
			<ItemForm
				className="item sideItem"
				label="4a. Condense story into two words."
				name="memorySh"
				value={memorySh}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="5. What is the object you'd least like to be stabbed by?"
				name="stabbed"
				value={stabbed}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="6. What is something you are good at?"
				name="goodAt"
				value={goodAt}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="7. How many carrots do you believe you could eat in one sitting, if someone,like, forced you to eat as many carrots as possible?"
				name="carrots"
				value={carrots}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="8. What is your greatest intangible fear? (e.g. death, loneliness, fear itself)"
				name="intFear"
				value={intFear}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="9. What is your greatest tangible fear? (e.g. horses)"
				name="tanFear"
				value={tanFear}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="10. What is the last thing you did before starting this worksheet?"
				name="prior"
				value={prior}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="11. What condition is your body currently in? (single word answer)"
				name="bodyShape"
				value={bodyShape}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="12. Favorite state of matter?"
				name="matterSt"
				value={matterSt}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="13. A word your name sounds like? (e.g. Brian -> Brain)"
				name="soundsLike"
				value={soundsLike}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="14. What is your Zodiac sign?"
				name="zodiak"
				value={zodiak}
				onChange={setForm}
				placeholder=""
			/>
			<ItemForm
				className="item"
				label="15. If you had to define your personality in one word, what would it be?"
				name="personality"
				value={personality}
				onChange={setForm}
				placeholder=""
			/>
			
			
		
		
			<div className="buttSelect">
				<div className="nextButt">
					<i className="fas fa-heart"></i>
					<button className="nextB" onClick={next}>Next</button>
				</div>
			</div>
			
		</div>
	);
};

export default Names;