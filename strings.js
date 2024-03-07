//question 1
let  str="extravaganza";
let substr= str.substring(8,   );
console.log(substr);

//Question 2
const food = "The quick fox jumped over the lazy dog";
let foodToAdd = "eat";
let indexPosition = 4;
let newWord = food.slice(0,indexPosition)+foodToAdd + food.slice(indexPosition);
console.log(newWord);

//Question 3
const story = "The quick brown fox jumped over the lazy dog";
const var1 = "the";
const var2 = "brown";
console.count("the");
console.count("brown");

//Question 4
let f = "The pupils are reading in the library";
console.log(f.indexOf('are'));
let k = "The child was sitting on the table before it fell";
console.log(k.indexOf('sitting'));

//QUESTION 5
const myString = "wonderful"
const upperCaseString = myString.toUpperCase();
console.log(upperCaseString);

var word = "amazing";
var lowerCaseString = word.toLowerCase();
console.log(lowerCaseString);

var text = "UndERneath"
var lowerCaseString = text.toLowerCase();
console.log(lowerCaseString);

function titleCase(str){
    str = str.toLowerCase().split('');
    for (let i = 0; i<str.length; i++){
    }
    return str.join('');
}
console.log(titleCase("A wonderful world"));
