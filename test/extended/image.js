import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes, images} from '../../data/testData';
//import {inputValues4} from '../../helpers/methods';
import {uploadingImage} from '../../helpers/methods';


const path = require('path');

describe('Image field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC - 105 Placeholder field name = "Click or drag and drop"', function () {
        const image = $(sel.image).getText();
        expect(image).toEqual(exp.imagePlaceholder);
    });

    it('TC- 106 Preview is appeared with jpeg 2MB', function () {
        uploadingImage(images.jpeg2);
        $(sel.imagePreview).waitForDisplayed();
        const imagePreview = $(sel.imagePreview).isDisplayed();
        expect(imagePreview).toEqual(true);
     });

    it('TC- 107 Preview is appeared with png 2MB', function () {
        uploadingImage(images.png2);
        $(sel.imagePreview).waitForDisplayed();
        const imagePreview = $(sel.imagePreview).isDisplayed();
        expect(imagePreview).toEqual(true);
    });

    it('TC- 110 No error appears with png 2MB', function () {
        uploadingImage(images.png2);
        const message = $(sel.imageError).isDisplayed();
        expect(message).toEqual(false);
    });


    it('TC- 111 No error appears with jpeg 2MB', function () {
        uploadingImage(images.jpeg2);
        const message = $(sel.imageError).isDisplayed();
        expect(message).toEqual(false);
    });

    it('TC- 112 No error appears with jpeg max 3.9MB', function () {
        uploadingImage(images["jpeg3.9"]);
        const message = $(sel.imageError).isDisplayed();
        expect(message).toEqual(false);
    });


    it('TC- 113 No error appears with png max 3.9MB', function () {
        uploadingImage(images["png3.9"]);
        const message = $(sel.imageError).isDisplayed();
        expect(message).toEqual(false);
    });

    it('TC- 114 Preview ia appeared with jpeg max 3.9MB', function () {
        uploadingImage(images["jpeg3.9"]);
        $(sel.imagePreview).waitForDisplayed();
        const message = $(sel.imageError).isDisplayed();
        expect(message).toEqual(false);
    });


    it('TC- 115 Preview ia appeared with png max 3.9MB', function () {
        uploadingImage(images["png3.9"]);
        $(sel.imagePreview).waitForDisplayed();
        const message = $(sel.imageError).isDisplayed();
        expect(message).toEqual(false);
    });







    it('TC- 128 User can upload png file 2 Mb', function () {
        uploadingImage(images.jpeg4);
        const message = $(sel.imageError).waitForDisplayed();
        expect(message).toEqual(true);
    });
    //
    // it('TC- 111 User can upload jpeg file 2 Mb', function () {
    //     uploadingImage();
    //     const imagePreview = $(sel.imagePreview).isDisplayed();
    //     expect(imagePreview).toEqual(true);
    // });
    //
    // it('TC- 112 User can upload jpeg file max size', function () {
    //     uploadingImage();
    //     const imagePreview = $(sel.imagePreview).isDisplayed();
    //     expect(imagePreview).toEqual(true);
    // });
    //
    // it('TC- 113 User can upload png file max size', function () {
    //     uploadingImage();
    //     const imagePreview = $(sel.imagePreview).isDisplayed();
    //     expect(imagePreview).toEqual(true);
    // });
    //
    // it('TC- 114 Click works with max jpeg size', function () {
    //     uploadingImage();
    //     const imagePreview = $(sel.imagePreview).isDisplayed();
    //     expect(imagePreview).toEqual(true);
    // });
    //
    // it('TC- 115 Click works with max png size', function () {
    //     uploadingImage();
    //     const imagePreview = $(sel.imagePreview).isDisplayed();
    //     expect(imagePreview).toEqual(true);
    // });



});
