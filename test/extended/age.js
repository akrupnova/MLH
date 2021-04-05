import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {age} from '../../data/testData';

describe('Age field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-055 Age Field placeholder = "Hero \'s age" ', function () {
            let placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.agePlaceholder);
        });
    });

    describe('Positive testing', function () {

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

        it('TC-063 Age field accepts spin down ', function () {
            $(sel.age).setValue(age.spinDown);
            $(sel.spinDownAge).click();
            let ages = $(sel.age).getValue();
            expect(ages).toEqual(exp.spinDown4);
        });
    });
});
