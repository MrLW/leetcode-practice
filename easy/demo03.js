/**
 * 罗马数字转整数
 */
var romanToInt = function (s) {
    let map = new Map();
    map.set('I',1);
    map.set('V',5);
    map.set('X',10);
    map.set('L',50);
    map.set('C',100);
    map.set('D',500);
    map.set('M',1000);
    let rec = 0,last  ,cur ;
    for (const a of s) {
        cur = map.get(a);
        if(last !== undefined && last < cur ) 
            {rec -= last ;
            rec += cur ;
            rec -= last ;}
        else 
             rec += cur ;
        last = cur ;
    }
    return rec ;
};

(async () => {
    console.log(romanToInt('MCMXCIV'))
})()