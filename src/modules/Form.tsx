//Core
import * as React 		from "react";

//Contexts
import FormContext 		from "../contexts/FormContext";

//Interfaces
import { iFormProps }	from "../interfaces/iForm";

//Form class
export default function Form (props : iFormProps) {

	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	//states
	const [ form, setForm ] = props.data? props.data:React.useState(props.initialdata || {});

	//-------------------------------------------------
	// Effects
	//-------------------------------------------------

	React.useEffect(() => {
		if (props.onChange) props.onChange(form);
	}, [form]);

	//-------------------------------------------------
	// Functions
	//-------------------------------------------------

	const onProcessSubmit = React.useCallback((event) => {
		//Prevent the page from reloading
		event.preventDefault();

		//Check if the parent wants to know
        if (!("onSubmit" in props)) return;

        //Check if form is carrying a file
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

		//Get value from the form
		value = props.onSubmit(value);

        //Wait for promise response
        if (value instanceof Promise) {
            value.then(response => {
                if (response === false) setForm({});
            });
        }
		else if (value === false) setForm({});
	}, [form, props]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	//extract internal props
	const { file, onChange, onSubmit, children, ...htmlprops } = props;

	return (
		<FormContext.Provider value={[form, setForm]}>
			<form {...htmlprops} encType={(props.file? "multipart/form-data":undefined)} onSubmit={onProcessSubmit}>
				{props.children}
			</form>
		</FormContext.Provider>
	);
}
