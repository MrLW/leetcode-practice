/**
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 */
var reverse = function (x) {
    // 判断x的大小
    if(x > Math.pow(2,31) -1 || x < Math.pow(-12,31)-1){
        return 0 ;
    }
    let queue = [];
    // 1、取出各个位数
    do {
        var a = x % 10;
        x = parseInt(x / 10);
        queue.push(a);
        if(!x){
            break ;
        }
    } while (true);
    // 2、重新计算
    var result = 0 ;
    var len = queue.length ;
    for (let i = len  ; i>=1 ; i--) {
        result += queue[len-i]* Math.pow(10,i-1)   
    }
     // 判断result的大小
     if(result > Math.pow(2,31) -1 || result < Math.pow(-2,31)-1){
        return 0 ;
    }
    return result ;
};