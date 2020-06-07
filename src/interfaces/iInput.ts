export interface iInputProps {
	name 										: string,
	onChange? (localvalue: any, node : Object) 	: any,
	filters? 									: Array<(value : any) => any>,
	children? 									: any,
	multiple? 									: boolean,

	[ index : string ]							: any,
}
