export interface iWrapperProps {
	name 						: string,
	value 						: any,
	setValue	(newvalue: any) : void,
	children 					: any,
	filters? 					: Array<(value : any) => any>,
}
