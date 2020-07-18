export default function validates (value : any, validationlist : ((value : any) => any) | (Array<(value : any) => any>) | undefined) : any {
	let initialvalue = value;

	//List not initialized
	if(validationlist === undefined) return undefined;

	// Check if is list
	if (typeof validationlist !== "object") return validationlist(initialvalue);

	//Loop all the filters
	for (let i = 0; i < validationlist.length; i++) {
		initialvalue = validationlist[i](initialvalue);
	}

	return initialvalue;
}
