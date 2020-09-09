"use strict";
/**
 * 
 * @param {string} 
 * @return {boolean} 
 */
function maxOfThree(a,b,c){
    let maxnum = a;
    if(b>a&&b>c){
        maxnum = b;
    }
    debugger;
    if(c>b&&c>a){
        maxnum = c;
        
    }
    return maxnum
}
maxOfThree();
