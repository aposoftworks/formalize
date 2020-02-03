//Modules components
import _Form			from "./modules/Form";
import _Group			from "./modules/Group";
import _Input			from "./modules/Text/Input";
import _Text			from "./modules/Text/Text";
import _Toggle			from "./modules/Generic/Toggle";
import _Select			from "./modules/Generic/Select";
import _Wrapper			from "./modules/Wrapper";
import _File			from "./modules/Generic/File";

//Separated components
export const Form 		= _Form;
export const Group		= _Group;
export const Input		= _Input;
export const Text		= _Text;
export const Toggle		= _Toggle;
export const Select		= _Select;
export const Wrapper	= _Wrapper;
export const File 		= _File;

//Bundled
const bundled = {
	//Components
	Form: 		_Form,
	Group:		_Group,
	Input:		_Input,
	Text:		_Text,
	Toggle:		_Toggle,
	Select:		_Select,
	Wrapper:	_Wrapper,
	File: 		_File,
};

export default bundled;
