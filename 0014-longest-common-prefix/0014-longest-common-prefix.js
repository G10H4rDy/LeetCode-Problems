/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = "";

    for( let i = 0; i < strs[0].length; i++){
        let commonChar = strs[0].charAt(i);
        for (let j = 0; j < strs.length; j++){
              
            if (strs[j][i] !== commonChar){
                return common;
            }
        }
        common += commonChar;  
    }

    return common;

};