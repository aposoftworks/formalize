// Packages
import * as React 		from "react";

// Helpers
import dig 				from "../../helpers/dig";
import _filters			from "../../helpers/filters";
import _validates		from "../../helpers/validates";

// Interface
import { iInputProps }	from "../../interfaces/iInput";

// Contexts
import FormContext 		from "../../contexts/FormContext";
import GroupContext		from "../../contexts/GroupContext";

/** Textarea equivalent component */
export default function Text (props : iInputProps) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// contexts
	const { form, updateErrors, updateForm } 	= React.useContext(FormContext);
    const context								= React.useContext(GroupContext);

    // constants
	const position 				= context ? (context + "." + props.name):props.name;
    const value                 = dig(form, position) || "";

	// -------------------------------------------------
	// Functions
	// -------------------------------------------------
	const onChangeField = React.useCallback((node) => {
		// Get raw value
		let _value = _filters(node.target.value, props.filters);

		// Check if validations passes
		let validation = _validates(_value, props.validates);
		if (validation) updateErrors(validation, position);

		// Check if the user wants to edit it
		if (props.onChange) _value = props.onChange(_value, node);

		// Update values
		updateForm(_value, position);
	}, [form, props.onChange]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	// Remove unnecessary fields
	const { filters, validates, onChange, multiple, ...renderprops } = props;

	return (
		<textarea {...renderprops} value={value} onChange={onChangeField} />
	);
}
