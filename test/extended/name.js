import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes} from '../../data/testData';
import {clearName} from "../../helpers/methods";

describe('Name field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC-028 Name Field placeholder  = "Hero\'s name" ', function () {
        let placeholder = $(sel.name).getAttribute('placeholder');
        expect(placeholder).toEqual(exp.namePlaceholder);
    });

    it('TC-029 Name Field accepts 1 symbol" ', function () {
        $(sel.name).setValue(name.oneSymbol);
        const names = $(sel.errorMessage).isDisplayed();
        expect(names).toEqual(false);
    });

    it('TC-030 Name Field accepts 70 symbols" ', function () {
        $(sel.name).setValue(name.symbols70);
        const names = $(sel.errorMessage).isDisplayed();
        expect(names).toEqual(false);
    });

    it('TC-031 Name Field accepts letters" ', function () {
        $(sel.name).setValue(name.letters);
        const names = $(sel.errorMessage).isDisplayed();
        expect(names).toEqual(false);
    });

    it('TC-032 Name Field accepts  letters (lower case/upper case) ', function () {
        $(sel.name).setValue(name.lowUpCase);
        const names = $(sel.errorMessage).isDisplayed();
        expect(names).toEqual(false);
    });

    it('TC-033 Name Field accepts digits ', function () {
        $(sel.name).setValue(name.digits);
        const names = $(sel.errorMessage).isDisplayed();
        expect(names).toEqual(false);
    });

    it('TC-034 Name Field accepts special symbols" ', function () {
        $(sel.name).setValue(name.specSymbol);
        const names = $(sel.errorMessage).isDisplayed();
        expect(names).toEqual(false);
    });

    it('TC-035 Name Field accepts letters with space" ', function () {
        $(sel.name).setValue(name.lettersSpace);
        const names = $(sel.errorMessage).isDisplayed();
        expect(names).toEqual(false);
    });

    it('TC-036 Name Field accepts russian letters" ', function () {
        $(sel.name).setValue(name.rusLetters);
        const names = $(sel.errorMessage).isDisplayed();
        expect(names).toEqual(false);
    });

    it('TC-039a Message is appeared after entering ant then deleting input ', function () {
        $(sel.name).setValue(name.default);
        clearName();
        let message = $(sel.errorMessage).waitForDisplayed();
        expect(message).toEqual(true);
    });

    it('TC-039b Message which is appeared after entering ant then deleting input, has text "Required" ', function () {
        $(sel.name).setValue(name.default);
        clearName();
        browser.pause(1000)
        let text = $(sel.errorMessage).getText();
        expect(text).toEqual(exp.errorMessageRequired);
    });

    it('TC-040a Name Field doesn\'t accept  71 symbols" ', function () {
        $(sel.name).setValue(name.symbol71);
        const names = $(sel.errorMessage).waitForDisplayed();
        expect(names).toEqual(true);
    });

    it('TC-040b Name Field doesn\'t accept  71 symbols -> "70 symbols max" message ', function () {
        $(sel.name).setValue(name.symbol71);
        browser.pause(1000)
        let text = $(sel.errorMessage).getText();
        expect(text).toEqual(exp.errorMessageName);
    });

    it('TC-041 Not entered a value in the name field', function () {
        $$(sel.radioButtons)[gender.she].click();
        $(sel.age).setValue(age.default);
        $(sel.story).click();
        $$(sel.storyList)[storyTypes.comedy].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });
});
