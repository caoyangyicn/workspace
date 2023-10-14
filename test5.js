function test(){
    Java.perform(function(){
        // var Money = Java.use("com.xiaojianbang.hook.Money");
        // Money.setFlag("2341434123");

        // var money = Money.$new("USD", 100); 

        // console.log(money.getInfo());

        Java.choose("com.xiaojianbang.hook.Money", {
            onMatch: function(instance){
                console.log("Found instance: " + instance);
                console.log("Result of getInfo(): " + instance.getInfo());
            },

            onComplete: function(){
                console.log("Finished instance!");
            }
        })
    })
}

test();