//Core
import React from './node/react';

//Router
import { Router, Switch, Route } from 'react-complete-router';

//Views
import Views 	from "./views";
import Home 	from "./views/Home";

//Components
import Dashview 	from "./components/Dashview";

export default function App () {
	return (
		<Router basetitle="Formalize">
			<Switch>
				<Route path="/" to={Home} title="" exact />

				<Dashview>
					<React.Suspense fallback={<h1 className="loading">Loading</h1>}>
						<Switch>
							<Route path="/start"			to={Views.Start} 			title="Start"				/>
							<Route path="/components"		to={Views.Components} 		title="Components"			/>
							<Route path="/contribution"		to={Views.Contribution} 	title="Contribution"		/>
							<Route path="/extending"		to={Views.Extending} 		title="Extending"			/>
							<Route path="/{page}"			to={Views.NotFound} 		title="Not found"			/>
						</Switch>
					</React.Suspense>
				</Dashview>
			</Switch>
		</Router>
	);
}
