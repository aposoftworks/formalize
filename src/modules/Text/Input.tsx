//Core
import * as React 		from "react";

//Helpers
import dig 				from "../../helpers/dig";

//Interface
import { iInputProps }	from "../../interfaces/iInput";

//Contexts
import FormContext 		from "../../contexts/FormContext";
import GroupContext		from "../../contexts/GroupContext";

//Input class
export default function Input (props : iInputProps) {
	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	//Contexts
	const [ form, setForm ] 	= React.useContext(FormContext);
	const context				= React.useContext(GroupContext);
	const position 				= context ? (context + "." + props.name):props.name;

	//-------------------------------------------------
	// Functions
	//-------------------------------------------------

	const onChange = React.useCallback((event) => {
		//Get raw value
		let localvalue = event.target.value;

		//Check if the user wants to edit it
		if (props.onChange) localvalue = props.onChange(localvalue);

		//Set it in the context
		let updatedform = {...form};
		updatedform 	= dig(updatedform, position, localvalue);

		//Update values
		setForm(updatedform);
	}, [form, props.onChange]);

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const value = React.useMemo(() => {
		return dig(form, position) || "";
	}, [form]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------
	return (
		<input {...props} value={value} onChange={onChange} />
	);
}
