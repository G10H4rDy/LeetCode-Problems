/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let rn = {}
    let mg = {}

    for(let i  = 0 ; i < ransomNote.length; i++){
        if (rn[ransomNote[i]]){
            rn[ransomNote[i]]++;
        }else rn[ransomNote[i]] = 1;
    }

    for(let i  = 0 ; i < magazine.length; i++){
        if (mg[magazine[i]]){
            mg[magazine[i]]++;
        }else mg[magazine[i]] = 1;
    }

    for (let key in rn){
        if((rn[key] > mg[key]) || !mg[key]) return false;
    }

    return true;
};