function printMap(map) {
  console.log("============================");
  var Gson = Java.use("com.google.gson.Gson").$new();
  console.log("map -> " + Gson.toJsonTree(map).getAsJsonObject());
  console.log("============================");
}

function test() {
  Java.perform(function () {
    let LoginActivity = Java.use("com.dodonew.online.ui.LoginActivity");
    let JsonRequest = Java.use("com.dodonew.online.http.JsonRequest");
    let RequestUtil = Java.use("com.dodonew.online.http.RequestUtil");
    let Map = Java.use("java.util.Map");
    let HashMap = Java.use("java.util.HashMap");
    let Config = Java.use("com.dodonew.online.config.Config");
    let Utils = Java.use("com.dodonew.online.util.Utils");
    let DodonewOnlineApplication = Java.use(
      "com.dodonew.online.DodonewOnlineApplication"
    );
    let domm = DodonewOnlineApplication.getInstance();
    // domm.onCreate();
    // console.log(domm.devId.value);

    // Java.choose("java.util.HashMap", {
    //     onMatch: function(instance){
    //         console.log("Found instance: " + instance);
    //         printMap(instance);
    //     },

    //     onComplete: function(){
    //         console.log("Finished instance!");
    //     }
    // })

    // HashMap.put.implementation = function (a, b) {

    //     if(a == "loginImei"){
    //         console.log("a", a);
    //         console.log("b", b);
    //     }
    //     // c
    //     return this.put(a, b);
    // }

    // Java.choose("com.dodonew.online.DodonewOnlineApplication", {
    //     onMatch: function(instance){
    //         console.log("Found instance: " + instance);
    //         // console.log("Found instance: " + instance.devId);
    //         // console.log("Result of getInfo(): " + instance.getInfo());
    //     },

    //     onComplete: function(){
    //         // console.log(instance.devId);
    //         console.log("Finished instance!");
    //     }
    // })
    // var methods = Utils.class.getDeclaredMethods();
    // for(let i = 0; i < methods.length; i++){
    //     console.log(methods[i].getName());
    // }
    // RequestUtil.decodeDesJson.implementation = function (a, b, c) {
    //     console.log("a", a);
    //     console.log("b", b);
    //     console.log("c", c);
    //     console.log(this.decodeDesJson(a, b, c));
    //     return "";
    // };
    // RequestUtil.paraMap(addMap, Config.BASE_APPEND, "sign")
    let map = HashMap.$new();
    let timestamp = Date.now();
    map.put("username", "15253121192");
    map.put("userPwd", "aaaaaa");
    map.put("loginImei", "Androidnull");
    map.put("equtype", "ANDROID");
    map.put("timeStamp", timestamp.toString());
    let result = RequestUtil.paraMap(map, "sdlkjsdljf0j2fsjk", "sign");
    let desKey = "65102933";
    let desIv = "32028092";
    let r1 = RequestUtil.encodeDesMap(result, desKey, desIv);
    console.log("r1", r1);
    // console.log("result", result);
    RequestUtil.encodeDesMap.overload(
      "java.lang.String",
      "java.lang.String",
      "java.lang.String"
    ).implementation = function (a, b, c) {
        console.log(this.encodeDesMap(a, b, c));
        return "";
    };
    // let fields = JsonRequest.class.getDeclaredFields();
    // for(let i = 0; i < fields.length; i++){
    //     let name = fields[i].getName();
    //     let value = JsonRequest[fields[i].getName()].value;
    //     console.log(name + ": " + value);
    // }
    // RequestUtil.encodeDesMap(result, "sdlkjsdljf0j2fsjk", "sign");

    // RequestUtil.paraMap.overload('java.util.Map', 'java.lang.String', 'java.lang.String').implementation = function (a, b, c) {
    //     console.log("a", printMap(a));
    //     console.log("b", b);
    //     console.log("c", c);
    //     console.log(this.paraMap(a, b, c));
    //     return "";
    // }

    // RequestUtil.encodeDesMap(map, Config.BASE_APPEND.value, "sign");
    // let fields = Config.class.getDeclaredFields();
    // for (let i = 0; i < fields.length; i++) {
    //     let field = fields[i];
    //     field.setAccessible(true); //忽略private修饰符的检查，true为可访问
    //     field.get(user); //调用get方法获取成员变量的值
    //     System.out.println(user);
    // }

    // console.log(Config.equtype.value);
    // let fields = DodonewOnlineApplication.class.getDeclaredFields();

    // for(let i = 0; i < fields.length; i++){
    //     // console.log(DodonewOnlineApplication[i]);
    //     console.log(fields[i].getName());
    //     console.log(fields[i].getName() + " " + DodonewOnlineApplication[fields[i].getName()].value);
    // }

    // Java.choose("com.dodonew.online.DodonewOnlineApplication", {
    //     onMatch: function(instance){
    //         console.log("Found instance: " + instance);
    //         // console.log("Found instance: " + instance.devId);
    //         // console.log("Result of getInfo(): " + instance.getInfo());
    //     },

    //     onComplete: function(){
    //         // console.log(instance.devId);
    //         console.log("Finished instance!");
    //     }
    // })

    // RequestUtil.encodeDesMap.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (a, b, c) {
    //     console.log("a1", a);
    //     console.log("b1", b);
    //     console.log("c1", c);
    //     console.log(this.encodeDesMap(a, b, c));
    //     // printMap(this.encodeDesMap(a, b, c));
    //     return "";
    // };

    // RequestUtil.encodeDesMap.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (a, b, c, d) {
    //     console.log("a2", a);
    //     console.log("b2", b);
    //     console.log("c2", c);
    //     console.log("d2", d);
    //     console.log(this.decodeDesJson(a, b, c, d));
    //     return Map.$new();
    // };
    // JsonRequest.$init.overload(
    //   "android.content.Context",
    //   "java.lang.String",
    //   "java.lang.String",
    //   "com.android.volley.Response$Listener",
    //   "com.android.volley.Response$ErrorListener",
    //   "java.lang.reflect.Type"
    // ).implementation = function (a, b, c, d, e, f) {
    //   console.log("a", a);
    //   console.log("b", b);
    //   console.log("c", c);
    //   console.log("d", d);
    //   console.log("e", e);
    //   console.log("f", f);
    //   return this.$init(a, b, c, d, e, f);
    // };
    // let constructions = JsonRequest.class.getDeclaredConstructors();
    // for(let i = 0; i < constructions.length; i++){
    //     console.log(constructions[i].getName());
    // }
    // let requestNetwork = LoginActivity["requestNetwork"];
    // requestNetwork.implementation = function(a, b, c){
    //     console.log("a", a);
    //     console.log("b", b.toString());
    //     console.log("c", c);
    //     return this.requestNetwork(a, b, c);
    // }
  });
}

test();
