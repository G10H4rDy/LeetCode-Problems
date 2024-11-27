/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let answer = [];

    let prefix = 1;
    for (let i = 0; i < nums.length; i++){
        answer[i] = prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--){
        answer[i] *= postfix;
        postfix *= nums[i];
    }

    return answer
};


    // O(n^2)
    // let answer = [];

    // for(let i = 0; i < nums.length; i++){
    //     let product = 1;
    //     let left = 0;
    //     let right = nums.length - 1;
    //     while(left != i || right != i){
    //         if(left != i){
    //             product *= nums[left];
    //             left++;
    //         }
    //         if(right != i){
    //             product*=nums[right];
    //             right--;
    //         }
    //     }
    //     answer[i] = product;
    // }