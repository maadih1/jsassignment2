// Chapter 21 (Changing Case)
// var allLower = userInput.toLowerCase();
// x = x.toLowerCase();
// y = y.toUpperCase();
// var secondVariable = variable.toLowerCase();
// var newArrayElement = arrayElement.toLowerCase();
// alert(variable.toUpperCase());
// var cityName = "kaRacHi";
// var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// Chapter 22 - 25 (Strings)
// var slicedPart = sameWords.slice(1, 3);
// var numCharacters = sameWords.length;
// var seg = animal.slice(2, 6);
// var charactersCount = variable.length;
// var charCount = variable.length;
// var slicedVar = variable.slice(1, variable.length - 3);
// var indx = text.indexOf("be"); // indx will be 3
// var indx = text.lastIndexOf("be"); // indx will be 16
// var indx = text.lastIndexOf("go", text.lastIndexOf("go") - 1);
// if (segment[indexNum]) {
//     // Code for if the segment exists
// }
// var character = "abcde".charAt(2); // character will be 'c'
// var cha = text.charAt(9); // cha will be 'o'
// var x = str.charAt(str.length - 1);
// var cha = input.charAt(4);
// if (variable.charAt(2) === 'specificCharacter') {
//     // Code for if the 3rd character is the specific character
// }
// var charArray = [];
// for (var i = 0; i < variable.length; i++) {
//     charArray.push(variable.charAt(i));
// }
// var revisedReply = reply.replace("no", "yes");

// // Chapter 26 (Rounding Numbers)
// var roundedNumber = Math.round(number);
// var roundNum = Math.ceil(origNum);
// var roundNum = Math.floor(origNum);
// var roundedResult = Math.round(variable);
// var roundedValue = Math.round(0.5); // roundedValue will be 1

// Chapter 27 (Random Numbers)
// var randomNum = Math.floor(Math.random() * 50) + 1;
// var randomNumber = Math.random();
// var diceResult = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
// var tossResult = Math.random() < 0.5 ? "head" : "tail"; // Generates either "head" or "tail"

// Chapter 28, 29 (Converting Strings)
// var intValue = parseInt("123");
// function stringToInt(str) {
//     return parseInt(str);
// }
// var floatNum = parseFloat("3.14");
// var validConversion = !isNaN(parseFloat(stringToCheck)) && isFinite(stringToCheck);
// var numAsString = number.toString();
// var intNum = parseInt("3.14");

// Chapter 30 (Controlling the Length of Decimals)
// var newNum = num.toFixed(4);
// var numString = num.toFixed(2);
// var newNum = parseFloat(numString);
// if (num.toFixed(2).toString().length > 4) {
//     // Code for if the number has more than 4 characters
// }
// var numWithDecimals = 123.456789;
// alert(numWithDecimals.toFixed(2));

// Chapter 31 - 34 (Date & Time)
// var dObj = new Date();
// var dStr = new Date().toString();
// var day = d.getDay(); // day represents the day of the week (0-6)
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentDay = dayNames[d.getDay()];
// var partsOfDateTime = {
//     year: d.getFullYear(),
//     month: d.getMonth(),
//     day: d.getDate(),
//     hour: d.getHours(),
//     minute: d.getMinutes(),
//     second: d.getSeconds(),
//     millisecond: d.getMilliseconds()
// };
// var later = new Date(2020, 11, 31);
// var specificDate = new Date(1992, 1, 2); // 1 represents February
// var referenceDate = new Date(1980, 0, 1);
// var elapsedMilliseconds = d.getTime() - referenceDate.getTime();
// d.setFullYear(newYear);
// function changeMonthToJanuary(date) {
//     date.setMonth(0);
//     return date;
// }
// d.setDate(newDay);
// function changeMinutesToValue(date, value) {
//     date.setMinutes(value);
//     return date;
// }
// function addHours(date, hoursToAdd) {
//     date.setHours(date.getHours() + hoursToAdd);
//     return date;
// }
// function calculateAge(dateOfBirth) {
//     var currentDate = new Date();
//     var birthDate = new Date(dateOfBirth);
//     var ageInMilliseconds = currentDate - birthDate;
//     var ageDate = new Date(ageInMilliseconds);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Chapter 35 - 37 (Functions)
// function displayAlert() {
//     // Code to display an alert
// }
// function askName() {
//     var userName = prompt("Mudasir");
// }
// function callTwoFunctions() {
//     function1();
//     function2();
// }
// function displayAndAlertName() {
//     var name = prompt("Enter name");
//     alert(name);
// }
// function concat(first, second, third) {
//     return variable + string + number;
// }
// function concatenateParameters(param1, param2) {
//     var result = param1 + param2;
// }
// function multiplyParameters(param1, param2, param3) {
//     var result = param1 * param2 * param3;
// }
// function calculateAverage(numbersArray) {
//     var total = 0;
//     for (var i = 0; i < numbersArray.length; i++) {
//         total += numbersArray[i];
//     }
//     return total / numbersArray.length;
// }
// function sum(a, b) {
//     return a + b;
// }
// function calculateAverage(numbersArray) {
//     var total = 0;
//     for (var i = 0; i < numbersArray.length; i++) {
//         total += numbersArray[i];
//     }
//     return total / numbersArray.length;
// }
// var result = functionName();
// function letterCounts(word) {
//     var counts = {};
//     for (var i = 0; i < word.length; i++) {
//         var letter = word[i];
//         if (counts[letter] === undefined) {
//             counts[letter] = 1;
//         } else {
//             counts[letter]++;
//         }
//     }
//     return counts;
// }
// function setYear(date, year) {
//     date.setFullYear(year);
//     return date;
// }
// function calculateAge(dateOfBirth) {
//     var currentDate = new Date();
//     var birthDate = new Date(dateOfBirth);
//     var ageInMilliseconds = currentDate - birthDate;
//     var ageDate = new Date(ageInMilliseconds);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
// function checkPresence(array, word) {
//     return array.includes(word);
// }
// function repeatLetter(letter, times) {
//     return letter.repeat(times);
// }
// function reverseArray(array) {
//     return array.reverse();
// }

// Chapter 38 (Local vs. Global Variables)
// function demonstrateLocalVariable() {
//     var localVar = "This is a local variable.";
// }

// 2- To access a global variable inside a function in JavaScript, you can directly use the variable name within the function's scope.

// Chapter 39, 40 (Switch Statements)
// switch (variable) {
//     case value1:
//         // Code for value1
//         break;
//     case value2:
//         // Code for value2
//         break;
//     default:
//         // Default code
// }
// switch (cityName) {
//     case "Karachi":
//         alert("City matched!");
//         break;
//     default:
//         alert("City not matched.");
// }
