function test(){
    Java.perform(function(){
        let Wallet = Java.use("com.xiaojianbang.hook.Wallet");
        var methods = Wallet.class.getDeclaredMethods();
        for(let i = 0; i < methods.length; i++){
            console.log(methods[i].getName());
        }
        var constructions = Wallet.class.getDeclaredConstructors();
        for(let i = 0; i < constructions.length; i++){
            console.log(constructions[i].getName());
        }
    })
}

test();