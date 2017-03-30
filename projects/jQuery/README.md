jQuery的使用
==================


Contents <a id="contents"></a>
-----------------

* [jq_01.html - jQuery 选择器](#jq_01)
* [jq_02.html - jQuery 操作类名](#jq_02)
* [jq_03.html - jQuery 操作元素的内容](#jq_03)
* [jq_04.html - jQuery 操作元素的属性](#jq_04)
* [jq_animatie_05.html - jQuery 动画函数](#jq_05)
* [jq_css_06.html - jQuery css函数](#jq_06)
* [jq_attri_07.html - jQuery 常用元素的属性](#jq_07)
* [jq_event_08.html - jQuery 事件函数](#jq_08)
* [jq_demo_nav_09.html](#jq_09)
* [jq_dom_10.html - jQuery DOM 操作](#jq_10)
* [jq_parent_11.html - jQuery 节点关系函数](#jq_11)
* [jq_demo_msgboard_12.html](#jq_12)
* [jq_demo_progress_13.html](#jq_13)





jq_01.html <a id="jq_01">
---------------------------


### 1.1、 什么是`jQuery`？
>`jQuery`是一个对原生JS封装的类库，使用JQ来开发，会加快速度和高效，
>
>`jQuery`封装的时候，考虑到了一些js兼容性问题。
>
>`jQuery1.*` ： 封装的时候，兼容ie低版本（1.7）
>
>`jQuery2.*` ： 没有兼容ie低版本。
>
>`JQuery`可以在线使用，也可以下载下来放到本地。

```html
<!-- 引入jquery -->
<script src="../js/jquery-3.1.0.min.js" type="text/javascript"></script>
```


### 1.2、 `jQuery` 支持的选择器 

`jQuery` 查找元素，都是通过$(),这个函数进行查找的
    语法：
        $("选择器"); 而且获得的元素，即使有一个，也是在数组中

    支持的选择器类型：
                基本选择器
                元素选择器
                类选择器
                id 选择器
                * 选择器（所有的元素）
                群组选择器

通过`JQuery`的方法获取出来的是`jQuery`的操作对象（数组）
 


```js
// id选择器
var p1=$("#p1");
console.log(p1);     //id选择器
    /*
        *  [p#p1]
        *     0: p#p1
        *     length: 1
        *     __proto__: Object(0)
        */  


// 标签选择器
onsole.log($("p"));   //标签选择器
/**
  * [p#p1, p.p2, p, p.p4, p#div_p1, p#div_p2, p, p, prevObject: r.fn.init(1)]
  */


console.log($(".p2"));     //类选择器
console.log($("body *"));  //*选择器
console.log($(".p2,#p1")); //群组选择器
```



### 1.3、 层次选择器

>   
>后代选择器
>
>父子选择器
>
>相邻兄弟选择器
>
>兄弟选择器

注： 兄弟选择器，只能是该元素后面的元素

```js
console.log("--层次选择器--------------------");
console.log($("#div1 p"));    //后代选择器，指定后代标签类型是p标签
console.log($("#div1>p"));    
console.log($("#div_p2+"));   //相邻兄弟选择器，只能是该元素后面的元素
console.log($("#div_p2~p"));  //兄弟选择器，指定标签类型是p标签，只能是该元素后面的元素
```


### 1.4、 属性选择器

>`[属性名]`           ：选取带有该属性名的元素
>
>`[属性名="属性值"]`   ：选取对应属性名，并且属性值是我们写的属性值的元素
>
>`[属性名*="属性值"]`  ：选取只要包含该属性值的元素（没必要是完整的单词）
>

>JQuery新增：
>
>`[属性名^="属性值"]`  ：选取元素的属性值必须是以我们设置的属性值开头的
>
>`[属性名$="属性值"]`  ：选取元素的属性值必须是以我们设置的属性值结尾的
>
>`[属性名!="属性值"]`  ：选取属性值不是我们设置的值的元素
>
>`[属性选择器][属性选择器]...[属性选择器]` ：复合属性选择器，选取的元素，必须同时满足上面的条件    


```js
console.log("--属性选择器--------------------");   
console.log($("[name]"));
console.log($("[name='111']"));
console.log($("[name*='1']"));

console.log($("[name^='1']"));
console.log($("[name$='1']"));
console.log($("[name!='111']"));    //选取所有属性值不为1的元素
console.log($("[name!='122'][name]")); //复合选择器
```



### 1.5、 伪类选择器
#### 1.5.1 结构伪类选择器

>`p:nth-child(n)`      ：选择p所在父级中的,正着数第n个p元素
>
>`p:nth-last-child(n)` ：选择p所在父级中的,倒着数第n个p元素
>
>`p:nth-child(n+5)`    ：选择p所在父级中的,正着数第n个p元素,以及第n之后的p元素
>
>`p:nth-child(5-n)`    ：选择p所在父级中的,正着数第n个p元素,以及第n之前的p元素
>
>`p:nth-child(2n+1)`   ：选择p所在父级中的,正着数第奇数个元素
>
>`p:nth-child(2n)`     ：选择p所在父级中的,正着数第偶数个元素
>
>`p:nth-child(odd)==p:nth-child(2n+1)`
>
>`p:nth-child(even)==p:nth-child(2n)`




>`p:nth-of-type(n)`       ：选择p所在父级中的,类型为p的正着数第n个元素
>
>`p:nth-last-of-type(n)`  ：选择p所在父级中的,类型为p倒着数第n个元素
>
>`p:first-child()`        ：选择p所在父级中,第一个,并且元素名为p的元素 == `p:nth-child(1)`
>
>`p:last-child()`         ：选择p所在父级中,最后一个,并且元素名为p的元素 
>
>`p:first-of-type`        ：选择p所在父级中的,类型为p的正数第1个元素,===`p:nth-of-type(1)`;
>
>`p:last-of-type`         ：选择p所在父级中的,类型为p的最后1个元素,



>JQ新增的选择器：
>
>`:first` 跟 `first-child` 的区别就是  ：只会匹配到第一个
>
>`:last`  ：匹配到最后一个
>
>`li:even` ：从0开始,匹配下标为偶数的li元素
>
>`li:odd`  ：从0开始,匹配下标为奇数的li元素
>
>`:eq(n)`  ：选择下标为n的元素,下标从0开始
>
>`:lt(n)`  ：选择下标为n之前的所有元素
>
>`:gt(n)`  ：选择下标为n之后的所有元素
>
>`:root`html元素





#### 1.5.2 否定伪类选择器
  `:not(选择器)`   ：选择不是我们设置选择器类型element元素

#### 1.5.3 目标伪类选择器
  `:target`       ：当我们url中出现#str时,我们使用ele:target伪类,就相当于找的是id为str的ele元素

#### 1.5.4 标题伪类选择器
  `:header`       ：匹配所有的header,h1-h6

#### 1.5.5 动画伪类选择器
  `:animate`      ：获取所有正在执行动画的元素

#### 1.5.6 语言伪类选择器
  `ele:lang(languge)` ：选择语言为language的ele元素,结合lang标签元素使用的

#### 1.5.7 内容伪类选择器
  `:content(text)`  ：选择所有内容为text的标签

  `:empty`          ：选择标签中没有内容的元素

  `:parent`         ：选择开始标签到结束标签有内容的元素

  `:has(selection)`  eg.:has(span)   ：选择内容包含span标签的元素

#### 1.5.8 表单伪类选择器
`:text`       ：选择文本输入框

`:input`      ：选择所有的输入框

`:radio`      ：选择所有的单选框

`:chechbox`   ：选择所有的复选框

`:submbit`    ：选择提交匡

`:button`     ：选择按钮框

`:reset`      ：选择重置按钮框

`:file`       ：选择文件按钮框

`:image`      ：选择图片按钮框

`:password`   ：选择密码输入框

#### 1.5.9 表单状态的伪类选择器
`:focus`    ：获取当前焦点的元素

`:checked`    ：获取当期选中的元素,如radio,和checkbox

`:disable`    ：获取不可用的表单元素

`:enable`    ：获取可用的表单元素

`:selected`   ：获取选择的元素

不仅仅针对表单：

`:visible`    ：获取所有的可见元素

`:hidden`    ：获取所有的隐藏元素(display:none)


```js       
console.log($('#div2 p:nth-child(1)'));
console.log($("#div2 p:nth-of-type(1)"));


//JQuery设置样式的函数
$("#div2 p:nth-of-type(1)").css("background","antiquewhite");
$("#div2 p:nth-last-of-type(1)").css("background","antiquewhite");


//新增
$("ul li:first-child").css("background","red");
$("ul li:lt(3)").css("background","red");
console.log($(":root"));
console.log($("#div1 p:not(#divP1)")); //否定伪类选择器


//给document添加一个点击事件
$(document).click(() => {
    console.log("👍");
    //目标伪类选择器的例子
    $("p:target").css("background","yellow");
});
$(":header").css("background","aqua");


//语言伪类选择器的例子
$("p:lang(en)").css("background","red");
console.log($("p:has(span)"));


//获取所有的文本输入框
console.log($(":text"));


//获取所有的隐藏元素
console.log($("div:hidden"));
```



jq_02.html <a id="jq_02">
---------------------------


### 2、 jQuery 对类名的操作

#### 2.1 给一个元素增加类名

`addClass("类名"|函数)` ：函数返回值还是 $("#p1")

##### 2.1.1 使用字符串添加类名

```js
$("#p1").addClass("one").addClass("two");
```



##### 2.1.2 使用函数添加类名

>如果 `$(selector)` 选择出来多个元素，那么，有几个元素，该函数触发几次.
>
>该函数有两个参数：
>
>    第一个参数：第几次执行的下标
>
>    第二个参数：以前的老类名
>
>    参数名可以随便写.
>
>添加新类名，只需要设置函数的返回值即可.

```js
$("#p1").addClass((index,value) => {
    console.log(index,value);
    return "three"+index;
});
$("span").addClass((i,v) => {
    console.log(i,v); //i是从0开始的
    if (i==2) {
        return "span2";
    }
});
```

##### 2.1.3 简单的代替方

`eq(n)` ：选取下标为n的元素，下标从0开始

```js
$("span").eq(1).addClass("span11");
```


#### 2.2 删除类名

`removeClass()` 

`toggleClass()` ： 
   当我们填入的类名，元素上不存在时，此时就是添加类名;
   如果存在，就删除该属性;

`toggleClass("参数",bool值)` ：
   当bool值为true的时候，就是添加类名;
   为false时，就是删除类名;

```js         
          
$("#p1").removeClass("one").removeClass("two");
//使用函数进行删除
$("#p1").removeClass((i,v) => {
    console.log(i,v);
    return "three0";
});
```

```js
$("#p1").toggleClass("one");
$("#p1").toggleClass("two");
$("#p1").toggleClass("one",false);
```


jq_03.html <a id="jq_03">
---------------------------


### 3、 jQuery 操作元素的内容

#### 3.1 `html()`

等价于： `innerHtml`

`html("写入的内容"/函数)`

```js
$("p").html("😄");
$("p").html("<span>写入结构</span>");

//获取标签中的内容，只会获取第一个元素的内容
console.log($("p").eq(1).html());

//通过函数写入内容
$("p").html((i,v) => {
    console.log(i,v);
    if(i==2){
        return "函数写入";
    }
});
```


#### 3.2 text() 

等价于 `innerText`

```js
$("p").eq(0).text("<a>超链接</a>");

//获取文本内容，只获取文本内容
console.log($("p").eq(1).text());
$("p").eq(2).text((i,v) => {
    console.log(i,v);
    //想要设置新值，就得使用return，把新值返回
});
```

#### 3.3 val()

`val("赋值的内容"/函数)`

```js
//先给按钮添加一个点击事件
$("#setValue").click(() => {
    //给输入框输入一个内容
    $(":text").val("Hello");
    //通过函数赋值
    $(":text").val((i,v) => {
        return "World";
    });
    //获取文本框内容
    console.log($(":text").val());
});
```


jq_04.html <a id="jq_04">
---------------------------

### 4、 jQuery 操作元素的属性

#### 4.1 添加自定义属性
 
`attr()`   ：该函数可以自定义属性

语法：`attr(属性名,属性值/函数)`

给一个元素添加一个自定义属性

```js
$("#p1").attr("name","add");
$("#p1").attr("name","aaa"); //更改
$("#p1").attr({
    gender: "girl",
    height: "170",
});
$("#p1").attr("weight", () => {
    return "90";
});
```

#### 4.2 删除自定义属性

```js
$("#p1").removeAttr("weight");
```

#### 4.3 修改属性值

`attr()`

`prop()` ：只能操作元素自带的属性

```js
$("#p1").attr("height","171");
$("#p1").prop("address","BeiJing");
$("#p1").prop("class","");
```

#### 4.4 元素属性值的获取

`attr("属性名");`

`prop("属性名");`

```js
console.log($("#p1").attr("gender"));

//使用：点击一个按钮，让div旋转180deg（结合动画），通过添加类名的形式，完成动画
$(":button").click(() => {
    //让div1发生旋转动画
    $("#div1").addClass("add").addClass("animateStart");
});        
```


jq_animatie_05.html <a id="jq_05">
---------------------------

### 5、 JQuery 动画

#### 5.1 隐藏元素
 
* `hide(参数1,参数2,参数3)`

>参数1：动画执行时间，`"fast"`,`"nomal"`,`"slow"`,确切的时间eg.1000,单位是`ms` 
>
>参数2：变化速率，`"swing"`(慢-快-慢),`"linear"`,默认值swing,可以省略
>
>参数3：动画完成之后，回调函数,只有动画完成时，该函数才会触发


* `hide()`

参数不写时，没有动画，直接隐藏.

支持修改的属性值， `height`,`width`,`opacity`,`display`

* `show()`   ：显示

* `toggle()` ：隐藏/显示

```js
$("#hidden").click(() => {
    $("#one").hide("fast","swing",() => {
        console.log("one元素，隐藏动画完成了....");
    });
});
$("#show").click(() => {
    $("#one").show("slow",() => {
        console.log("one元素，显示动画完成....");
    });
});
var isFirst = true;
$("#toggle").click(() => {
    $("#two").toggle(1000, () => {
        isFirst ? $("#toggle").val("显示") : $("#toggle").val("隐藏");
        isFirst = !isFirst;
    });
});
```

#### 5.2 淡变

* `fadeOut()`   ：淡出(opacity,当opacity为0时，display:none)

* `fadeIn()`    ：淡入

* `fadeToggle()`：淡入/淡出


变淡到什么程度：
    
* `fadeTo(参数1,参数2,参数3)`

>参数1：时长
>
>参数2：指定透明度，最终透明度
>
>参数3：回调函数


```js
$("#fadeOut").click(() => {
    $("#two").fadeOut("slow");
});
$("#fadeIn").click(() => {
    $("#two").fadeIn("slow");
});
$("#fadeToggle").click(() => {
    $("#two").fadeToggle("slow");
});

$("#fadeTo").click(() => {
    $("#two").fadeTo("slow",0.3,() => {
        console.log("变淡到指定程度，动画执行完毕.....");
    });
});
```



#### 5.3 滑动动画

改变元素的 height 属性，display:none

* 上滑： `slideUp()` 

> 参数：时长/变化速率/function

* 下滑： `slideDown()` 

* 上滑 / 下滑： `slideToggle()` 


```js
$("#slideUp").click(() => {
    $("#two").slideUp(5000,"linear",() => {
        console.log("上滑，动画执行完毕");
    });
});
$("#slideDown").click(() => {
    $("#two").slideDown(5000,"linear",() => {
        console.log("下滑，动画执行完毕....");
    });
}); 
$("#slideupOrDown").click(() => {
    $("#two").slideToggle(5000,"linear",() => {
        console.log("上滑动或下滑动，动画执行完毕.....");
    });
});
```


#### 5.4 自定义动画函数
   
`animate(属性列表,动画时长,变化曲线,回调函数)`

注意：不要通过animate(),设置transform，没有效果.

>队列动画：
>
>当我们对一个元素，设置多组动画，这些动画并不是同时执行，而是按照我们添加顺序，依次来执行。


```js
$("#custom1").click(() => {
    //自定义动画1
    $("#three").animate(
        {width:"500",fontSize:"30",height:"300"},
        2000,"swing",() => {
            console.log("自定义动画1，动画完成.....");
        });
});
$("#custom2").click(() => {
    //自定义动画2
    $("#three").animate({width:"+=100",height:"-=10"},1000);
});
$("#custom3").click(() => {
    //自定义动画3 -> 队列动画
    $("#three").animate({width:"300"},2000);
    $("#three").animate({height:"300"},2000);
    $("#three").animate({width:"100"},2000);
    $("#three").animate({height:"100"},2000);
});
```

#### 5.5 对动画进行流程控制
  
* `stop(参数1,参数2)`

>参数1： `stopAll` ， 是否清除对列中的动画
>
>参数2： `goToEnd` ， 是否立刻结束本次动画，立刻停止到动画的最终位置

>`goToEnd` 作用： 并不是中途停止动画，而是立刻让动画执行完毕。
>
>`stopAll` 作用： 清除队列中等待执行的动画。


注：参数的默认值都是fasle


* `stop(false,false)`
> 每当执行到该代码时，就会停止当前队列中正在执行的动画，开始队列中的下一个动画

```js
$("#stop").click(() => {
    // $("#three").stop(false,false);
    // $("#three").stop(false,true);
    // $("#three").stop(true,false);
    $("#three").stop(true,true);
});
```

#### 5.6 注意

>动画的返回值，还相当于该元素本身.


```js
$("#two").slideDown;
//在该行代码中，给$("#two")元素添加一个slideDown动画，该slideDown()返回值是$("#two")本身,

//那么就可以写成链式语法的形式：
$("#two").slideDown().slideDown();
//相当于：
$("#two").slideDown();
$("#two").slideDown();
```


jq_css_06.html <a id="jq_06">
---------------------------

### 6、 jQuery 中的css函数
  
* `css("属性名")` ：获取属性值. 

>可以获取样式表中的属性
>
>也可以获取写在行间style标签属性中的属性值


* `css("属性名","属性值")` ：设置样式


```js
         console.log($("#div1").css("width"));
         //使用css函数设置样式
         $("#div1").css("color","aqua").addClass("div1");

         //同时设置多组属性
         $("#div1").css({
             border:"1px solid black",
             textAlign:"center"
         });
         //支持属性值是个函数
         $("#div1").css("height",(i,v) => {
             console.log(i,v);
             return 200;
         });

        //设置width变成原来的大小，增加50
        //方案1：
        $("#div1").css({
            width:"+=50"
        });

        //方案2：
        $("#div1").css("height",(i,v) => {
            //设置新高度
            console.log(v);
            return parseFloat(v)+50;
        });

        $("#div1").css({
            width:(i,v) => {
                return (i+1)*50;
            },
        });
```


js中从字符串中截取数字：

* `parseInt()` / `parseFloat()`

>当参数是字符串的时候，字符串值必须是数字开头
>
>`parseInt()` 会提取整数部分
>
>`parseFloat()` 会提取整数部分+小数部分

* `number.toFixed(n)`   

>让number变量的值保留n位小数


```js
var str1 = "12.456674px";
var num1 = 12.4545;
var num2 = 12;
console.log(parseInt(str1));
console.log(parseFloat(str1));
console.log(parseInt(num1));
console.log(parseFloat(num2));

console.log(num1.toFixed(2),typeof num1.toFixed(2));
```


jq_attri_07.html <a id="jq_07">
---------------------------


### 7、 jQuery 常用元素的属性

#### 7.1 关于元素宽度的属性的函数：

`width()`             ：div的内容的宽度

`innerWidth()`        ：内容宽度+padding（左右）

`outerWidth()`        ：内容宽度+padding（左右）+border（左右）

`outerWidth(true)`    ：参数的意思就是是否算上 margin

#### 7.2 关于元素高度的属性的函数：

`height()`            ：div的内容的高度

`innerHeight()`       ：内容高度+padding（上下）

`outerHeight()`       ：内容高度+padding（上下）+border（上下）

`outerHeight(true)`   ：参数意思就是是否算上 margin


```js
console.log($("#div1").width(),$("#div1").height());
console.log($("#div1").innerWidth(),$("#div1").innerHeight());
console.log($("#div1").outerWidth(),$("#div1").outerHeight());
console.log($("#div1").outerWidth(true),$("#div1").outerHeight(true));
```

#### 7.3 `offset()`

>当前元素基于页面的位置.

>获取元素到页面顶部的距离 ： `$("#div1").offset().top`
>
>获取元素到页面左边的距离 ： `$("#div1").offset().left`

```js
console.log($("#div1").offset());
console.log($("#div1").offset().top);
console.log($("#div1").offset().left);
//设置offset的值
$("#div1").offset({
    left:"1000",
    top:"100"
});
```

#### 7.4 `position()` 

>当前元素距离最近的定位父级之间的距离
>
>当没有定位父级的时候，就是元素到页面左上角的距离

注意：不建议对`position()`进行赋值操作

```js
console.log($("#div2").position());
console.log($("#box").position());
```

#### 7.5 滚动条位置

`scrollTop()`  ：获取和设置元素中垂直滚动条的位置

`scrollLeft()` ：获取和设置元素中水平滚动条的位置
 
 >对元素使用这两个属性的时候，保证该元素存在滚动条


`$("body")`  ：jquery获取body对象，jquery对象

>`document.body`原生`body`对象，是不能直接调用`jquery`中的函数的，必须要进行转化.

> `$(原生对象)` ：把原生对象转化成jquery对象


```js          
$("#box").click((event) => {
    console.log($("body").scrollLeft());
    console.log($("body").scrollTop());
    
    //阻止事件冒泡
    //方法1：只是阻止冒泡
    // event.stopPropagation();
    //方法2：不仅可以取消默认操作，而且可以阻止事件冒泡
    return false;
});

//给滚动条设置值
$(document).click(() => {
    //设置滚动条回到左上角
    $("body").scrollLeft(0);
    $("body").scrollTop(0);
});
```


jq_event_08.html <a id="jq_08">
---------------------------

### 8. `jquery` 事件函数

#### 8.1 `$(document).ready()`  加载事件开始

只要`DOM`结构完成（页面的元素，被加载之后，形成`DOM`树之后）就会触发。时间早于`window.onload` 

`js`中事件有冒泡，`jquery`中也有。


* `jquery`中给事件绑定执行函数的两种方式：

>语法1：
    `jquery对象.事件名(函数/匿名函数);`

>语法2：
    `jquery对象.on("事件名1 事件名2 ...","selector(可以省略)",执行函数);`


通过`jquery`给事件绑定执行函数的两个方案，每次调用的时候都会绑定，后面的函数不会覆盖前面的函数.  


* `jquery`解除给事件绑定的函数：
     `jquery对象.off("事件名称","Selector,可以省略",解除那个函数);`
>如果参数只写一个参数名称， 会把该事件绑定的全部执行函数都解除绑定.
>
>写成匿名函数的，只能通过**"事件名称"**，来解除绑定，自己写的函数，可以明确指定，解除绑定


```js
window.onload = function(){
    //onload触发时机是：不仅要等待页面的元素全部加载完成，
    //而且要等待，引入的外部文件加载成功，而且等待图片完全显示，该事件的执行函数，才会执行
    console.log("window.onload，页面加载完毕....");
}

$(document).ready(() => {
console.log("$(document).ready，DOM加载完毕....");
});
```

#### 8.2 `click` 单击事件

```js
$("#one").click(clickFunc);
function clickFunc(event){
    console.log("你点击了one 一下",event.clientX,event.clientY);
}
$("#two").on("click",() => {
    console.log("点击了two");
});
$("#one").click(() => {
    console.log("点击了one");
});
$("#one").off("click",clickFunc);
```

#### 8.3 绑定一次性事件

```js
$("#one").one("click",() => {
    console.log("绑定一次性事件，点击....");
});
```


#### 8.4 事件

`mousedown()`   
`mouseup()`    
`mousemove()`    
`mouseenter()`    
`mouseleave()`    

> 上面的事件没有事件冒泡，还是js的特性

`mouseover`     
`mouseout`     
   

* 键盘事件：

`keydown`
`keyup`
`keypress`

* 元素状态的一些事件：

`focus`   ：获得焦点的事件

`blur`    ：失去焦点的事件

`change`  ：内容值改变的时候的事件

`select`  ：选中内容的时候


```js
$(document).keydown((event) => {
    /**
    * 使用按钮按键值的时候，可以使用原生的keycode属性，
    * 但是，最好使用jquery封装的which（考虑了兼容写法）
    */
    console.log(event.which); //打印keycode值
});
$("#menu").change(() => {
    console.log("内容值改变了");
});
$("#user").select(() => {
    console.log("内容被选中了");
});
```

#### 8.5 `js`混合`jquery`

`jquery`对象 -> `js`对象

`[]` 根据下标取出数组中的元素

使用`jquery`提供的`getIndex(n)`,取出下标为n的元素


```js
console.log($("#three").get(0));
var threeDiv = $("#three").get(0);//js对象
$("#three").mousedown((ev) => {
    var disX = ev.clientX - threeDiv.offsetLeft;
    var disY = ev.clientY - threeDiv.offsetTop;

    $(document).mousemove((ev) => {
        threeDiv.style.left = ev.clientX - disX + "px";
        threeDiv.style.top = ev.clientY - disY + "px";
    });
    $(document).mouseup((ev) => {
        $(document).off("mousemove mouseup");
    });
});
```

#### 8.6 拖拽

```js
$("#three").mousedown(function(ev){ //此处不能使用=>函数
    var disX = ev.clientX - $("#three").offset().left;
    var disY = ev.clientY - $(this).offset().top;
    $(document).mousemove((ev) => {
        var x = ev.clientX - disX;
        var y = ev.clientY - disY;
        //设置给 offset()
        $("#three").offset({
            left:x,
            top:y
        });
    });
    $(document).mouseup((ev) => {
        $(document).off("mousemove mouseup");
    });
});
```

#### 8.7 `event`事件对象常用知识点

* `which`属性
>`which` ： 1 -> 左键   2 -> 滚轮键  3 -> 右键



>`target`           ：真正的事件源
>
>`currentTarget`    ：指的是当前执行事件的元素
>
>`ev.type`          ：判断事件的类型



>`ev.stopPropagation()`     ：取消冒泡
>
>`ev.preventDefault()`      ：取消默认操作


```js
console.log("event事件对象......");
$("#div1").mousedown(function (ev){
    console.log(ev.which);
    //取消默认操作
    //方法1： 该方法不仅取消默认操作， 而且取消事件冒泡
    return false;
    //方法2：只是取消默认操作
    ev.preventDefault();
    //只是阻止冒泡：
// ev.stopPropagation();
});

$("#div2").click(function(){
    //点击位置到当前页面左上角的位置
    console.log(event.pageX,event.pageY);
    //点击位置到浏览器的左上角
    console.log(event.clientX,event.clientY);
});

$("#div3").click(function(ev){
    console.log(ev.currentTarget,ev.target + ".......div3");
    console.log(ev.type + "....type....div3"); //click....type....div3
});
$("#inner").click(function(ev){
    console.log(ev.currentTarget,ev.target + "......inner");
});      
```



jq_demo_nav_09.html <a id="jq_09">
---------------------------


jq_dom_10.html <a id="jq_10">
---------------------------

### 10、 DOM 操作

#### 10.1 创建元素

```js
var p = "<p><span>www.mengyueping.com</span></p>";
```

#### 10.2 添加元素
##### 10.2.1 

`append(参数`)  ：参数就是我们写的字符串.

`a.append(b)`   ：把b添加到a中的尾部.

`A.appendTo(B)`   ：把A添加到B中的尾部.
A为`jquery`对象

```js
$("body").append(p);
$(p).appendTo($("#div1"));
```

##### 10.2.2 

`a.prepend(b)`    ：在a元素内部的前面添加b元素

`b.prependTo(a)`  ：把b元素添加到a元素内部的前面


```js
var aDiv = "<div>前面追加div</div>";
//添加到body中的最前面
$("body").prepend(aDiv);
$(aDiv).prependTo($("#div1"));
```


#### 10.2.3 

`a.after(b)`          ：把b元素添加到a元素外面的下面

`b.insertAfter(a)`    ：把b元素添加到a元素外面的下面

```js
var a1 = "<a href='###'>点击</a>";
$("body").after(a1);

$(a1).insertAfter($("#div1"));
```

#### 10.2.4 

`before`

`insertBefore`

```js
var span1 = "<span>www</span>";
$("body").before(span1);
$("span1").insertBefore($("#div1"));
```


#### 10.2.5 

`a.wrap(b)`       ：用b元素包裹每一个a

`a.wrapAll(b)`    ：用b元素包裹住所有的a（把所有的a元素包裹到一个b元素中）

`a.wrapInner(b)`  ：用b元素包裹a元素中的内容

```js
var em1 = "<em></em>"; //使用em包裹span
$("span").wrap(em1);
//  $("span").wrapAll(em1);
```


#### 10.3 删除

`remove()`   ：不仅删除元素，与元素关联的事件也会被删除

`detach()`   ：只删除元素，返回值是该元素本身


```js
console.log($("a").eq(0).remove());
$("#btn").click(() => {
    console.log("点击btn");
});
var delBtn = $("#btn").detach();
$("body").append(delBtn);
```

#### 10.4 替换

`a.replaceWith(b)`    ：用b元素替换a元素

`a.replaceAll(b)`     ：用a元素替换所有的b元素. 
b参数："选择器"


```js
var span2 = "<span>替换span标签</span>";
//   $("a").replaceWith(span2);
$(span2).replaceAll("a");
```

#### 10.5 遍历节点

`each`函数

```js
$("div").each(function(index,element){
    //index   ： 下标
    //element ： 元素（js）
    console.log(index,element);
    switch(index){
        case 0:
            $(element).css("background","red");
            break;
        case 1:
            $(element).css("background","yellow");
            break;
        case 2:
            $(element).css("background","green");
            break;
        default:
            break;
    }
});
```


jq_parent_11.html <a id="jq_11">
---------------------------

### 11. 节点关系函数

`parent()`  ：父元素

`parents()` ：祖先元素
     参数可以选择，指定的祖先元素("选择器")

```js
console.log($("#one").parent());
console.log($("#child1").parents("#wrap"));    //获取指定的祖先元素
console.log($("#child1").parentsUntil("body"));//指定到哪个祖先元素之前停止
```


后代：

`children()` ：子元素，第一级子级。

`find()`     ：后代元素。参数：('选择器') 一定要指定参数

```js
console.log($("#wrap").children());
console.log($("#wrap").find("*"));
console.log($("#wrap").find("#one"));
```

兄弟：

`prev()`             ：向前找兄弟元素（相邻，并且是一个）

`prevAll()`          ：向前找所有的兄弟元素

`prevUntil("选择器")` ：向前找，截止到那个元素的兄弟元素

```js
console.log($("#three").prev());
console.log($("#three").prevAll());
console.log($("#three").prevUntil("#one"));
```


向后找

`next()`             ：向后找相邻的一个元素

`nextAll()`          ：向后找所有的兄弟元素

`nextUntil("选择器")` ：向后找指定到那个元素的兄弟元素

`siblings()`         ：所有的兄弟元素（无论向前向后）


```js
console.log($("#one").next());
console.log($("#one").nextAll());
console.log($("#one").nextUntil("#three"));
console.log($("#two").siblings());
```


jq_demo_msgboard_12.html <a id="jq_12">
---------------------------




jq_demo_progress_13.html <a id="jq_13">
---------------------------



