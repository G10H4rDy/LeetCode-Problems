/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    // If last number is not 9
    if(digits[digits.length - 1] !== 9){
        digits[digits.length - 1]++;
        return digits;
    }

    for(let i = digits.length - 1; i >=0; i-- )
    {
        if( (digits[i] + 1) === 10){
            digits[i] = 0;
            if ( i === 0){
                digits.unshift(1)
                return digits
            }
            continue
        }

        digits[i]++;
        return digits
    }
};