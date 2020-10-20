import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Front from "./frontPage"
import Names from "./Names";
import KojimaInfo from "./kojimaInfo";
import NameConditions from "./nameConditions";


const steps = [
	{id: "Front"},
	{id: "Names"},
	{id: "KojimaInfo"},
	{id: "NameConditions"}
];

const defaultData = {

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
		case "NameConditions":
			return <NameConditions {...props}/>;
		default:
			return null;
	} 
	
};

export default MainForm;