import React from '../node/react';

//formalized
import { Form, Group, Input, Text, Toggle, Select, File }		from "../form";

//Packages
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark }                                 from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Components () {

    //----------------------------
    // Properties
    //----------------------------

	//States
	const [ example1, setexample1 ] = React.useState({}); //Form
	const [ example2, setexample2 ] = React.useState({}); //Input
	const [ example3, setexample3 ] = React.useState({}); //Text
	const [ example4, setexample4 ] = React.useState({}); //Group
	const [ example5, setexample5 ] = React.useState({}); //Toggle
	const [ example6, setexample6 ] = React.useState({}); //Select
	const [ example7, setexample7 ] = React.useState({}); //File

    //----------------------------
    // Render
	//----------------------------

    return (
        <div className="dashview">
			<h1 className="title mb-4">Components</h1>

			<h4>Form</h4>

			<div className="row">
				<div className="col-md-6">
					<p>This is the core of the framework, you will need this to retrieve any data from the inputs you have. Any prop beyond file, onChange, onSubmit will be passed to the form tag.</p>

					<SyntaxHighlighter language="jsx" style={dark}>
{`
<Form onChange={onChange} onSubmit={onSubmit} file>
</Form>
`}
					</SyntaxHighlighter>
				</div>
				<div className="col-md-6">
					<Form onChange={(data) => {setexample1(data)}}>
						<div className="form-group">
							<Input name="name" 	placeholder="Your name"		className="form-control" 	/>
						</div>
					</Form>
					<SyntaxHighlighter language="json" style={dark}>{JSON.stringify(example1, null, "\t")}</SyntaxHighlighter>
				</div>
			</div>


			<h4>Input</h4>

			<div className="row">
				<div className="col-md-6">
					<p>Is just the HTML's input tag wrapped inside our framework. This will enable you to use any type of input, except toggle. The list includes, but is not limited to:</p>

					<ul>
						<li>text</li>
						<li>date</li>
						<li>number</li>
						<li>color</li>
						<li>password</li>
						<li>email</li>
						<li>file</li>
					</ul>

					<SyntaxHighlighter language="jsx" style={dark}>
{`
<Form onSubmit={onSubmit}>
	<Input name="string" 	placeholder="text"		type="text" 	/>
	<Input name="date" 		placeholder="date"	 	type="date"		/>
	<Input name="numeric" 	placeholder="number" 	type="number"	/>
	<Input name="color" 	placeholder="number" 	type="color"	/>
</Form>
`}
					</SyntaxHighlighter>
				</div>
				<div className="col-md-6">
					<Form onChange={(data) => {setexample2(data)}}>
						<div className="form-group">
							<Input name="string" 	placeholder="text"		className="form-control"	type="text" 	/>
						</div>
						<div className="form-group">
							<Input name="date" 		placeholder="date"		className="form-control" 	type="date"		/>
						</div>
						<div className="form-group">
							<Input name="numeric" 	placeholder="number"	className="form-control" 	type="number"	/>
						</div>
						<div className="form-group">
							<Input name="color" 	placeholder="number"	className="form-control" 	type="color"	/>
						</div>
					</Form>
					<SyntaxHighlighter language="json" style={dark}>{JSON.stringify(example2, null, "\t")}</SyntaxHighlighter>
				</div>
			</div>

			<h4>Text</h4>

			<div className="row">
				<div className="col-md-6">
					<p>Similar to the Input, this one wraps the HTML's Text tag</p>

					<SyntaxHighlighter language="jsx" style={dark}>
{`
<Form onSubmit={onSubmit}>
	<Text name="name" 	placeholder="Your name"	/>
</Form>
`}
					</SyntaxHighlighter>
				</div>
				<div className="col-md-6">
					<Form onChange={(data) => {setexample3(data)}}>
						<div className="form-group">
							<Text name="message" 	placeholder="Your name"		className="form-control" 	/>
						</div>
					</Form>
					<SyntaxHighlighter language="json" style={dark}>{JSON.stringify(example3, null, "\t")}</SyntaxHighlighter>
				</div>
			</div>

			<h4>Group</h4>

			<div className="row">
				<div className="col-md-6">
					<p>The Group component is used to wrap all data inside it, in a javascript object. They can be nested.</p>

					<SyntaxHighlighter language="jsx" style={dark}>
			{`
<Form onSubmit={onSubmit}>
	<Group name="data">
		<Group name="user">
			<div className="form-group">
				<Input name="name" />
			</div>
		</Group>
	</Group>
</Form>
			`}
					</SyntaxHighlighter>
				</div>
				<div className="col-md-6">
					<Form onChange={(data) => {setexample4(data)}}>
						<Group name="data">
							<Group name="user">
								<div className="form-group">
									<Input name="name" 	placeholder="Your name"		className="form-control" 	/>
								</div>
							</Group>
						</Group>
					</Form>
					<SyntaxHighlighter language="json" style={dark}>{JSON.stringify(example4, null, "\t")}</SyntaxHighlighter>
				</div>
			</div>

			<h4>Toggle</h4>

			<div className="row">
				<div className="col-md-6">
					<p>Due to input's toggle special condition, we need to handle it differently from the other types. So we made a component specially for it.</p>

					<SyntaxHighlighter language="jsx" style={dark}>
			{`
<Form onSubmit={onSubmit}>
	<Toggle name="accept"	/>
</Form>
			`}
					</SyntaxHighlighter>
				</div>
				<div className="col-md-6">
					<Form onChange={(data) => {setexample5(data)}}>
						<div className="form-group">
							<Toggle name="accept"	/>
						</div>
					</Form>
					<SyntaxHighlighter language="json" style={dark}>{JSON.stringify(example5, null, "\t")}</SyntaxHighlighter>
				</div>
			</div>

			<h4>Select</h4>

			<div className="row">
				<div className="col-md-6">
					<p>This is the core of the framework, you will need this to retrieve any data from the inputs you have. Any prop beyond file, onChange, onSubmit will be passed to the form tag.</p>

					<SyntaxHighlighter language="jsx" style={dark}>
			{`
<Form onSubmit={onSubmit}>
	<Select name="list">
		<option value="a">Apple</option>
		<option value="b">Mango</option>
	</Select>
</Form>
			`}
					</SyntaxHighlighter>
				</div>
				<div className="col-md-6">
					<Form onChange={(data) => {setexample6(data)}}>
						<div className="form-group">
							<Select name="list" className="form-control">
								<option value="a">Apple</option>
								<option value="b">Mango</option>
							</Select>
						</div>
					</Form>
					<SyntaxHighlighter language="json" style={dark}>{JSON.stringify(example6, null, "\t")}</SyntaxHighlighter>
				</div>
			</div>

			<h4>File</h4>

			<div className="row">
				<div className="col-md-6">
					<p>This is the core of the framework, you will need this to retrieve any data from the inputs you have. Any prop beyond file, onChange, onSubmit will be passed to the form tag.</p>

					<SyntaxHighlighter language="jsx" style={dark}>
{`
<Form onChange={onChange} onSubmit={onSubmit} file>
	<File name="file" />
</Form>
`}
					</SyntaxHighlighter>
				</div>
				<div className="col-md-6">
					<Form onChange={(data) => {setexample7(data); console.log(data)}} file>
						<div className="form-group">
							<File name="file"		className="form-control" multiple 	/>
						</div>
					</Form>
					<SyntaxHighlighter language="json" style={dark}>//The file won't be serialized to JSON.
					Nothing to see here, sorry. =(</SyntaxHighlighter>
				</div>
			</div>

        </div>
    );
}
