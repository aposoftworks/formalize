export default interface iValue {
	name? 		: string,
	pathname? 	: string,
	default? 	: any,
	filters? 	: Array<(value : any) => any>,
}
