/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let letters1 = {};
    let letters2 = {};

    for(let i = 0; i < s.length; i++){
        if(letters1[s[i]]){
            letters1[s[i]]++;
            continue
        }
        letters1[s[i]] = 1;
    }

    for(let i = 0; i < t.length; i++){
        if(letters2[t[i]]){
            letters2[t[i]]++;
            continue
        }
        letters2[t[i]] = 1;
    }

    for (let letter in letters1){
        if(letters1[letter] !== letters2[letter]) return false;
    }

    return true;
};

