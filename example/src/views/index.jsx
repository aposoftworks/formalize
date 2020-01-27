import * as React from "react";

//Async views import
const bundle = {
	Home: 			React.lazy(() => import("./Home")),
	Start: 			React.lazy(() => import("./Start")),
	Components:		React.lazy(() => import("./Components")),
	Contribution:	React.lazy(() => import("./Contribution")),
	Extending:		React.lazy(() => import("./Extending")),
	NotFound: 		React.lazy(() => import("./NotFound")),
};

export default bundle;
