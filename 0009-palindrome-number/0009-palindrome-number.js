/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    

    if (x < 0){
        return false;
    }
    let nums =[];
    let y = x;
    while (y>0){
        let z = y % 10;
        nums.push(z);
        y = Math.floor(y/10); 
    }

    while(nums.length > 1){
        if(nums.shift()!== nums.pop()){
            return false;
        }
    }
    return true;
}