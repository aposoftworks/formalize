//Core
import * as React 		from "react";

//Interfaces
import { iInputProps } from "../interfaces/iInput";

//Contexts
import FormContext 		from "../contexts/FormContext";
import GroupContext		from "../contexts/GroupContext";

//Displays an error message when it matches
export default function Error (props : iInputProps) {

	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	//contexts
	const { errors } 	= React.useContext(FormContext);
	const context		= React.useContext(GroupContext);
	const position		= context ? (context + "." + props.name):props.name;

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	if (errors[position])
		return errors[position];
	else
		return null;
}
