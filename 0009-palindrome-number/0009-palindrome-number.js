/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;

    xStr = String(x);

    for(let i = 0, j = xStr.length - 1; i < j; i++, j--){
        if(xStr[i] !== xStr[j]) return false;
    }

    return true;
};