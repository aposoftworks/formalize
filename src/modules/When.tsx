//Core
import * as React 		from "react";

//Helpers
import dig 				from "../helpers/dig";

//Contexts
import GroupContext 	from "../contexts/GroupContext";
import FormContext 		from "../contexts/FormContext";

//Interfaces
import iWhen 			from "../interfaces/iWhen";

//Group class
export default function When (props : iWhen) {

	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	//Contexts
	const { form } 				= React.useContext(FormContext);
	const context 				= React.useContext(GroupContext);

	//Constants
	const position 		= context ? (context + "." + props.name):props.name;

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const onCondition = React.useMemo(() => {
		const value 	= dig(form, (props.pathname || position) as string);
		let condition;

		if (props.when)
			condition = props.when instanceof Function ? props.when(value):props.when;
		else
			condition = !!value;

		return !!condition;
	}, [props, form]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	if (onCondition)
		return props.children;
	else
		return null;
}
