export interface iWrapperProps {
	name 						: string,
	value 						: any,
	setValue	(newvalue: any) : void,
	children 					: any,
	filters? 					: (value : any) => any | Array<(value : any) => any>,
	validates? 					: (value : any) => any | Array<(value : any) => any>,
}
