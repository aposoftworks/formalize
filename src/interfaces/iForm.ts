import { ReactChildren } from "react";

export interface iFormProps {
	data 						: [Object, (value : Object) => void],
	initialdata 				: Object,
	file						: boolean,
	onSubmit (value : Object) 	: Promise<boolean> | boolean,
	children 					: ReactChildren,
}

export interface iFormContext {
	data 						: Object,
	callback ( data : Object) 	: void,
}
