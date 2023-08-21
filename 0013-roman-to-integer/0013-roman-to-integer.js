/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const obj = {
        'I':             1,
        'V':             5,
        'X':             10,
        'L':             50,
        'C':             100,
        'D':             500,
        'M':             1000,
    }

    let num = 0;
    for(let i = s.length - 1, j = i -1; i >= 0 ; i--, j--){
        if (obj[s[j]] < obj[s[i]]){
            num += obj[s[i]] - obj[s[j]];
            i--;
            j--;
        }else{
            num += obj[s[i]];   
        }
    }

    return num;
};