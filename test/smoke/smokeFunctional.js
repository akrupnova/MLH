import sel from '../../data/selectors';
import {name, gender, age, storyTypes} from '../../data/testData';
import {inputValues4} from '../../helpers/methods';

describe('Required fields and story created', function () {

    before('Open App', function() {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 are field in with valid values', function () {
        inputValues4(name.default, gender.she, age.default, storyTypes.comedy);
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User is redirected to the story page', function () {
        browser.refresh();
        inputValues4(name.default, gender.she, age.default, storyTypes.comedy);
        $(sel.submit).click();
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

});
