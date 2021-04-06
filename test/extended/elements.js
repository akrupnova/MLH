import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes, images, story, code, caseType} from '../../data/testData';
import {inputValues4, inputValues4Submit, inputValues5, refreshChecking} from "../../helpers/methods";

describe('Story elements testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Story elements exist', function () {

         it('TC-159 Story Header "My little Hero" is appeared ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            const header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-160 Story Title "Two Cats And A LadyBug007" is appeared ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let title = $(sel.storyTitle).isDisplayed();
            expect(title).toEqual(true);
        });

        it('TC-161 Story text is appeared ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let text = $$(sel.storyText)[story.storyBody].isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC-162 Moral text is appeared ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let text = $$(sel.storyText)[story.moral].isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC-163 Uploaded image is appeared ', function () {
            inputValues5(name.default, gender.she, age.default, storyTypes.comedy, images.jpeg2);
            let image = $(sel.imageReady).waitForDisplayed();
            expect(image).toEqual(true);
        });
    });

    describe('Reset testing', function () {

        it('TC-171  Button "Try again!" is appeared ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-209  Button "Try again!" has correct text ', function () {
            inputValues5(name.default, gender.she, age.default, storyTypes.comedy, images.jpeg2);
            let btn = $(sel.tryAgain).getText();
            expect(btn).toEqual(exp.tryAgain);
        });

        it('TC-172a  Clicking on the Button "Try again!" redirects to the Form filling page', function () {
            inputValues5(name.default, gender.she, age.default, storyTypes.comedy, images.jpeg2);
            $(sel.tryAgain).click();
            let page = $(sel.homePage).isDisplayed();
            expect(page).toEqual(true);
        });

        it('TC-172b  Clicking on the Button "Try again!" would result in clearing all fields in Application', function () {
            inputValues5(name.default, gender.she, age.default, storyTypes.comedy, images.jpeg2);
            $(sel.tryAgain).click();
            const result = refreshChecking();
            expect(result).toEqual(true);
        });

        it('TC-174a  Refreshing redirects from Story page to the Home page', function () {
            inputValues5(name.default, gender.she, age.default, storyTypes.comedy, images.jpeg2);
            browser.refresh();
            let page = $(sel.homePage).isDisplayed()
            expect(page).toEqual(true);
        });

        it('TC-174b  Clicking on the button "F5" after filling Home page leads to page refresh', function () {
            inputValues4(name.default, gender.she, age.default, storyTypes.comedy);
            driver.keys(code.refresh);
            const result = refreshChecking();
            expect(result).toEqual(true);
        });
    });
});
