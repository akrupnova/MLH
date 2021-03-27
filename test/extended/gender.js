import sel from '../../data/selectors';
import exp from '../../data/expected.json'

describe('Gender field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC-042. Radio button "he" is enabled', function () {
        $$(sel.radioButtons)[0].click();
        let color = $('input[type="radio"][class="ant-radio-input"][value="he"]').isSelected();
        expect(color).toEqual(true);
    });

    it('TC-043. Radio button "she" is enabled', function () {
        $$(sel.radioButtons)[1].click();
    //    const color = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        let color = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        expect(color).toEqual(true);
    });

    it('TC-044. Radio button "it" is enabled', function () {
        $$(sel.radioButtons)[2].click();
        const color = $('input[type="radio"][class="ant-radio-input"][value="it"]').isSelected();
        expect(color).toEqual(true);
    });

    it('TC-045. User can choose only one button ("he") at the time', function () {
        $$(sel.radioButtons)[0].click();
        const colorShe = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        const colorIt = $('input[type="radio"][class="ant-radio-input"][value="it"]').isSelected();
        expect(colorShe).toEqual(false);
        expect(colorIt).toEqual(false);
    });

    it('TC-046. User can choose only one button ("she") at the time', function () {
        $$(sel.radioButtons)[1].click();
        const colorHe = $('input[type="radio"][class="ant-radio-input"][value="he"]').isSelected();
        const colorIt = $('input[type="radio"][class="ant-radio-input"][value="it"]').isSelected();
        expect(colorHe).toEqual(false);
        expect(colorIt).toEqual(false);
    });

    it('TC-047. User can choose only one button ("it") at the time', function () {
        $$(sel.radioButtons)[2].click();
        const colorHe = $('input[type="radio"][class="ant-radio-input"][value="he"]').isSelected();
        const colorShe = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        expect(colorShe).toEqual(false);
        expect(colorHe).toEqual(false);
    });

    it('TC-048. User can change the choice by clicking on another button ( "it" -> "she")', function () {
        $$(sel.radioButtons)[2].click();
        $$(sel.radioButtons)[1].click();
        const color = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        expect(color).toEqual(true);
    });

    it('TC-049. User can change the choice by clicking on another button ( "it" -> "he")', function () {
        $$(sel.radioButtons)[2].click();
        $$(sel.radioButtons)[0].click();
        const color = $('input[type="radio"][class="ant-radio-input"][value="he"]').isSelected();
        expect(color).toEqual(true);
    });

    it('TC-050. User can change the choice by clicking on another button ( "he" -> "she")', function () {
        $$(sel.radioButtons)[0].click();
        $$(sel.radioButtons)[1].click();
        const color = $('input[type="radio"][class="ant-radio-input"][value="she"]').isSelected();
        expect(color).toEqual(true);
    });

    it('TC-051. User can change the choice by clicking on another button ( "he" -> "it")', function () {
        $$(sel.radioButtons)[0].click();
        $$(sel.radioButtons)[2].click();
        const color = $('input[type="radio"][class="ant-radio-input"][value="it"]').isSelected();
        expect(color).toEqual(true);
    });

    it('TC-051. User can change the choice by clicking on another button ( "she" -> "it")', function () {
        $$(sel.radioButtons)[1].click();
        $$(sel.radioButtons)[2].click();
        const color = $('input[type="radio"][class="ant-radio-input"][value="it"]').isEnabled();
        expect(color).toEqual(true);
    });

    it('TC-052. User can change the choice by clicking on another button ( "she" -> "he")', function () {
        $$(sel.radioButtons)[1].click();
        $$(sel.radioButtons)[0].click();
        const color = $('input[type="radio"][class="ant-radio-input"][value="he"]').isEnabled();
        expect(color).toEqual(true);
    });

    it('TC-053. Not chosen any button in the gender field', function () {
        $(sel.name).setValue('Boby55');
        $(sel.age).setValue('75');
        $(sel.story).click();
        $$(sel.storyList)[6].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });


});