"use strict";
/**
 * 
 * @param {number}  
 * @return {number} 
 */
function sumArray(array_sum){
    let sum = 0;
    for (let i = 0; i < array_sum.length; i++) {
        sum+=array_sum[i];
    }
    return sum;
}