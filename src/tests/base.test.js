//Components
import Form 	from '../modules/Form';
import Group 	from '../modules/Group';
import Input 	from '../modules/Text/Input';
import Text		from "../modules/Text/Text";

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
});
