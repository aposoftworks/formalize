import React 	from '../node/react';

//Packages
import ReactSelect	from "react-select";

//formalized
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
