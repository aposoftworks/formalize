//Core
import * as React 		from "react";

//Helpers
import filters			from "../../helpers/filters";
import validates		from "../../helpers/validates";

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

	const onChange = React.useCallback(node => {
        //No file uploaded
        if (node.target.files.length == 0) {
			updateForm(null, position);
            return;
        }

        //get value
        let localvalue = props.multiple? node.target.files:node.target.files[0];

		//Check if validations passes
		let validation = validates(localvalue, props.validates);
		if (validation) {
			updateErrors(validation, position);
			return;
		}

		//Check if the user wants to edit it
		if (props.onChange) localvalue = props.onChange(filters(localvalue, props.filters), node);

		//Update values
		updateForm(localvalue, position);
	}, [props, form]);

    //-------------------------------------------------
    // Render
    //-------------------------------------------------

	return (
        <input type="file" {...props} name={props.name} id={props.name} onChange={onChange} />
	);
}
