/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    // return immediately if if length if even
    if(!(s.length > 1) || s.length % 2 === 1) return false;

    let brackets = {
        ')' : '(',
        ']' : '[',
        '}' : '{'

    }

    let stack = [];

    for (let i = 0; i < s.length; i++ ){
        if(!brackets[s[i]] ){
            stack.push(s[i])
            continue
        }else{
            if(brackets[s[i]] === stack[stack.length - 1]){
                stack.pop()
            }else{
                return false;
            }
        }
    }

    return stack.length === 0 ? true : false;

};