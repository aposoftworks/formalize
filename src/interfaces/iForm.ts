export interface iFormProps {
	data? 						: [Object, (value : Object) => void],
	initialData? 				: Object,
	file?						: boolean,
	onError?					: (value : any) => void,
	onChange? (value : Object) 	: Object | boolean,
	onSubmit (value : Object) 	: Promise<boolean> | boolean,
  	children 					: any,

  	[ index : string ]			: any,
}

export interface iFormContext {
	data 						: Object,
	callback ( data : Object) 	: void,
}
