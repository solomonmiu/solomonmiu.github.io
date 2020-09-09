"use strict";
/**
 * @param  {} str
 *  @param  {} n
 */
function reverseArray(str){
    let temp = " ";
    for (let i = 0; i < str.length; i++) {
        temp += str[str.length-1-i]
    }
    return temp;
}
function findLongWord(str,n){
let temp = [];
for (let i = 0; i < str.length; i++) {
    if(str[i].length>n){
        temp[i]=str[i];
    }
    
} return temp;
}