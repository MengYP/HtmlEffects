function $(id) { return document.getElementById(id); }
/* 
 * 获得某盒子对象的样式属性值
 *  obj：对象
 * attr：样式属性
 * 
 * 返回传递过来的某个属性(值+px)
 */
function getStyle(obj,attr){
	if (obj.currentStyle) { //ie 等
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr]; //w3c浏览器
	}
}
/*
 * 封装多个属性的运动框架,添加回调函数
 *     obj：运动对象
 *    json： {k:v,k:v,.....}   eg：{top:500}，{width: 200, top: 800,left: 200}
 *      fn：回调函数。 动画结束，执行回调函数。
 */
function animate(obj,json,fn){
	clearInterval(obj.timer);

	obj.timer = setInterval(function(){
		var flag = true;
		for (var attr in json) {
			//1.获取当前值
			var current = 0;
			if (attr == "opacity") {
				current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
			}else{
				current = parseInt(getStyle(obj,attr));
			}
			//2.计算步长（遍历json获取目标值）
			var step = (json[attr] - current) /10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);

			if (attr == "opacity") { // 判断用户有没有输入 opacity

				if ("opacity" in obj.style) { //判断浏览器是否支持opacity
					obj.style.opacity = (current + step) / 100;
				}else{
					obj.style.filter = "alpha(opacity=" + (current+step)*10 + ")";
				}

			}else if (attr == "zIndex") {
				obj.style.zIndex = json[attr];
			}else{
				obj.style[attr] = current + step + "px";
			}

			if (current != json[attr]) {
				flag = false;
			}
		}

		if (flag) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
		}
	},30);
}