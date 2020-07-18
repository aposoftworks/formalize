export default interface iWhen {
	name? 		: string,
	pathname? 	: string,
	negate?		: boolean,
	when? 		: boolean | ((value : any) => boolean),
	children 	: any,
}
