import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {images} from '../../data/testData';
import {uploadingImage} from '../../helpers/methods';

const path = require('path');

describe('Image field negative testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC- 128a The error message with jpeg 4Mb', function () {
        uploadingImage(images.jpeg4);
        const message = $(sel.imageError).waitForDisplayed();
        expect(message).toEqual(true);
    });

    it('TC- 128b The error message with jpeg 4Mb - correct text', function () {
        uploadingImage(images.jpeg4);
        $(sel.imageError).waitForDisplayed();
        const message = $(sel.imageError).getText();
        expect(message).toEqual(exp.wrongSizeImage);
    });

    it.only('TC- 129 No preview appears with jpeg 4Mb', function () {
        uploadingImage(images.jpeg4);
   //     $(sel.imagePreview).waitForDisplayed();
        const imagePreview = $(sel.imagePreview).isDisplayed();
        expect(imagePreview).toEqual(false);
    });

    it.skip('TC- 130 (BUG) The error message with png 4Mb', function () {
        uploadingImage(images.png4);
        browser.pause(1000);
        const message = $(sel.imageError).waitForDisplayed();
        expect(message).toEqual(true);
    });

    it.skip('TC- 131 (BUG) No preview appears with png 4Mb', function () {
        uploadingImage(images.png4);
        const imagePreview = $(sel.imagePreview).isDisplayed()
        expect(imagePreview).toEqual(false);
    });

    it('TC- 132a The error message with bmp valid size', function () {
        uploadingImage(images.bmp);
        const message = $(sel.imageError).waitForDisplayed();
        expect(message).toEqual(true);
    });

    it('TC- 132b The error message with bmp valid size - correct text', function () {
        uploadingImage(images.bmp);
        $(sel.imageError).waitForDisplayed();
        const message = $(sel.imageError).getText();
        expect(message).toEqual(exp.wrongFormatImage);
    });

    it('TC- 133 No preview appears with bmp valid size', function () {
        uploadingImage(images.bmp);
        //       $(sel.imagePreview).waitForDisplayed();
        const imagePreview = $(sel.imagePreview).isDisplayed()
        expect(imagePreview).toEqual(false);
    });

    it('TC- 134 The error message with pdf valid size', function () {
        uploadingImage(images.pdf);
        const message = $(sel.imageError).waitForDisplayed();
        expect(message).toEqual(true);
    });

    it('TC- 135 No preview appears with pdf valid size', function () {
        uploadingImage(images.pdf);
        //       $(sel.imagePreview).waitForDisplayed();
        const imagePreview = $(sel.imagePreview).isDisplayed()
        expect(imagePreview).toEqual(false);
    });

    it('TC- 136 The error message with gif valid size', function () {
        uploadingImage(images.gif);
        const message = $(sel.imageError).waitForDisplayed();
        expect(message).toEqual(true);
    });

    it('TC- 137 No preview appears with gif valid size', function () {
        uploadingImage(images.gif);
        //       $(sel.imagePreview).waitForDisplayed();
        const imagePreview = $(sel.imagePreview).isDisplayed()
        expect(imagePreview).toEqual(false);
    });

    it('TC- 138 The error message with svg valid size', function () {
        uploadingImage(images.svg);
        const message = $(sel.imageError).waitForDisplayed();
        expect(message).toEqual(true);
    });

    it('TC- 139 No preview appears with svg valid size', function () {
        uploadingImage(images.svg);
        //       $(sel.imagePreview).waitForDisplayed();
        const imagePreview = $(sel.imagePreview).isDisplayed()
        expect(imagePreview).toEqual(false);
    });

    it('TC- 140 The error message with pptx valid size', function () {
        uploadingImage(images.pptx);
        const message = $(sel.imageError).waitForDisplayed();
        expect(message).toEqual(true);
    });

    it('TC- 141 No preview appears with pptx valid size', function () {
        uploadingImage(images.pptx);
        //       $(sel.imagePreview).waitForDisplayed();
        const imagePreview = $(sel.imagePreview).isDisplayed()
        expect(imagePreview).toEqual(false);
    });
});
