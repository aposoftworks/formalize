export default function validates (value : any, validationlist : ((value : any) => any) | (Array<(value : any) => any>) | undefined) : any {
	let initialvalue = undefined;

	// List not initialized
	if(validationlist === undefined) return undefined;

	// Check if is list
	if (typeof validationlist !== "object") return validationlist(value);

	// Loop all the filters
	for (let i = 0; i < validationlist.length; i++) {
		initialvalue = validationlist[i](value);
	}

	return initialvalue;
}
