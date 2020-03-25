export default interface iWhen {
	name? 		: string,
	pathname? 	: string,
	when 		: (value : any) => boolean,
	children 	: any,
}
