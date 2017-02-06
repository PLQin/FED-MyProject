window.onload = function(){
    onresize = function(){
        var windowWidth = document.documentElement.clientWidth||document.body.clientWidth;
        var pageTop = document.getElementById("pageTop");
        //console.log(windowWidth);
        if(windowWidth<970){
            pageTop.style.display = "none"
        }else{
            pageTop.style.display = "block"
        }
    }
}