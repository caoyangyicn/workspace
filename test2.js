function test(){
    Java.perform(function(){
        var Money = Java.use("com.xiaojianbang.hook.Money");
        Money.$init.implementation = function(a, b){
            console.log("a: ", a, " b: ", b);        
            return this.$init("dollar", 2);
        }
    })
}

test();