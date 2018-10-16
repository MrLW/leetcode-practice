/**
 *  回文数
 */
// int版本
var isPalindromeNumber = function (x) {
    if (x < 0) return false; // 小于0的为false
    let rec = 0, pop = x % 10, z = parseInt(x / 10);
    if(!z) return true  ;
    while(z){
        rec = rec * 10 + pop;
        pop = z % 10 ;
        z = parseInt(z / 10 );
    }
    rec = rec * 10 + pop;
    return x === rec ;
};
// 转换字符串版本
var isPalindromeStr = function (x) {
    // 将数字转换为字符串
    let strX = x + '';
    let len = strX.length  ;
    let result = true ;
    for(let i = 0 ; i < len / 2; i++ ){
        if(strX[i]!== strX[len-i-1]){
            result = false ;
            break;
        }
    }
    return result  ;
};

// 测试
(async () => {
    let num = 12321;
    console.log(isPalindromeNumber(num));
    console.log(isPalindromeStr(num));
})()