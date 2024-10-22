/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    let aLength = a.length - b.length
    let bLength = b.length - a.length

    if (a.length !== b.length) {
        if (a.length > b.length) {
            for (let i = 0; i < aLength; i++) {
                b = '0' + b;
            }
        } else {
            for (let i = 0; i < bLength; i++) {
                a = '0' + a;
            }
        }
    }



    let s = '';
    let lastSum = 0;

    for (let i = a.length - 1; i >= 0; i--) {
        let sum = (Number(a[i]) + Number(b[i]) + lastSum);
        if (sum === 2) {
            s = '0' + s;
            lastSum = 1;
        } else if (sum === 1) {
            s = '1' + s
            lastSum = 0;
        } else if (sum === 0) {
            s = '0' + s;
            lastSum = 0;
        }else if(sum === 3){
            s = '1' + s;
            lastSum = 1;
        }
    }

    return lastSum !== 0 ? '1' + s : s;

};