function test(){
    Java.perform(function(){
        let Utils = Java.use("com.xiaojianbang.hook.Utils");
        var methods = Utils.class.getDeclaredMethods();
        // for(let i = 0; i < methods.length; i++){
        //     console.log(methods[i].getName());
        // }
        let overloadArr = Utils["getCalc"].overloads;
        for(let i = 0; i < overloadArr.length; i++){
            overloadArr[i].implementation = function(a, b, c, d){
                let str = "";
                for(let j = 0; j < arguments.length; j++){
                    str += arguments[j] + " ";
                }
                console.log("str", str);
                return this.getCalc.apply(this, arguments);
            }
        }
    })
}

test();