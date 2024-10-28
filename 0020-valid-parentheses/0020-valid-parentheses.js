/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    if(!(s.length > 1) || s.length % 2 === 1) return false;



    let brackets = [];

    for (let i = 0; i < s.length; i++ ){
        if(s[i] === '(' ||  s[i] === '[' || s[i] === '{' ){
            brackets.push(s[i])
            continue
        }else{
            if(brackets[brackets.length - 1] + s[i] === '()' || brackets[brackets.length - 1] + s[i] === '[]' || brackets[brackets.length - 1] + s[i] === '{}' ){
                brackets.pop()
            }else{
                return false;
            }
        }
    }

    return brackets.length === 0 ? true : false;

};