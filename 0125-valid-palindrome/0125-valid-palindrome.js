/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    function isAlphanumeric(str) {
    return /^[a-z0-9]+$/i.test(str);
    }
    
    let i = 0;
    j = s.length - 1;

    while(i < j){
        if(!isAlphanumeric(s[i])){
            i++;
            continue;
        }

        if(!isAlphanumeric(s[j])){
            j--;
            continue;
        }

        if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;

        i++;
        j--;    
    }

    return true
    
}