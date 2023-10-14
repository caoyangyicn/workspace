function test(){
    Java.perform(function(){
        var Wallet = Java.use("com.xiaojianbang.hook.Wallet");
        var Money = Java.use("com.xiaojianbang.hook.Money");
        Wallet.deposit.implementation = function(a){
            console.log("a", a.getInfo());
            return this.deposit(Money.$new("USD", 100));
        }
    })
}

test();