// Packages
import * as React 		from "react";

// Contexts
import GroupContext 	from "../contexts/GroupContext";

// Interfaces
import { iGroupProps }	from "../interfaces/iGroup";

/** Wraps inputs inside of it */
export default function Group (props : iGroupProps) : any {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// contexts
	const context 		= React.useContext(GroupContext);

	// constants
	const position 		= context ? (context + "." + props.name):props.name;

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<GroupContext.Provider value={position}>
			<div {...props}>
				{props.children}
			</div>
		</GroupContext.Provider>
	);
}
