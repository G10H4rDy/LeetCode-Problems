/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    // pointer for s
    let i = 0;

    // pointer for j
    let j = 0;
    while(j < t.length){
        if(s[i] === t[j]){
            i++;
        }
        j++;
    }

    return s.length === i ? true : false;
};