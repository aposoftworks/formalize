import { ReactChildren } from "react";

export interface iWrapperProps {
	name 		: string,
	value 		: any,
	children 	: ReactChildren,
	filters? 	: Array<(value : any) => any>,
}
