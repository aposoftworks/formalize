export default function dig (obj : Object, path : string, value? : any) : Object | any {
    let pList 	= path.split('.');
    let len 	= pList.length;
    let context = obj || {};

    for (let i = 0; i < len-1; i++) {
        let elem = pList[i];

        if( !(elem in context) ) context[elem] = {};

        context = context[elem];
	}

    if (value !== null && value !== undefined) {
    	context[pList[len-1]] = value;
    	return obj;
    }
    else {
    	return context[pList[len-1]] === null ? "":context[pList[len-1]];
    }
}
