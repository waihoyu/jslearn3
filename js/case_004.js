console.log("代理模式--测试代码")

var xiaoming = {

    name: '小明',
    age: 21,
    hasGirlFriend: false,
    sendFlower: function (target) {
        var flower = new Flower("满天星");
        if (typeof target.receiveFlower == 'function')
            target.receiveFlower(flower,this.name);
        else
            console.log("没有送出鲜花");
    }
}


var xiaomei = {

    name: '小美',
    age: 23,
    hasBoyFriend:false,
    listenGoodMood:function(fn){
        setTimeout(function(){
            fn();
        },10000);
    },
    receiveFlower:function (flower,name) {
        console.log('收到' + name + '的' + flower.type);
    }
}

var  xiaoxue = {
    name: "小雪",
    age: 22,
    receiveFlower: function (flower,name) {
        xiaomei.listenGoodMood(function () {
            xiaomei.receiveFlower(flower,name);
        })
    }
}


var Flower = function (type) {
    this.type = type || '玫瑰';
}

xiaoming.sendFlower(xiaoxue);
