import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {age, gender, name, storyTypes} from '../../data/testData';
import {storyTitle} from "../../helpers/methods";

describe('Story field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-072 Story Field placeholder  = "Type of the story" ', function () {
             let placeholder = $(sel.story).getText();
             expect(placeholder).toEqual(exp.storyPlaceholder);
        });
    });

    describe('Story labels testing', function () {

        it('TC-073 The expanded list appears in the dropdown ', function () {
            $(sel.story).click();
            const list = $(sel.storyDropdown).isDisplayed();
            expect(list).toEqual(true);
         });

         it('TC-075 Label "Overcoming the Monster" is correct ', function () {
             let label = storyTitle(storyTypes.overcomingTheMonster);
             expect(label).toEqual(exp.storyType1);
          });

         it('TC-076 Label "Rebirth"  is correct ', function () {
            let label = storyTitle(storyTypes.rebirth);
            expect(label).toEqual(exp.storyType2);
        });

        it('TC-077 Label "Quest"  is correct', function () {
             let label = storyTitle(storyTypes.quest);
            expect(label).toEqual(exp.storyType3);
        });

        it('TC-078 Label "Journey and Return"  is correct', function () {
             let label = storyTitle(storyTypes.journeyAndReturn);
            expect(label).toEqual(exp.storyType4);
         });

        it('TC-079 Label "Rags and Riches"  is correct" is correct ', function () {
            let label = storyTitle(storyTypes.ragsAndRiches);
            expect(label).toEqual(exp.storyType5);
        });

        it('TC-080 Label "Tragedy"  is correct', function () {
             let label = storyTitle(storyTypes.tragedy);
            expect(label).toEqual(exp.storyType6);
        });

        it('TC-081 Label "Comedy" is correct', function () {
            let label = storyTitle(storyTypes.comedy);
            expect(label).toEqual(exp.storyType7);
        });
    });

    describe('Negative test', function () {

        it('TC-104 Story Type field is required ', function () {
            $(sel.name).setValue(name.default);
            $$(sel.radioButtons)[gender.she].click();
            $(sel.age).setValue(age.default);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });
    });
});
