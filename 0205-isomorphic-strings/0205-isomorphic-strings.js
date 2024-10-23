/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let obj1 ={};
    let obj2 ={};

    for (let i = 0; i < s.length; i++){
        if(obj1[s[i]]){
            if(obj1[s[i]] !== t[i]) return false
        }
        obj1[s[i]] = t[i]
    }

    for (let i = 0; i < t.length; i++){
        if(obj2[t[i]]){
            if(obj2[t[i]] !== s[i]) return false
        }
        obj2[t[i]] = s[i]
    }

    return true

};