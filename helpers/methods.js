import sel from '../data/selectors';
import {story, caseType} from "../data/testData";
import exp from "../data/expected.json";
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

function uploadingImage(image, element, type) {
    const inputDiv = $(sel.imageUpload);
    const filePath = path.join(__dirname, image);
      browser.execute(function () {
        document.getElementsByTagName("input")[6].style.display = 'block';
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(filePath);
    if(type === caseType.positive) {
        $(sel.imagePreview).waitForDisplayed();
        return $(element).isDisplayed();
    }
    if(type === caseType.negative){
        $(sel.imageError).waitForDisplayed();
        return $(element).isDisplayed();
    }
}

function inputValues5(name, gender, age, story, image){
    inputValues4(name, gender, age, story);
    uploadingImage(image);
    $(sel.submit).click();
}

function clearInput(input) {
    let el = $(input).getValue();
    for (let i = 0; i < el.length; i++){
        $(input).keys(['Backspace']);
    }
    return $(sel.errorMessage).waitForDisplayed();
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

function refreshChecking(){
    let names = $(sel.name).getText();
    let ages = $(sel.age).getText();
    let genders= $(sel.gender).isSelected();
    let storyType = $(sel.story).isSelected();
    let result;
    if(names === '' && ages === '' && storyType === false && genders === false)
        result = true;
    return result;
}

function textReformat(element){
    let result;
    let text = $$(sel.storyText)[story.storyBody].getText();
    text = text.replace(/[,\r\n]+/g," ");
    text = text.split(' ');
    if (element === exp.she){
        let match = text.includes(element);
        let quantity = text.filter(el => el === exp.she).length;
        return [match, quantity];
    }
    else result = text.includes(element);
    return result;
}

function nameAccepting(name){
    $(sel.name).setValue(name);
    return $(sel.errorMessage).isDisplayed();
}

function genderRun(gender, button){
    $$(sel.radioButtons)[gender].click();
    return  $(button).isSelected();
}

module.exports = {genderRun, inputValues4, clearInput, uploadingImage, inputValues5, inputValues4Submit, storyTitle, collapsingDropdown, fillingStoryType, refreshChecking, textReformat, nameAccepting};


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
