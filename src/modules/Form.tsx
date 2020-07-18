// Core
import * as React 		from "react";

// Helpers
import dig 				from "../helpers/dig";

// Contexts
import FormContext 		from "../contexts/FormContext";

// Interfaces
import { iFormProps }	from "../interfaces/iForm";

// Form class
export default function Form (props : iFormProps) {

	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	// states
	const [ errors, seterrors ]	= React.useState({});
	const [ form, setForm ] 	= props.data? props.data:React.useState(props.initialData || {});

	//-------------------------------------------------
	// Effects
	//-------------------------------------------------

	React.useEffect(() => {
		if (props.onChange) props.onChange(form);
	}, [form]);

	React.useEffect(() => {
		if (props.onError) props.onError(errors);
	}, [errors]);

	//-------------------------------------------------
	// Callbacks
	//-------------------------------------------------

	const onProcessSubmit = React.useCallback((event) => {
		// Prevent the page from reloading
		event.preventDefault();

		// Check if the parent wants to know
        if (!("onSubmit" in props)) return;

        // Check if form is carrying a file
        let value;
        if (props.file) {
            value = new FormData();

            for (let field in form) {
                if (form[field]) {
                    value.append(field, form[field]);
                }
            }
        }
        else {
            value = {};

            for (let field in form) {
                if (form[field]) {
                    value[field] = form[field];
                }
            }
        }

		// Get value from the form
		value = props.onSubmit(value);

        // Wait for promise response
        if (value instanceof Promise) {
            value.then(response => {
                if (response === false) setForm({});
            });
        }
		else if (value === false) setForm({});
	}, [form, props]);

	const updateForm = React.useCallback((value, position = "") => {

		// Set it in the context
		let updatedform = {...form};
		updatedform 	= dig(updatedform, position, value);

		// Update values
		setForm(updatedform);
	}, []);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	// extract internal props
	const { file, onChange, onSubmit, children, data, initialData, onError, ...htmlprops } = props;

	return (
		<FormContext.Provider value={{form, seterrors, updateForm}}>
			<form {...htmlprops} encType={(props.file? "multipart/form-data":undefined)} onSubmit={onProcessSubmit}>
				{props.children}
			</form>
		</FormContext.Provider>
	);
}
