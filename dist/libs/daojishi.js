define(function(){
	  function countdownFn(el,time){
		// 未来的日期
		var future = new Date(time);
		// 现在的日期
		var nowTime = new Date();
		// 间隔的天数
		var spaceTime = (future - nowTime) / 1000 / 60 / 60 / 24;
		// 天
		var day = transFn(parseInt(spaceTime));
		// 时
		var hours = transFn(parseInt((spaceTime - day) * 24));
		// 带小数点的分钟
		var s_minutes = ((spaceTime - day) * 24 - hours) * 60;
		// 分钟
		var minutes = transFn(parseInt(s_minutes));
		// 秒数

		var seconds = transFn(parseInt((s_minutes - minutes) * 60));

		function transFn(t){
		    if(t < 10){
		        t = '0' + t;
		    }else{
		        t = t;
		    }
		    return t;
		}
        el.innerHTML = '<span>剩余:</span>' + '<i>'+((day*24) + -hours)+'</i>' + '<span>小时</span>' + '<i>'+minutes+'</i>' + '<span>分</span>' + '<i>'+seconds+'</i>' + '<span>秒</span>';

    }
    return{
    	countdownFn:countdownFn
    }
});
