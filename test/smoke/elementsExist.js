import sel from '../../data/selectors';
import exp from '../../data/expected.json'

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App', function() {
            browser.url(''); //open baseUrl
        });

        it('TC-001 Title is correct ', function () {
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual(exp.title);
        });

    });

    describe('Elements exist', function () {

        it('TC-002 Header is present', function () {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present', function () {
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004 Name field label is present', function () {
            let label = $$(sel.requiredLabel)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Name field is present', function () {
            let name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-006 Gender field label is present', function () {
            let label = $$(sel.requiredLabel)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007.a Gender radio button 1 is present', function () {
            let buttonHe = $$(sel.radioButtons)[0].isDisplayed();
            expect(buttonHe).toEqual(true);
        });

        it('TC-007.b Gender radio button 2 is present', function () {
            let buttonShe = $$(sel.radioButtons)[1].isDisplayed();
            expect(buttonShe).toEqual(true);
        });

        it('TC-007.c Gender radio button 3 is present', function () {
            let buttonIt = $$(sel.radioButtons)[2].isDisplayed();
            expect(buttonIt).toEqual(true);
        });

        it('TC-008 Age field label is present', function () {
            let label = $$(sel.requiredLabel)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009 Age field is present', function () {
            let age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-010 Story field label is present', function () {
            let label = $$(sel.requiredLabel)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-011 Story field is present', function () {
            let story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-012 Image field label is present', function () {
            let label = $$(sel.imageLabel)[4].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-013 Image field is present', function () {
            let image = $(sel.image).isDisplayed();
            expect(image).toEqual(true);
        });

        it('TC-014 Submit button is present', function () {
            let submit= $(sel.submit).isDisplayed();
            expect(submit).toEqual(true);
        });

    });

});