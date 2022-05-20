# Test

<nav class="top-bar" data-topbar>
  <ul class="title-area">
    <li class="name">
      <!-- 如果你不需要标题或图标可以删掉它 -->
      <h1><a href="#">WebSiteName</a></h1>
    </li>
      <!-- 小屏幕上折叠按钮: 去掉 .menu-icon 类，可以去除图标。 
      如果需要只显示图片，可以删除 "Menu" 文本 -->
    <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
  </ul>

  <section class="top-bar-section">
    <ul class="left">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li> 
    </ul>
  </section>
</nav>

<div style="padding:20px;">
  <h3>基本头部工具条实例</h3>
  <p>工具条是在页面头部的导航。</p>
  <p><strong>注意:</strong> 在小屏幕上工具条会被一个按钮取代 (重置窗口，查看效果)。</p>
  <p>在按钮被点击后导航项将显示。</p>
</div>

<!-- 初始化 Foundation JS -->
<script>
$(document).ready(function() {
    $(document).foundation();
})
</script>

</body>
</html>