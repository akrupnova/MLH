import sel from '../../data/selectors';
import {name, gender, age, storyTypes} from '../../data/testData';

describe('Gender field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC-042. Radio button "he" is selected after clicking on it', function () {
        $$(sel.radioButtons)[gender.he].click();
        let buttonHe = $('input[type="radio"][class="ant-radio-input"][value="he"]').isSelected();
        expect(buttonHe).toEqual(true);
    });

    it('TC-043. Radio button "she" is selected after clicking on it', function () {
        $$(sel.radioButtons)[gender.she].click();
        let buttonShe = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        expect(buttonShe).toEqual(true);
    });

    it('TC-044. Radio button "it" is selected after clicking on it', function () {
        $$(sel.radioButtons)[gender.it].click();
        const buttonIt = $('input[type="radio"][class="ant-radio-input"][value="it"]').isSelected();
        expect(buttonIt).toEqual(true);
    });

    it('TC-045a. User can choose only one button ("he") at the time, "she" is not selected', function () {
        $$(sel.radioButtons)[gender.he].click();
        const buttonShe = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        expect(buttonShe).toEqual(false);
    });

    it('TC-045b. User can choose only one button ("he") at the time, "it" is not selected', function () {
        $$(sel.radioButtons)[gender.he].click();
        const buttonIt = $('input[type="radio"][class="ant-radio-input"][value="it"]').isSelected();
        expect(buttonIt).toEqual(false);
    });

    it('TC-046a. User can choose only one button ("she") at the time, "he" is not selected', function () {
        $$(sel.radioButtons)[gender.she].click();
        const buttonHe = $('input[type="radio"][class="ant-radio-input"][value="he"]').isSelected();
        expect(buttonHe).toEqual(false);
    });

    it('TC-046b. User can choose only one button ("she") at the time, "it" is not selected', function () {
        $$(sel.radioButtons)[gender.she].click();
        const buttonIt = $('input[type="radio"][class="ant-radio-input"][value="it"]').isSelected();
        expect(buttonIt).toEqual(false);
    });

    it('TC-047a. User can choose only one button ("it") at the time, "he" is not selected', function () {
        $$(sel.radioButtons)[gender.it].click();
        const buttonHe = $('input[type="radio"][class="ant-radio-input"][value="he"]').isSelected();
        expect(buttonHe).toEqual(false);
    });

    it('TC-047b. User can choose only one button ("it") at the time, "she" is not selected', function () {
        $$(sel.radioButtons)[gender.it].click();
        const buttonShe = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        expect(buttonShe).toEqual(false);
    });

    it('TC-048. User can change the choice by clicking on another button ( "it" -> "she")', function () {
        $$(sel.radioButtons)[gender.it].click();
        $$(sel.radioButtons)[gender.she].click();
        const buttonShe = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        expect(buttonShe).toEqual(true);
    });

    it('TC-049. User can change the choice by clicking on another button ( "it" -> "he")', function () {
        $$(sel.radioButtons)[gender.it].click();
        $$(sel.radioButtons)[gender.he].click();
        const buttonHe = $('input[type="radio"][class="ant-radio-input"][value="he"]').isSelected();
        expect(buttonHe).toEqual(true);
    });

    it('TC-050. User can change the choice by clicking on another button ( "he" -> "she")', function () {
        $$(sel.radioButtons)[gender.he].click();
        $$(sel.radioButtons)[gender.she].click();
        const buttonShe = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        expect(buttonShe).toEqual(true);
    });

    it('TC-051. User can change the choice by clicking on another button ( "he" -> "it")', function () {
        $$(sel.radioButtons)[gender.he].click();
        $$(sel.radioButtons)[gender.it].click();
        const buttonIt = $('input[type="radio"][class="ant-radio-input"][value="it"]').isSelected();
        expect(buttonIt).toEqual(true);
    });

    it('TC-052. User can change the choice by clicking on another button ( "she" -> "it")', function () {
        $$(sel.radioButtons)[gender.she].click();
        $$(sel.radioButtons)[gender.it].click();
        const buttonIt = $('input[type="radio"][class="ant-radio-input"][value="it"]').isSelected();
        expect(buttonIt).toEqual(true);
    });

    it('TC-053. User can change the choice by clicking on another button ( "she" -> "he")', function () {
        $$(sel.radioButtons)[gender.she].click();
        $$(sel.radioButtons)[gender.he].click();
        const buttonHe = $('input[type="radio"][class="ant-radio-input"][value="he"]').isSelected();
        expect(buttonHe).toEqual(true);
    });

    it('TC-054. Not chosen any button in the gender field', function () {
        $(sel.name).setValue(name.default);
        $(sel.age).setValue(age.default);
        $(sel.story).click();
        $$(sel.storyList)[storyTypes.comedy].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });
});
