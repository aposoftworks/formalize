//Core
import * as React 		from "react";

//Helpers
import dig 				from "../helpers/dig";

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
		let updatedform = {...form};
		updatedform 	= dig(updatedform, position, props.value);

		//Update values
		setForm(updatedform);
	}, [props.value]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (props.children);
}
