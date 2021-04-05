import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {age, name, gender, storyTypes} from '../../data/testData';
import {clearInput, inputValues4} from '../../helpers/methods';

describe('Age field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Negative testing', function () {

        it('TC-064 (BUG) Age field doesn\'t accept 0 ', function () {
            $(sel.age).setValue(age.zeroInput);
            let errorMessage = $(sel.errorMessage).waitForDisplayed({timeout: 1000});
            expect(errorMessage).toEqual(true);
        });

        it('TC-065 Age field doesn\'t accept 13digits ', function () {
            $(sel.age).setValue(age.digits13);
            let errorMessage = $(sel.errorMessage).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-066 Age field doesn\'t accept letters ', function () {
            $(sel.age).setValue(age.letters);
            let errorMessage = $(sel.errorMessage).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-067 Age field doesn\'t accept symbols ', function () {
            $(sel.age).setValue(age.symbols);
            let errorMessage = $(sel.errorMessage).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-068a Age field doesn\'t accept negative digits ', function () {
            $(sel.age).setValue(age.negative);
            let errorMessage = $(sel.errorMessage).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-068b Age field doesn\'t accept negative digits-> "looks like unreal age" message ', function () {
            $(sel.age).setValue(age.negative);
            $(sel.errorMessage).waitForDisplayed();
            let errorMessage = $(sel.errorMessage).getText();
            expect(errorMessage).toEqual(exp.errorMessageInvalid);
        });

        it('TC-069 Age field doesn\'t accept float digits ', function () {
            $(sel.age).setValue(age.float);
            let errorMessage = $(sel.errorMessage).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-071 Age field doesn\'t accept spin down from 0 ', function () {
            $(sel.spinDownAge).click();
            let errorMessage = $(sel.errorMessage).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-202a Message is appeared after entering ant then deleting input ', function () {
            $(sel.age).setValue(age.spinDown);
            let message = clearInput(sel.age);
            expect(message).toEqual(true);
        });

        it('TC-202b Message which is appeared after entering ant then deleting input, has text "Required" ', function () {
            $(sel.age).setValue(age.spinDown);
            clearInput(sel.age);
            let text = $(sel.errorMessage).getText();
            expect(text).toEqual(exp.errorMessageRequired);
        });

        it('TC-206 Not entered a value in the age field', function () {
            inputValues4(name.default, gender.she, age.empty, storyTypes.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });
    });
});
