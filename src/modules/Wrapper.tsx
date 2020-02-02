//Core
import * as React 		from "react";

//Helpers
import dig 				from "../helpers/dig";
import filters 			from "../helpers/filters";

//Interfaces
import { iWrapperProps }	from "../interfaces/iWrapper";

//Contexts
import FormContext 		from "../contexts/FormContext";
import GroupContext		from "../contexts/GroupContext";

//Wrapper helps you give functionality to any component
export default function Wrapper (props : iWrapperProps) {

	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	//contexts
	const [ form, setForm ] 	= React.useContext(FormContext);
	const context				= React.useContext(GroupContext);
	const position 				= context ? (context + "." + props.name):props.name;

	//-------------------------------------------------
	// Effects
	//-------------------------------------------------

	React.useEffect(() => {
		//Set it in the context
		let updatedform 	= {...form};
		let updatedvalue	= filters(props.value, props.filters);
		updatedform 		= dig(updatedform, position, updatedvalue);

		//Update values
		setForm(updatedform);
	}, [props.value]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (props.children);
}
