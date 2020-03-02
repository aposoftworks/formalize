import { ReactChildren } from "react";

export interface iFormProps {
	data 						: [Object, (value : Object) => void],
	initialdata? 				: Object,
	file?						: boolean,
	onChange? (value : Object) 	: Object | boolean,
	onSubmit (value : Object) 	: Promise<boolean> | boolean,
  	children 					: ReactChildren,

  	[ index : string ]			: any,
}

export interface iFormContext {
	data 						: Object,
	callback ( data : Object) 	: void,
}
