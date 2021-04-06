import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes} from '../../data/testData';
import {collapsingDropdown, fillingStoryType} from "../../helpers/methods";

describe('Story field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Choosing only one story type', function () {

        it('TC-082 Chosen "Overcoming the Monster"  type fills the field ', function () {
            let type = fillingStoryType(storyTypes.overcomingTheMonster);
            expect(type).toEqual(exp.storyType1);
        });

        it('TC-083 Dropdown is collapsed after choosing "Overcoming the Monster"', function () {
            let dropDownMenu = collapsingDropdown(storyTypes.overcomingTheMonster);
            expect(dropDownMenu).toEqual(false);
        });

        it('TC-084 Chosen "Rebirth"  type fills the field ', function () {
            let type = fillingStoryType(storyTypes.rebirth);
            expect(type).toEqual(exp.storyType2);
        });

        it('TC-085 Dropdown is collapsed after choosing "Rebirth"', function () {
            let dropDownMenu = collapsingDropdown(storyTypes.rebirth);
            expect(dropDownMenu).toEqual(false);
        });

        it('TC-086 Chosen  "Quest"  type fills the field ', function () {
            let type = fillingStoryType(storyTypes.quest);
            expect(type).toEqual(exp.storyType3);
        });

        it('TC-087 Dropdown is collapsed after choosing "Quest"', function () {
            let dropDownMenu = collapsingDropdown(storyTypes.quest);
            expect(dropDownMenu).toEqual(false);
        });

        it('TC-088 Chosen "Journey and Return"  type fills the field ', function () {
            let type = fillingStoryType(storyTypes.journeyAndReturn);
            expect(type).toEqual(exp.storyType4);
        });

        it('TC-089 Dropdown is collapsed after choosing "Journey and Return"', function () {
            let dropDownMenu = collapsingDropdown(storyTypes.journeyAndReturn);
            expect(dropDownMenu).toEqual(false);
        });

        it('TC-090 Chosen "Rags and Riches"  type fills the field ', function () {
            let type = fillingStoryType(storyTypes.ragsAndRiches);
            expect(type).toEqual(exp.storyType5);
        });

        it('TC-091 Dropdown is collapsed after choosing "Rags and Riches"', function () {
            let dropDownMenu = collapsingDropdown(storyTypes.ragsAndRiches);
            expect(dropDownMenu).toEqual(false);
        });

        it('TC-092 Chosen "Tragedy" type fills the field ', function () {
            let type = fillingStoryType(storyTypes.tragedy);
            expect(type).toEqual(exp.storyType6);
        });

        it('TC-093 Dropdown is collapsed after choosing "Tragedy"', function () {
            let dropDownMenu = collapsingDropdown(storyTypes.tragedy);
            expect(dropDownMenu).toEqual(false);
        });

        it('TC-094 Chosen "Comedy" type fills the field ', function () {
            let type = fillingStoryType(storyTypes.comedy);
            expect(type).toEqual(exp.storyType7);
        });

        it('TC-095 Dropdown is collapsed after choosing "Comedy"', function () {
            let dropDownMenu = collapsingDropdown(storyTypes.comedy);
            expect(dropDownMenu).toEqual(false);
        });
    });

    describe('Choosing only one story type', function () {

        it('TC-096 Change the type of the story from "Comedy" to "Tragedy" ', function () {
            fillingStoryType(storyTypes.comedy);
            let type = fillingStoryType(storyTypes.tragedy);
            expect(type).toEqual(exp.storyType6);
        });

        it('TC-097 Change the type of the story from "Tragedy" to "Rags and Riches" ', function () {
            fillingStoryType(storyTypes.tragedy);
            let type = fillingStoryType(storyTypes.ragsAndRiches);
            expect(type).toEqual(exp.storyType5);
        });

        it('TC-098 Change the type of the story from "Rags and Riches" to "Journey and Return"', function () {
            fillingStoryType(storyTypes.ragsAndRiches);
            let type = fillingStoryType(storyTypes.journeyAndReturn);
            expect(type).toEqual(exp.storyType4);
        });

        it('TC-099 Change the type of the story from "Journey and Return" to "Quest" ', function () {
            fillingStoryType(storyTypes.journeyAndReturn);
            let type = fillingStoryType(storyTypes.quest);
            expect(type).toEqual(exp.storyType3);
        });

        it('TC-100 Change the type of the story from "Quest" to "Rebirth" ', function () {
            fillingStoryType(storyTypes.quest);
            let type = fillingStoryType(storyTypes.rebirth);
            expect(type).toEqual(exp.storyType2);
        });

        it('TC-101 Change the type of the story from "Rebirth" to "Overcoming the Monster"', function () {
            fillingStoryType(storyTypes.rebirth);
            let type = fillingStoryType(storyTypes.overcomingTheMonster);
            expect(type).toEqual(exp.storyType1);
        });

        it('TC-102 Change the type of the story from "Overcoming the Monster" to "Comedy" ', function () {
            fillingStoryType(storyTypes.overcomingTheMonster);
            let type = fillingStoryType(storyTypes.comedy);
            expect(type).toEqual(exp.storyType7);
        });

        it('TC - 103 Story Type label is highlighted when cursor hovers on it ', function () {
            $(sel.story).click();
            $(sel.storyList).keys(['ArrowDown']);
            let rebirth = $(sel.rebirth).isFocused();
            expect(rebirth).toEqual(true);
        });
    });
});
