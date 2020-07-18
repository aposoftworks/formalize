//Core
import * as React 		from "react";

//Helpers
import dig 				from "../helpers/dig";
import filters 			from "../helpers/filters";
import validates		from "../helpers/validates";

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
	const { form, updateForm, updateErrors } 	= React.useContext(FormContext);
	const context								= React.useContext(GroupContext);
	const position 								= context ? (context + "." + props.name):props.name;

	//-------------------------------------------------
	// Effects
	//-------------------------------------------------

	//On boot
	React.useEffect(() => {
		const val = dig(form, position);

		if (val && val !== props.value) props.setValue(val);
	}, [form]);

	React.useEffect(() => {
		//Compare values
		if (dig(form, position) == props.value) return;

		//Set it in the context
		let updatedvalue = filters(props.value, props.filters);

		//Check if validations passes
		let validation = validates(updatedvalue, props.validates);
		if (validation) {
			updateErrors(validation, position);
			return;
		}

		//Update values
		updateForm(updatedvalue, position);
	}, [props.value]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (props.children);
}
