
<!-- <input type="text" onchange="javascript:guest();"> -->


<div class="topnav" id="myTopnav">
  <a href="page1.html" "target"="_black">主页</a>
  <a href="#news">新闻</a>
  <a href="#contact">联系方式</a>
  <a href="#about">关于我们</a>
  <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
  <link rel="stylesheet" href="test.css">
</div>
<div style="padding-left:16px">
  <h2>响应式顶部导航实例</h2>
  <p>此处是页面内容。</p>
</div>



<html>
<head> 
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
</head>
<body>

<h1>我的第一个 JavaScript </h1>

<p id="demo">
JavaScript 可以触发事件，就像按钮点击。</p>

<script>
function myFunction()
{
	document.getElementById("demo").innerHTML="Hello JavaScript!";
}
</script>

<script type="text/javascript" charset="utf-8">
		mui.init({
    subpages:[{
      url:'html/content.html',//根据自己的目录修改
      id:'content.html',//随意
      styles:{
        top:'45px',//mui标题栏默认高度为45px；
        bottom:'0px'//默认为0px，可不定义；
      }
    }]
  });
</script>


<button type="button" onclick="myFunction()">点我</button>

</body>
</html>



