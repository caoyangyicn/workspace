function test(){
    Java.perform(function(){
        var Utils = Java.use("com.xiaojianbang.hook.Utils");
        Utils.getCalc.overload('int', 'int', 'int', 'int').implementation = function(a, b, c, d){
            console.log(a, b, c, d);
            return this.getCalc(a, b);
        }
    })
}

test();