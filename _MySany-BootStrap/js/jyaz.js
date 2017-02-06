window.onload = function(){
    var sectNone = document.getElementById("sectNone");
    //alert(windowWidth);
    //alert("1")
    setInterval(function(){
        var windowWidth = document.documentElement.clientWidth;
        if (windowWidth<992){
            sectNone.style.display = "none"
        }else{
            sectNone.style.display = "block"
        }
    },10)
}























