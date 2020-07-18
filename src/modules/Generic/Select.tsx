//Core
import * as React 		from "react";

//Helpers
import dig 				from "../../helpers/dig";
import _filters			from "../../helpers/filters";
import _validates		from "../../helpers/validates";

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
	const { form, updateErrors, updateForm } 	= React.useContext(FormContext);
	const context								= React.useContext(GroupContext);
	const position 								= context ? (context + "." + props.name):props.name;

	//-------------------------------------------------
	// Functions
	//-------------------------------------------------

	const onChangeField = React.useCallback((node) => {
		//Get raw value
		let localvalue = _filters(node.target.value, props.filters);

		//Check if validations passes
		let validation = _validates(localvalue, props.validates);
		if (validation) {
			updateErrors(validation, position);
			return;
		}

		//Check if the user wants to edit it
		if (props.onChange) localvalue = props.onChange(localvalue, node);

		//Update values
		updateForm(localvalue, position);
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

	// Remove unnecessary fields
	const { filters, validates, onChange, multiple, ...renderprops } = props;

	return (
		<select {...renderprops} value={value} onChange={onChangeField}>
			{props.children}
		</select>
	);
}
