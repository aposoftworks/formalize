export default interface iWhen {
	name? 		: string,
	pathname? 	: string,
	when 		: boolean | ((value : any) => boolean),
	children 	: any,
}
