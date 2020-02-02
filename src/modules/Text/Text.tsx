//Core
import * as React 		from "react";

//Helpers
import dig 				from "../../helpers/dig";
import filters			from "../../helpers/filters";

//Interface
import { iInputProps }	from "../../interfaces/iInput";

//Contexts
import FormContext 		from "../../contexts/FormContext";
import GroupContext		from "../../contexts/GroupContext";

//Textarea class
export default function Text (props : iInputProps) {
	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	//Contexts
	const [ form, setForm ] 	= React.useContext(FormContext);
    const context				= React.useContext(GroupContext);

    //Consts
	const position 				= context ? (context + "." + props.name):props.name;
    const value                 = dig(form, position) || "";

	//-------------------------------------------------
	// Functions
	//-------------------------------------------------
	const onChange = React.useCallback((node) => {
		//Get raw value
		let _value = filters(node.target.value, props.filters);

		//Check if the user wants to edit it
		if (props.onChange) _value = props.onChange(_value, node);

		//Set it in the context
		let updatedform = {...form};
        updatedform 	= dig(updatedform, position, _value);

		//Update values
		setForm(updatedform);
	}, [form, props.onChange]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------
	return (
		<textarea {...props} value={value} onChange={onChange} />
	);
}
