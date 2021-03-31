const name = {
   "default": "LadyBug007",
    "oneSymbol": "a",
    "symbols70": "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    "letters": "qwertyuiopasdfghjklzxcvbnm",
    "lowUpCase": "QWEqweRTYrty",
    "digits": "1234567890",
    "specSymbol": "~!@#$%^&*()-_=+[]\\{}|;':\",./<>?'",
    "lettersSpace": "qwe qwe",
    "rusLetters": "йцукенгшщ",
    "copyPast": "qwert12345",
    "emptyField": "",
    "symbol71": "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
}

const gender = {
    "he": 0,
    "she": 1,
    "it": 2,
}

const age = {
    "default": "1234567890",
    "oneDigit":"1",
    "12Digits":"999999999999",
    "spaceIsTrimmed":" 123 321",
    "zeroIsTrimmed": "023",
    "zeroInput": "0",
    "13Digits":"9999999999999",
    "letters":"asd",
    "symbols":" ~!@#$%^&*()_+{}][\\|?>,< ",
    "negative":"-23",
    "float": "23.3453",
}

const storyTypes = {
    "overcomingTheMonster": 0,
    "rebirth": 1,
    "quest": 2,
    "journeyAndReturn": 3,
    "ragsAndRiches": 4,
    "tragedy": 5,
    "comedy": 6
}

const labels = {
    "name": 0,
    "gender": 1,
    "age": 2,
    "story": 3,
    "image": 4
}


module.exports = {name, gender, age, storyTypes, labels};
