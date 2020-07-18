export interface iInputProps {
	name 										: string,
	onChange? (localvalue: any, node : Object) 	: any,
	filters? 									: (value : any) => any | Array<(value : any) => any>,
	validates?									: (value : any) => any | Array<(value : any) => any>,
	children? 									: any,
	multiple? 									: boolean,

	[ index : string ]							: any,
}
