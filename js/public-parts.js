layui.use('jquery',function(){
	var $ = layui.$;

	var publicheaderhtml = '';
	publicheaderhtml+='<div class="header">';
	publicheaderhtml+='<ul class="app-header">';
	publicheaderhtml+='<li class="app-header-menuicon">';
	publicheaderhtml+='<i class="layui-icon layui-icon-more-vertical"></i>';
	publicheaderhtml+='</li>';
	publicheaderhtml+='</ul>';
	publicheaderhtml+='<a href="about.html">';
	publicheaderhtml+='<img style="width:60px;height:50px;float:right;margin-right:15px;margin-top:5px;" src="../images/index/logo.png">';
	publicheaderhtml+='</a>';
	publicheaderhtml+='<div class="nav" style="visibility: visible">';
	publicheaderhtml+='<a href="index.html" class="active">首页</a>';
	publicheaderhtml+='<a href="case.html">商品</a>';
	publicheaderhtml+='<a href="dynamic.html">最新动态</a>';
	publicheaderhtml+='<a href="about.html">关于我们</a>';
	publicheaderhtml+='</div>';
	publicheaderhtml+='<ul class="layui-nav header-down-nav">';
	publicheaderhtml+='<li class="layui-nav-item"><a href="index.html" class="active">首页</a></li>';
	publicheaderhtml+='<li class="layui-nav-item"><a href="case.html">商品</a></li>';
	publicheaderhtml+='<li class="layui-nav-item"><a href="dynamic.html">最新动态</a></li>';
	publicheaderhtml+='<li class="layui-nav-item"><a href="about.html">关于我们</a></li>';
	publicheaderhtml+='</ul>';
	publicheaderhtml+='</div>';

	$('.header_box').append(publicheaderhtml);

	var publicfooterhtml = '';
	publicfooterhtml+='<div class="line"></div>';
    publicfooterhtml+='<p class="copyright">';
  	publicfooterhtml+='@2016  ALL  香港-植蓓(CHIKPUI)<br />';
  	publicfooterhtml+='我的邮箱:15924432886@163.com<br />';
  	publicfooterhtml+='我的微信:18310332926<br />';
  	publicfooterhtml+='我的手机:18310332926';
	publicfooterhtml+='</p>';
    publicfooterhtml+='<div class="icon_box">';
  	publicfooterhtml+='<a href="#"><i class="layui-icon layui-icon-login-wechat weixin-icon"></i></a>';
  	publicfooterhtml+='<a href="#"><i class="layui-icon layui-icon-login-weibo weibo-icon"></i></a>';
	publicfooterhtml+='</div>';

	$('.footer').append(publicfooterhtml);

	var comebacktophtml = '';
	comebacktophtml+='<div class="comebacktop"><img src="../images/tubiao/comebacktop.png"></div>';
	$('body').append(comebacktophtml);
	$('.comebacktop').click(function(){
		window.scrollTo(0,0);
	})
});
