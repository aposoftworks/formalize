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
	const [ form ] 				= React.useContext(FormContext);
	const context 				= React.useContext(GroupContext);

	//Constants
	const position 		= context ? (context + "." + props.name):props.name;

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const onCondition = React.useMemo(() => {
		const value 	= dig(form, (props.pathname || position) as string);
		const condition = props.when(value);

		return !!condition;
	}, []);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	if (onCondition)
		return props.children;
	else
		return null;
}
