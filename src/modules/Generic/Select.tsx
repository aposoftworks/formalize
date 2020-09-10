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

/** Select equivalent component */
export default function Select (props : iInputProps) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// contexts
	const { form, updateErrors, updateForm } 	= React.useContext(FormContext);
	const context								= React.useContext(GroupContext);

	// constants
	const position 								= context ? (context + "." + props.name):props.name;

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onChangeField = React.useCallback((node) => {
		// Get raw value
		let localvalue = _filters(node.target.value, props.filters);

		// Check if the user wants to edit it
		if (props.onChange) localvalue = props.onChange(localvalue, node);

		// Update values
		updateForm(localvalue, position);
	}, [form, props.onChange]);

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const value = React.useMemo(() => {
		return dig(form, position);
	}, [form]);

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	// Check if validations passes
	React.useEffect(() => {
		let validation = _validates(dig(form, position) || "", props.validates);
		updateErrors(validation, position);
	}, [form]);

	React.useEffect(() => {
		onChangeField({target:{value}});
	}, []);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	// Remove unnecessary fields
	const { filters, validates, onChange, multiple, ...renderprops } = props;

	return (
		<select {...renderprops} value={value} onChange={onChangeField}>
			{props.children}
		</select>
	);
}
