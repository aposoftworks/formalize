export default interface iValue {
	name? 		: string,
	pathname? 	: string,
	default? 	: any,
	filters? 	: (value : any) => any | Array<(value : any) => any>,
}
