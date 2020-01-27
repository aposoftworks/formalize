//Components
import Form 	from '../modules/Form';
import Group 	from '../modules/Group';
import Input 	from '../modules/Text/Input';
import Textarea	from "../modules/Text/Textarea";

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

	it('Textarea', () => {
		expect(Textarea).toBeTruthy();
	});
});
