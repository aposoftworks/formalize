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

export default function File (props : iInputProps) {
	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	//Contexts
	const [ form, setForm ] 	    = React.useContext(FormContext);
	const context				    = React.useContext(GroupContext);
    const position 				    = context ? (context + "." + props.name):props.name;

	//-------------------------------------------------
	// Functions
	//-------------------------------------------------

	const onChange = React.useCallback(node => {
        //No file uploaded
        if (node.target.files.length == 0) {
            let updatedform = {...form};
            updatedform 	= dig(updatedform, position, null);

            //Update values
            setForm(updatedform);

            return;
        }

        //get value
        let localvalue = props.multiple? node.target.files:node.target.files[0];

		//Check if the user wants to edit it
		if (props.onChange) localvalue = props.onChange(filters(localvalue, props.filters), node);

		//Set it in the context
		let updatedform = {...form};
		updatedform 	= dig(updatedform, position, localvalue);

		//Update values
		setForm(updatedform);
	}, [props, form]);

    //-------------------------------------------------
    // Render
    //-------------------------------------------------

	return (
        <input type="file" {...props} name={props.name} id={props.name} onChange={onChange} />
	);
}
