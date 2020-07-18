//Core
import * as React 		from "react";

//Helpers
import dig 				from "../helpers/dig";
import filters 			from "../helpers/filters";

//Contexts
import GroupContext 	from "../contexts/GroupContext";
import FormContext 		from "../contexts/FormContext";

//Interfaces
import iValue 			from "../interfaces/iValue";

//Group class
export default function Value (props : iValue) {

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

	const useValue = React.useMemo(() => {
		const value = props.default === undefined ? "" : props.default;
		return filters(dig(form, (props.pathname || position) as string) || value, props.filters);
	}, [form, props]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return useValue;
}
