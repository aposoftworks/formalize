// Components
import Form		from "../modules/Form";
import Group	from "../modules/Group";
import Input	from "../modules/Text/Input";
import Text		from "../modules/Text/Text";
import Toggle	from "../modules/Generic/Toggle";
import Select	from "../modules/Generic/Select";
import Wrapper	from "../modules/Wrapper";
import Value	from "../modules/Value";
import When 	from "../modules/When";
import File		from "../modules/Generic/File";
import Error	from "../modules/Error";

describe('Components present', () => {
	it('Form', () => {
		expect(Form).toBeTruthy();
	});

	it('Group', () => {
		expect(Group).toBeTruthy();
	});

	it('Input', () => {
		expect(Input).toBeTruthy();
	});

	it('Text', () => {
		expect(Text).toBeTruthy();
	});

	it('Toggle', () => {
		expect(Toggle).toBeTruthy();
	});

	it('Select', () => {
		expect(Select).toBeTruthy();
	});

	it('Wrapper', () => {
		expect(Wrapper).toBeTruthy();
	});

	it('Value', () => {
		expect(Value).toBeTruthy();
	});

	it('When', () => {
		expect(When).toBeTruthy();
	});

	it('File', () => {
		expect(File).toBeTruthy();
	});

	it('Error', () => {
		expect(Error).toBeTruthy();
	});
});
