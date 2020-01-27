//Core
import * as React 		from "react";

//Helpers
import dig 				from "../../helpers/dig";

//Interface
import { iInputProps }	from "../../interfaces/iInput";

//Contexts
import FormContext 		from "../../contexts/FormContext";
import GroupContext		from "../../contexts/GroupContext";

//Toggle class
export default function Toggle (props : iInputProps) {
	//-------------------------------------------------
	// Properties
	//-------------------------------------------------
	const [ form, setForm ] = React.useContext(FormContext);
	const context			= React.useContext(GroupContext);
	const position 			= context ? (context + "." + props.name):props.name;
	const finalvalue 		= dig(form, position);

	//-------------------------------------------------
	// Functions
    //-------------------------------------------------

	const onChange = React.useCallback((node) => {
		//Get raw value
		let value = !finalvalue;

		//Check if the user wants to edit it
		if (props.onChange) value = props.onChange(value, node);

		//Set it in the context
		let updatedform = {...form};
		updatedform 	= dig(updatedform, position, value);

		//Update form
		setForm(updatedform);
	}, [form, props]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	const componentvalue = finalvalue === undefined ? !!props.initialValue : finalvalue;

	return (
		<input {...props} type="checkbox" checked={componentvalue} onChange={onChange} />
	);
}
