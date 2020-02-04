import { ReactChildren } from "react";

export interface iWrapperProps {
	name 						: string,
	value 						: any,
	setvalue	(newvalue: any) : void,
	children 					: ReactChildren,
	filters? 					: Array<(value : any) => any>,
}
