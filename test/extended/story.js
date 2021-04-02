import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes, story, images} from '../../data/testData';
import {inputValues4Submit} from "../../helpers/methods";

describe('Story testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC-208 Story Header = "My Little Hero" ', function () {
        inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
        const header = $(sel.header).getText();
        expect(header).toEqual(exp.header);
    });

    it('TC-175 Story Title matches "Two Cats And A LadyBug007" ', function () {
        inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
        let title = $(sel.storyTitle).getText();
        expect(title).toEqual(exp.storyTitle);
    });

    it('TC-182 Story text matches the selected story type "Comedy" ', function () {
        inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        expect(text).toEqual(exp.text);
    });

    it('TC-183 Name at the text matches a name "LadyBug007" ', function () {
        inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        let names = text.includes(exp.name);
        expect(names).toEqual(true);
    });

    it('TC-184 (BUG) entering 1 in age field leads to "year" in the text ', function () {
        inputValues4Submit(name.default, gender.she, age.oneDigit, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        let ages = text.split(' ');
        ages = ages.includes(exp.year);
        expect(ages).toEqual(true);
    });

    it('TC-185 Age in the text matches entered age ', function () {
        inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        text = text.replace(/[\r\n]+/g," ");
        let ages = text.split(' ');
        ages = ages.includes(exp.age);
        expect(ages).toEqual(true);
    });

    it('TC-203 entering default age in age field leads to "years" in the text ', function () {
        inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        let ages= text.split(' ');
        ages = ages.includes(exp.years);
        expect(ages).toEqual(true);
    });

    it('TC-186 gender in the text matches selected gender "she" ', function () {
        inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        let genders = text.split(' ');
        genders = genders.includes(exp.she);
        expect(genders).toEqual(true);
    });

    it('TC-186a Pronoun quantity in the text matches = 2  ', function () {
        inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        text = text.replace(/[\r\n]+/g," ");
        let genders = text.split(' ');
        genders = genders.filter(el => el === exp.she).length;
        expect(genders).toEqual(exp.quantityPronoun);
    });

    it('TC-187 gender in the text matches selected gender "he" ', function () {
        inputValues4Submit(name.default, gender.he, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        let genders = text.split(' ');
        genders = genders.includes(exp.he);
        expect(genders).toEqual(true);
    });

    it('TC-188 gender in the text matches selected gender "it" ', function () {
        inputValues4Submit(name.default, gender.it, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        let genders = text.split(' ');
        genders = genders.includes(exp.it);
        expect(genders).toEqual(true);
    });

    it('TC-189 "he" matches to "his" in the text ', function () {
        inputValues4Submit(name.default, gender.he, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        let genders = text.split(' ');
        genders = genders.includes(exp.his);
        expect(genders).toEqual(true);
    });

    it('TC-190 "she" matches to "her" in the text ', function () {
        inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        let genders = text.split(' ');
        genders = genders.includes(exp.her);
        expect(genders).toEqual(true);
    });

    it('TC-191 "it" matches to "its" in the text ', function () {
        inputValues4Submit(name.default, gender.it, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.storyBody].getText();
        let genders = text.split(' ');
        genders = genders.includes(exp.its);
        expect(genders).toEqual(true);
    });

    it('TC-192 Moral text matches the selected story type "Comedy" ', function () {
        inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
        let text = $$(sel.storyText)[story.moral].getText();
        expect(text).toEqual(exp.moral);
    });

});
