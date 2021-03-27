import sel from '../../data/selectors';
import exp from '../../data/expected.json'

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
        $(sel.age).setValue('1');
        let errorMessage = $('div[role="alert"]').isDisplayed();
        expect(errorMessage).toEqual(false);
    });

    it('TC-057 Age field accepts 12 digits ', function () {
        $(sel.age).setValue('999999999999');
        let errorMessage = $('div[role="alert"]').isDisplayed();
        expect(errorMessage).toEqual(false);
    });

    it('TC-058 Age field accepts "1234567890" ', function () {
        $(sel.age).setValue('1234567890');
        let errorMessage = $('div[role="alert"]').isDisplayed();
        expect(errorMessage).toEqual(false);
    });

    it('TC-059 Age field accepts space between digits ', function () {
        $(sel.age).setValue('123 321');
        let errorMessage = $('div[role="alert"]').isDisplayed();
        expect(errorMessage).toEqual(false);
    });

    it('TC-060 Age field trimmed 0 before digits ', function () {
        $(sel.age).setValue('023');
        $(sel.name).click();
        browser.pause(1000);
        let errorMessage = $(sel.age).getValue();
        expect(errorMessage).toEqual('23');
    });

    it('TC-061 Age field accepts spin up ', function () {
        $(sel.spinUpAge).click();
        let age = $(sel.age).getValue();
        expect(age).toEqual('1');
    });

    it('TC-062 Age field accepts spin up ', function () {
        $(sel.age).setValue('5');
        $(sel.spinUpAge).click();
        let age = $(sel.age).getValue();
        expect(age).toEqual('6');
    });

    it('TC-063 Age field accepts spin down ', function () {
        $(sel.age).setValue('5');
        $(sel.spinDownAge).click();
        let age = $(sel.age).getValue();
        expect(age).toEqual('4');
});

    // it('TC-064 Age field doesn\'t accept 0 ', function () {
    //     $(sel.age).setValue('0');
    //     let errorMessage = $(sel.errorMessageAge).isDisplayed();
    //     expect(errorMessage).toEqual(true);
    // });

    it('TC-065 Age field doesn\'t accept 13digits ', function () {
        $(sel.age).setValue('5555555555555');
        let error = $(sel.errorMessageAge).waitForDisplayed({ timeout: 1000 });
        expect(error).toEqual(true);
    });

    it('TC-066 Age field doesn\'t accept letters ', function () {
        $(sel.age).setValue('qwe');
        let error = $(sel.errorMessageAge).waitForDisplayed({ timeout: 1000 });
        expect(error).toEqual(true);
    });

    it('TC-067 Age field doesn\'t accept symbols ', function () {
        $(sel.age).setValue('@#$$%^&');
        let error = $(sel.errorMessageAge).waitForDisplayed({ timeout: 1000 });
        expect(error).toEqual(true);
    });

    it('TC-068 Age field doesn\'t accept negative digits ', function () {
        $(sel.age).setValue('-45');
        let error = $(sel.errorMessageAge).waitForDisplayed({ timeout: 1000 });
        expect(error).toEqual(true);
    });

    it('TC-069 Age field doesn\'t accept float digits ', function () {
        $(sel.age).setValue('5.8');
        let error = $(sel.errorMessageAge).waitForDisplayed({ timeout: 1000 });
        expect(error).toEqual(true);
    });

    it('TC-071 Age field doesn\'t accept spin down from 0 ', function () {
        $(sel.spinDownAge).click();
        browser.pause(2000);
        let error = $(sel.errorMessageAge).waitForDisplayed({ timeout: 1000 });
        expect(error).toEqual(true);
    });

});
