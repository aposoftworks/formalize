import React from '../node/react';

//Formalize
import { Form }				from "../form";

//Packages
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark }                                 from 'react-syntax-highlighter/dist/esm/styles/prism';

//Components
import CustomSelect 	from "../components/CustomSelect";

export default function Extending () {

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
			<h1 className="title mb-4">Extending</h1>

			<p>Formalize gives you the option to build your own custom input, enabling you to use third party packages to handle those, such as react-select. We will show you how you could do that.</p>

            <h3>Installing</h3>

            <p>First thing, you should have react-select installed.</p>

            <SyntaxHighlighter language="bash" style={dark}>
                npm install react-select --save-dev
            </SyntaxHighlighter>

            <h4>Usage</h4>

			<p>Now let's wrap it's select into our form.</p>

            <SyntaxHighlighter language="jsx" style={dark}>
{`import React 	from '../node/react';

//Packages
import ReactSelect	from "react-select";

//Formalize
import { Wrapper }	from "../form";

export default function CustomSelect ({name, isMulti, onChange, className, children, ...props}) {

	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	//contexts
	const [ value, setvalue ] = React.useState({});

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className={className}>
			<Wrapper value={value} name={name}>
				<ReactSelect
					value={value}
					options={children}
					onChange={setvalue}
					isMulti={isMulti}
					{...props}
				/>
			</Wrapper>
		</div>
	);
}
`}
            </SyntaxHighlighter>

			<h4>Example</h4>

			<div className="row">
				<div className="col-md-6">
					<p>This is the core of the framework, you will need this to retrieve any data from the inputs you have. Any prop beyond file, onChange, onSubmit will be passed to the form tag.</p>

					<SyntaxHighlighter language="json" style={dark}>
			{`
<Form onSubmit={onSubmit}>
	<CustomSelect name="list">
		{[
			{value:"a", label:"Apple"},
			{value:"b", label:"Mango"}
		]}
	</CustomSelect>
</Form>
			`}
					</SyntaxHighlighter>
				</div>
				<div className="col-md-6">
					<Form onChange={(data) => {setexample(data)}}>
						<CustomSelect name="list">
							{[
								{value:"a", label:"Apple"},
								{value:"b", label:"Mango"}
							]}
						</CustomSelect>
					</Form>
					<SyntaxHighlighter language="json" style={dark}>{JSON.stringify(example, null, "\t")}</SyntaxHighlighter>
				</div>
			</div>


        </div>
    );
}
