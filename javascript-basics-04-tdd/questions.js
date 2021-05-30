
const stringSize = (text) => {
    var text = 'This text has a certain number of characters';
    var result = text.length;
    return result;
}
const replaceCharacterE = (text) => {
    var text = 'This text has a certain number of characters';
    var res = text.replace("e", ' ');
    return res;
}
const concatString = (text1, text2) => {
    var text1 = "el Javascript shi ";
    var text2 = "ra2e3";
    var res = text1.concat(text2);
    return res;
}
const showChar5 = (text) => {
    var text="TDD kicks ass";
    var fifthStringChar = text.charAt(4);
    return fifthStringChar;
}
const showChar9 = (text) => {
    var text = "But it is really annoying to write";
    var res = text.substring(0, 9);
    return res;
}
const toCapitals = (text) => {
    var text = "Another useful function";
    var res = text.toUpperCase();
    return res;
}
const toLowerCase = (text) => {
    var text = "This is a sentence!";
    var res = text.toLowerCase();
    return res;
}
const removeSpaces = (text) => {
    var text = " Rome wasn\'t built in a day ";
    var res = text.trim();
    return res;
}
const IsString = (text) => {
    var text = 'Is this a string?';
    var result = typeof text === 'string';
    return result;
}

const getExtension = (text) => {
    var text = "images/photo01.jpg";
    var ext = text.substr(text.lastIndexOf('.') + 1);
    return ext;
}
const countSpaces = (text) => {
    var text = "Sire open we have a big one!";
    var spaceCount = (text.split(" ").length - 1);
    return spaceCount;

}
const InverseString = (text) => {
    var text = "Après demain, à partir d\'aujourd\'hui?";
    var splitString = text.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}

const power = (x, y) => {
    var x = "2";
    var y = "3";
    var res = Math.pow(x, y);
    return res;
}
const absoluteValue = (num) => {
    var num = "-5";
    var res = Math.abs(num);
    return res;
}
const absoluteValueArray = (array) => {
    var array = ["-5", "-50", "-25" , "-568"];
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    var radius = "5";
    var result = Math.PI * radius * radius;
    var res = Math.round(result);
    return res;  
}
const hypothenuse = (ab, ac) => {
    var ab = "5";
    var ac = "8";
    var result = Math.hypot(ab, ac);
    return result;
}
const BMI = (weight, height) => {
    var weight = "65";
    var height = "1.75" ;
    var bmi = (weight / (height * height)).toFixed(2);
    var result = parseFloat(bmi);
    return result;

}

const createLanguagesArray = () => {
    var html = "Html";
    var css = "CSS";
    var java = "Java";
    var php = "PHP";
    var array_name = [html, css, java, php]; 
    return array_name; 
}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}