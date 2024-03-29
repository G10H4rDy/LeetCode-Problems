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

    let number = 0;

    for(let i = s.length - 1; i >= 0; i--)
    {   
        // Check if following number is more than previous
        if(obj[s[i]] > obj[s[i - 1]])
        {
            number+= obj[s[i]] - obj[s[i - 1]]
            i--;
            continue
        }
        number += obj[s[i]]

    }

    return number
};