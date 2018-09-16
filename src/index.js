module.exports = function solveEquation(equation) {
    var result = [];
    var strToArr = equation.split(' ');
    var numStore = [];

    for(var i = 0; i < strToArr.length; i++){

        var checkIsNumber = (function isNumeric(curNum) {
            return !isNaN(parseFloat(curNum)) && isFinite(curNum);
        })(+strToArr[i]);

        if(checkIsNumber){
            if( (i - 1) < 0 || (strToArr[i - 1]) === '+' ){
                numStore.push(+strToArr[i]);
            } else if(strToArr[i - 1] === '-') {
                numStore.push( (+strToArr[i]) * -1 );
            }
        }
    }

    var a = numStore[0], b = numStore[1], c = numStore[2];

    var x1 = Math.round( ((b * -1) - (Math.sqrt( (b * b) - (4 * a * c) ))) / (2 * a) );
    var x2 = Math.round( ((b * -1) + (Math.sqrt( (b * b) - (4 * a * c) ))) / (2 * a) );

    result.push(x1, x2);
    result.sort(function(a,b){
        return a - b;
    });
    return result;
}
