"use strict"


function findLongestWord(array) {
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > array[0].length) {
            longest = array[i];
        }
    }
    return longest;
}
//let a = ["hi","bye","hello","greetings"]
