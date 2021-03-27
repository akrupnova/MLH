import sel from '../../data/selectors';
import exp from '../../data/expected.json'

describe('Name field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC-028 Name Field placeholder  = "Hero\'s name" ', function () {
        let placeholder = $(sel.name).getAttribute('placeholder');
        expect(placeholder).toEqual(exp.namePlaceholder);
    });

    it('TC-029 Name Field accepts 1 letter" ', function () {
        $(sel.name).setValue('a');
 //       $(sel.story).click();
        browser.pause(2000);
        let name = $(sel.name).getValue();
        expect(name).toEqual('a');
    });

});
