import { ReactChildren } from "react";

export interface iInputProps {
	name 										: string,
	onChange? (localvalue: any, node : Object) 	: any,
	filters? 									: Array<(value : any) => any>,
	children? 									: ReactChildren,
	multiple? 									: boolean,

	[ index : string ]							: any,
}
