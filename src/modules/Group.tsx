//Core
import * as React 		from "react";

//Contexts
import GroupContext 	from "../contexts/GroupContext";

//Interfaces
import { iGroupProps }	from "../interfaces/iGroup";

//Group class
export default function Group (props : iGroupProps) : any {

	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	const context 		= React.useContext(GroupContext);
	const position 		= context ? (context + "." + props.name):props.name;

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<GroupContext.Provider value={position}>
			<div {...props}>
				{props.children}
			</div>
		</GroupContext.Provider>
	);
}
