' use strict'


//Question1
function findMax(a) {
    let max = a[a.length - 1];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }

    }
    return max;
}
let num = [1, 2, 3]
console.log(findMax(num));



//Question number 2

function sum(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;

}
let list = [1, 2, 3, 4];

console.log(sum(list));

// 
function MultiplayAll(arr) {
    let output = 0;
    for (let i = 0; i < arr.length; i++) {

        output *= arr[i];

    }
    return output;
}
let list = [1, 3, 4, 6, 7, 0];
console.log(MultiplayAll(list));


// Question number 3
function findLongestWord(array) {

    let longestWord = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord) {
            longestWord = array[i].length;
        }
    }
    return longestWord;
}
let test = ["dog", "hi", "gretings", "cat"]
console.log(findLongestWord(test));

function longestString(strs) {
    return strs.sort(function (a, b) { return b.length - a.length })[0];
}

let test = ['greetings', 'car', 'hello'];

console.log(longestString(test));

//Qestion number 4
A.reverseArray
function rev(array) {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        temp[i] = array[array.length - i - 1];
    }
    return temp;
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(rev(array1));

B.reverseArrayInPlace
function rev(array) {

    for (let i = 0; i < array.length; i++) {
        array[i] = array[array.length - i - 1];
    }
    return array;
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(rev(array1));

