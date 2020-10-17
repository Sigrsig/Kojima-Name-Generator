import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Front from "./frontPage"
import Names from "./Names";
import KojimaInfo from "./kojimaInfo";

const steps = [
	{id: "Front"},
	{id: "Names"},
	{id: "KojimaInfo"},
];

const defaultData = {
	fullName: "Thomas Edward Yorke",
	job : "--------Video Producer",
	jobToo : "Producer",
	pet: "Fish",
	memory: "filler",
	memorySh: "filler",
	favChar: "Kurt Russel",
	kubrickWord: "Orange",
}

const MainForm = ({images}) => {
	const [formData, setForm] = useForm(defaultData);
  	const { step, navigation } = useStep({ initialStep: 0, steps });
  	const { id } = step;
	const props ={formData, setForm, navigation};
	
	switch (id) {
		case "Front":
			return <Front {...props} />;
		case "Names":
			return <Names {...props} />;
		case "KojimaInfo": 
			return <KojimaInfo {...props} />;
		default:
			return null;
	} 
	
};

export default MainForm;