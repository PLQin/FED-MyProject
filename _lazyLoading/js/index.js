
$(function(){
	function createPinterest(ImgData){
		document.body.scrollTop = 0;
		var BomHeight = $(window).height(); // 可视区域的高度
		$(window).scroll(function(){
			var scrollH = document.body.scrollHeight, // 网页
				scrollT = document.body.scrollTop;  // 网页正文相对滚动条顶部的偏移。
			if(scrollT>=scrollH-BomHeight){// 滚动鼠标到底部
				loadImg();
			}
		})
	// .height  不算margin,不算 padding,不算border
	// .scrollHeight 整个元素的高度,包括带滚动条
	
		// 加载图片
		var LiLen = $("#box1 li").length; //4
		function loadImg(){
			var timer = setInterval(seekLi,100);
			setTimeout(function(){
				clearInterval(timer)
			},800)
		}
		// 寻找最矮的li容器
		function seekLi(){
			var h = Infinity,
				Li; // 寻找最矮的li
			for(var i =0 ;i<LiLen; i++){
				if($("#box1 li").eq(i).height()<h){
					h = $("#box1 li").eq(i).height();
					Li = $("#box1 li").eq(i);
				}
			};
			appendImg(Li);
		}
		// 将img添加至  最小的li
		var i= ImgData.length ; 
		function appendImg(Li){// 创建装载img的容器
			var oImg  = document.createElement("img");
			oImg.src = ImgData[i%ImgData.length]; // 0-12
			i--;
			oImg.style.cssText += "opacity:0;transform:scale(0)";
			setTimeout(function(){
				oImg.style.cssText += "opacity:1;transform:scale(1)"
			},100)
			Li.append(oImg);
			if(i===0){
				i=ImgData.length ; 
			}
		};
		var timer = setInterval(seekLi,100);
		setTimeout(function(){
			clearInterval(timer)
		},800)
	}
	
	var ImgData_1 = [
		"img/1.jpg",
		"img/2.jpg",
		"img/3.jpg",
		"img/4.jpg",
		"img/5.jpg",
		"img/6.jpg",
		"img/7.jpg",
		"img/8.jpg",
		"img/9.jpg",
		"img/10.jpg",
		"img/11.jpg",
		"img/12.jpg",
	];
	
	createPinterest(ImgData_1);
})

























