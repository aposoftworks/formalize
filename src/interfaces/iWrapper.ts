import { ReactChildren } from "react";

export interface iWrapperProps {
	name 						: string,
	value 						: any,
	setValue	(newvalue: any) : void,
	children 					: ReactChildren,
	filters? 					: Array<(value : any) => any>,
}
