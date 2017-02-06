
window.onload = function(){
    var enc = document.getElementById("example-navbar-collapse");
    var sectNone = document.getElementById("sectNone");
    //alert(windowWidth);
    //alert("1")
    setInterval(function(){
        var windowWidth = document.documentElement.clientWidth;
        if (windowWidth<992){
            sectNone.style.display = "none"
            enc.style.minWidth = windowWidth +"px"
        }else{
            sectNone.style.display = "block"
            enc.style.minWidth = 1200 + "px"
        }
        //alert(windowWidth)
    },16.7)
}

