import sel from '../data/selectors';
import {storyTypes} from "../data/testData";
const path = require('path');

function inputValues4(name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyList)[story].click();
}

function inputValues4Submit(name, gender, age, story){
    inputValues4(name, gender, age, story);
    $(sel.submit).click();
}

function uploadingImage(image) {
    const inputDiv = $(sel.imageUpload);
    const filePath = path.join(__dirname, image);
      browser.execute(function () {
        document.getElementsByTagName("input")[6].style.display = 'block';
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(filePath);
   // $(sel.imagePreview).waitForDisplayed();
}

function inputValues5(name, gender, age, story, image){
    inputValues4(name, gender, age, story);
    uploadingImage(image);
    $(sel.submit).click();
}

function clearInput(input) {
    let el = $(input).getValue();
    for (let i = 0; i < el.length; i++)
     $(input).keys(['Backspace']);
}

function storyTitle(type){
    $(sel.story).click();
    return $$(sel.storyType)[type].getAttribute('title');
}

function fillingStoryType(type){
    $(sel.story).click();
    $$(sel.storyList)[type].click();
    return $(sel.story).getText();
}

function collapsingDropdown(type){
$(sel.story).click();
$$(sel.storyList)[type].click();
return $(sel.storyDropdown).isDisplayed();
}

module.exports = {inputValues4, clearInput, uploadingImage, inputValues5, inputValues4Submit, storyTitle, collapsingDropdown, fillingStoryType};


//function uploadingImage() {
//       const inputDiv = $(sel.imageUpload);
//         const filePath = path.join(__dirname, '../../data/photos/jpeg180KB.jpeg');
//         function makeElVisible(element) {
//             browser.execute(function (el)  {
//                 el.style.display = '';
//             }, element);
//         }
//        makeElVisible(inputDiv);
//         browser.pause(2000);
//         inputDiv.waitForDisplayed();
//         inputDiv.setValue(filePath);
//         $(sel.imagePreview).waitForDisplayed();
//}
