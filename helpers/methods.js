import sel from "../data/selectors";

function inputValues4 (name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyList)[story].click();
}

// function inputValues5 (name, gender, age, story, image){
//     $(sel.name).setValue(name);
//     $$(sel.radioButtons)[gender].click();
//     $(sel.age).setValue(age);
//     $(sel.story).click();
//     $$(sel.storyList)[story].click();
// }

module.exports = inputValues4;  //{in4, in5}
