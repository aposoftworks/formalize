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
export default function Select (props : iInputProps) {
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

	const onChange = React.useCallback((node) => {
		//Get raw value
		let localvalue = node.target.value;

		//Check if the user wants to edit it
		if (props.onChange) localvalue = props.onChange(localvalue, node);

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
		return dig(form, position);
	}, [form]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<select {...props} value={value} onChange={onChange}>
			{props.children}
		</select>
	);
}
