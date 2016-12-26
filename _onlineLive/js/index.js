/**
 * Created by Administrator on 2016/12/22.
 */

// 兼容getUseMedia, 使用摄像头
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||navigator.msGetUserMedia ||navigator.mozGetUserMedia;
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

var myVideo = document.getElementById("myVideo"); //Video元素
var canvas1 = document.getElementById("canvas"); // canvas元素
var ctx = canvas1.getContext("2d"); // 赋予绘制2d图片的方法 , 这个方法紧写在canvas元素后面,否则不成功
var mediaStream = null,  //sucessFn方法内接收streams,streams：表示包括哪些多媒体设备的对象
    track = null;

/*var exArray = []; //存储设备源ID
MediaStreamTrack.getSources(function (sourceInfos) {
    for (var i = 0; i != sourceInfos.length; ++i) {
        var sourceInfo = sourceInfos[i];
        //这里会遍历audio,video，所以要加以区分
        if (sourceInfo.kind === 'video') {
            exArray.push(sourceInfo.id);
        }
    }
});*/

// 获取用户的媒体语言
function getMedia(){
    // 判断是否摄像头功能
    if(navigator.getUserMedia){
        navigator.getUserMedia({// 参数一, 是一个json
            "video" : true,
            /*"video" :  {
                'optional': [{
                    'sourceId': exArray[0] //0为前置摄像头，1为后置 或者直接写为"video" : true
                }]
            },*/
            "audio" : true // 打开音频. false不打开
        },sucessFn, errorFn); // 成功和失败都会执行相应的回调函数
    }else{
        alert("您的浏览器不支持摄像头功能")
    }
}

// 获取摄像头成功; 将视频流给video的src的路径
// 解析视频流路径
window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
function sucessFn(stream){ // streams：表示包括哪些多媒体设备的对象
    // moz浏览器 兼容
    myVideo.src = window.URL && window.URL.createObjectURL(stream) || stream;
    mediaStream = stream;
    track = stream.getTracks()[0];
}

// 获取失败
function errorFn(ev){
    alert("出错了:" + ev)
}

function getPhoto(){
    // canvas拥有绘制2d图片的方法ctx
    ctx.drawImage(myVideo, 0 ,0 , 467 ,350);// 绘制图片的方法drawImage: 图片 坐标 宽高,宽高默认则可以省略
    // 宽高可以设置为canvas.height; canvas.width
}

// 关闭摄像头
function closeMedia(){
    if(mediaStream != null){
        if(mediaStream.stop){
            mediaStream.stop();
        }
        myVideo.src = ""
    }
    if(track != null){
        if(track.stop){
            track.stop();
        }
    }
}




