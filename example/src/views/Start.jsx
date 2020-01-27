import React from '../node/react';

//Formalize
import { Form, Group, Input, Text }				from "../form";

//Packages
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark }                                 from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Start () {

    //----------------------------
    // Properties
    //----------------------------

	//States
	const [ example, setexample ] = React.useState({});

    //----------------------------
    // Render
	//----------------------------

    return (
        <div className="dashview">
			<h1 className="title mb-4">How to start</h1>

			<p>Formalize is a complete solution for handling forms, so you don't have to waste time taking care of states and such. Just get the data you want, whenever you want, however you want.</p>

            <h3>Installing</h3>

            <h4>NPM</h4>

            <SyntaxHighlighter language="bash" style={dark}>
                npm install formalize --save-dev
            </SyntaxHighlighter>

            <h4>Github</h4>

            <SyntaxHighlighter language="bash" style={dark}>
            npm i git+https://github.com/aposoftworks/formalize.git
            </SyntaxHighlighter>

            <h4>Usage</h4>

			<p>Beyond being able to easily transform your form into a JSON, you can also group data into other objects, keeping your data organized.</p>

            <SyntaxHighlighter language="jsx" style={dark}>
{`import * as React					from 'react';
import { Form, Group, Input, Text } from 'react-complete-router';

export default function App () {
	return (
		<Form onSubmit={(data) => console.log(data)}>
			<Group name="contact">
				<Input name="name" 	placeholder="Your name" 	/>
				<Input name="email" placeholder="Your e-mail" 	/>
			</Group>
			<Text name="message" />
		</Form>
	);
}`}
            </SyntaxHighlighter>

			<h4>Example</h4>

			<div className="row">
				<Form onChange={(data) => {setexample(data)}} className="col-md-6">
					<Group name="contact">
						<div className="form-group">
							<Input name="name" 	placeholder="Your name"		className="form-control" 	/>
						</div>
						<div className="form-group">
							<Input name="email" placeholder="Your e-mail" 	className="form-control"	/>
						</div>
					</Group>
					<div className="form-group">
						<Text name="message" className="form-control" placeholder="A message to us" />
					</div>
				</Form>
				<div className="col-md-6">
					<SyntaxHighlighter language="json" style={dark}>{JSON.stringify(example, null, "\t").toString()}</SyntaxHighlighter>
				</div>
			</div>


        </div>
    );
}
