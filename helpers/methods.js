import sel from "../data/selectors";

function inputValues4 (name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyList)[story].click();
}

function clearInput() {
    let el = $(sel.age).getValue();
    for (let i = 0; i < el.length; i++)
        $(sel.age).keys(['Backspace']);
    }

function clearName() {
    let el = $(sel.name).getValue();
    for (let i = 0; i < el.length; i++)
        $(sel.name).keys(['Backspace']);
}

// function inputValues5 (name, gender, age, story, image){
//     $(sel.name).setValue(name);
//     $$(sel.radioButtons)[gender].click();
//     $(sel.age).setValue(age);
//     $(sel.story).click();
//     $$(sel.storyList)[story].click();
// }

module.exports = {inputValues4, clearInput, clearName};  //{in4, in5}
