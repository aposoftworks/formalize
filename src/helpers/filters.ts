export default function filters (value : any, filterslist : ((value : any) => any) | (Array<(value : any) => any>) | undefined) : any {
	let initialvalue = value;

	// List not initialized
	if(filterslist === undefined) return initialvalue;

	// Check if is list
	if (typeof filterslist !== "object") return filterslist(initialvalue);

	// Loop all the filters
	for (let i = 0; i < filterslist.length; i++) {
		initialvalue = filterslist[i](initialvalue);
	}

	return initialvalue;
}
