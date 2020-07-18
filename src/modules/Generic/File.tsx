//Core
import * as React 		from "react";

//Helpers
import _filters			from "../../helpers/filters";
import _validates		from "../../helpers/validates";

//Interface
import { iInputProps }	from "../../interfaces/iInput";

//Contexts
import FormContext 		from "../../contexts/FormContext";
import GroupContext		from "../../contexts/GroupContext";

export default function File (props : iInputProps) {
	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	//Contexts
	const { form , updateErrors, updateForm } 	= React.useContext(FormContext);
	const context				    			= React.useContext(GroupContext);
    const position 				    			= context ? (context + "." + props.name):props.name;

	//-------------------------------------------------
	// Functions
	//-------------------------------------------------

	const onChangeField = React.useCallback(node => {
        //No file uploaded
        if (node.target.files.length == 0) {
			updateForm(null, position);
            return;
        }

        //get value
        let localvalue = props.multiple? node.target.files:node.target.files[0];

		//Check if the user wants to edit it
		if (props.onChange) localvalue = props.onChange(_filters(localvalue, props.filters), node);

		//Check if validations passes
		let validation = _validates(localvalue, props.validates);
		if (validation) {
			updateErrors(validation, position);
			return;
		}

		//Update values
		updateForm(localvalue, position);
	}, [props, form]);

    //-------------------------------------------------
    // Render
    //-------------------------------------------------

	// Remove unnecessary fields
	const { filters, validates, onChange, multiple, ...renderprops } = props;

	return (
        <input type="file" {...renderprops} name={props.name} id={props.name} onChange={onChangeField} />
	);
}
