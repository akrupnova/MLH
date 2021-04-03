import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {age, name, gender, storyTypes} from '../../data/testData';
import {clearInput} from '../../helpers/methods';

describe('Age field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC-055 Age Field placeholder = "Hero \'s age" ', function () {
        let placeholder = $(sel.age).getAttribute('placeholder');
        expect(placeholder).toEqual(exp.agePlaceholder);
    });

    it('TC-056 Age field accepts "1" ', function () {
        $(sel.age).setValue(age.oneDigit);
        let errorMessage = $(sel.errorMessage).isDisplayed();
        expect(errorMessage).toEqual(false);
    });

    it('TC-057 Age field accepts 12 digits ', function () {
        $(sel.age).setValue(age.digits12);
        let errorMessage = $(sel.errorMessage).isDisplayed();
        expect(errorMessage).toEqual(false);
    });

    it('TC-058 Age field accepts "1234567890" ', function () {
        $(sel.age).setValue(age.default);
        let errorMessage = $(sel.errorMessage).isDisplayed();
        expect(errorMessage).toEqual(false);
    });

    it('TC-059 Age field accepts space between digits ', function () {
        $(sel.age).setValue(age.spaceIsTrimmed);
        let errorMessage = $(sel.errorMessage).isDisplayed();
        expect(errorMessage).toEqual(false);
    });

    it('TC-060 Age field trimmed 0 before digits ', function () {
        $(sel.age).setValue(age.zeroIsTrimmed);
        $(sel.name).click();
        let errorMessage = $(sel.age).getValue();
        expect(errorMessage).toEqual(exp.trimmed0);
    });

    it('TC-061 Age field accepts spin up ', function () {
        $(sel.spinUpAge).click();
        let ages = $(sel.age).getValue();
        expect(ages).toEqual(exp.spinUp1);
    });

    it('TC-062 Age field accepts spin up ', function () {
        $(sel.age).setValue(age.oneDigit);
        $(sel.spinUpAge).click();
        let ages = $(sel.age).getValue();
        expect(ages).toEqual(exp.spinUp2);
    });

    it('TC-202a Message is appeared after entering ant then deleting input ', function () {
        $(sel.age).setValue(age.spinDown);
        clearInput(sel.age);
        let message = $(sel.errorMessage).waitForDisplayed();
        expect(message).toEqual(true);

    });

    it('TC-202b Message which is appeared after entering ant then deleting input, has text "Required" ', function () {
        $(sel.age).setValue(age.spinDown);
        clearInput(sel.age);
        browser.pause(1000)
        let text = $(sel.errorMessage).getText();
        expect(text).toEqual(exp.errorMessageRequired);
    });

    it('TC-063 Age field accepts spin down ', function () {
        $(sel.age).setValue(age.spinDown);
        $(sel.spinDownAge).click();
        let ages = $(sel.age).getValue();
        expect(ages).toEqual(exp.spinDown4);
});

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
        browser.pause(1000);
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

    it('TC-206 Not entered a value in the age field', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.story).click();
        $$(sel.storyList)[storyTypes.comedy].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });
});
