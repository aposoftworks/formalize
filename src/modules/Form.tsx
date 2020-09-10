// Packages
import * as React 		from "react";

// Helpers
import dig 				from "../helpers/dig";

// Contexts
import FormContext 		from "../contexts/FormContext";

// Interfaces
import { iFormProps }	from "../interfaces/iForm";

/** Required parent of any other form component */
export default function Form (props : iFormProps) {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [ form, setForm ] 					= props.data? props.data:React.useState(props.initialData || {});
	const [ errors, seterrors ]					= React.useState({});
	const [ displayerrors, setdisplayerrors ]	= React.useState({});

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	React.useEffect(() => {
		if (props.onChange) props.onChange(form);
	}, [form, props.onChange]);

	React.useEffect(() => {
		if (props.onError) props.onError(errors);
	}, [displayerrors, props.onError]);

	React.useEffect(() => {
		if (props.validateOnChange) setdisplayerrors(errors);
	}, [errors, props.validateOnChange]);

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onProcessSubmit = React.useCallback((event) => {
		// Prevent the page from reloading
		event.preventDefault();

		// Check if the parent wants to know
		if (!("onSubmit" in props)) return;

		// Check if there is any error
		if (Object.keys(errors).length !== 0) {
			setdisplayerrors(errors);
			return;
		}

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
	}, [form]);

	const updateErrors = React.useCallback((error, node) => {
		// Update values
		seterrors((errors) => {
			// Set it in the context
			let updatederrors 	= {...errors};

			if (error !== undefined)
				updatederrors[node] = error;
			else
				delete updatederrors[node];

			return updatederrors;
		});
	}, [errors]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	// extract internal props
	const { file, onChange, onSubmit, children, data, initialData, onError, ...htmlprops } = props;

	return (
		<FormContext.Provider value={{form, updateErrors, updateForm, errors:displayerrors}}>
			<form {...htmlprops} encType={(props.file? "multipart/form-data":undefined)} onSubmit={onProcessSubmit}>
				{props.children}
			</form>
		</FormContext.Provider>
	);
}
