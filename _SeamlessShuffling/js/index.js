
$(function(){
	var a = 0,
		_a = 0,// 初始前一个索引
		time = 1000; // 轮播频率

	// 定时启动轮播的方法
	function timerStartBanner(){
		a++;
		if(a==4){
			a=0
		}
		$(".pic ul li").eq(a).css("left","100%") ; // 当前这张瞬间到最右边:left 100%
		$(".pic ul li").eq(a).animate({left : "0"},300) ;  // 300ms后, 当前这张从右边到left:0
		$(".pic ul li").eq(_a).animate({left : "-100%"},300); // 同时, 上一张动画移到最左边
		_a = a;
		$(".nav ul li").eq(a).addClass("selectEd").siblings().removeClass("selectEd");
	}
	var timer = setInterval(timerStartBanner,time);

	$("#main").mouseover(function(){
		clearInterval(timer)

		for(var a = 0;a<20;a++){
			//clearInterval(a)
		}
	}).mouseout(function(){
		timer = setInterval(timerStartBanner,time);
	});

	$(".nav ul li").click(function(){
		$(this).addClass("selectEd").siblings().removeClass("selectEd");
		a = $(this).index(); // index() 方法获取索引, 当前的索引
		if(a>_a){
			$(".pic ul li").eq(a).css("left","100%") ;
			$(".pic ul li").eq(a).animate({left : "0px"},300) ;
			$(".pic ul li").eq(_a).animate({left : "-100%"},300);
			_a = a;
		}else if(a<_a){
			$(".pic ul li").eq(a).css("left","-100%") ;
			$(".pic ul li").eq(a).animate({left : "0px"},300) ;
			$(".pic ul li").eq(_a).animate({left : "100%"},300);
			_a = a;
		}
		console.log(a)
	});
	// 点击右边的按钮, 轮播向左运动
	$(".click_select_left").click(function(){
		a++;
		if(a>3){
			a = 0;
		};
		$(".pic ul li").eq(a).css("left","100%") ; // css方法设定的属性马上执行; 就算有动画也会马上执行
		$(".pic ul li").eq(a).animate({left : "0px"},300) ;
		$(".pic ul li").eq(_a).animate({left : "-100%"},300);
		_a = a;
		$(".nav ul li").eq(a).addClass("selectEd").siblings().removeClass("selectEd");
	});

	// 点击左边的按钮, 轮播向右运动
	$(".click_select_right").click(function(){
		a--;
		if(a<0){
			a = 3;
		}
		$(".pic ul li").eq(a).css("left","-100%") ;
		$(".pic ul li").eq(a).animate({left : "0px"},300) ;
		$(".pic ul li").eq(_a).animate({left : "100%"},300);
		_a = a;
		$(".nav ul li").eq(a).addClass("selectEd").siblings().removeClass("selectEd");
		console.info(a)
	});

	// 点击启动和停止
	//$(".nav span").click(function(){
	//	$(this).css("display","none").siblings().css("display","block");
	//	console.log($(this).index());
	//	if($(this).index() === 0){
	//		for(var a = 0;a<20;a++){
	//			clearTimeout(a);
	//		}
	//	}else{
	//		timer = setInterval(timerStartBanner,time);
	//	}
	//})
});



















