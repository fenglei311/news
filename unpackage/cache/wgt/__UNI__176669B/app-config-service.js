
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/Video/Video","pages/FangYi/FangYi","pages/center/center","pages/Login/Login","pages/index/content"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#D52525","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#F8F8F8","selectedColor":"#0D00FF","borderStyle":"black","backgroundColor":"#D52525","list":[{"pagePath":"pages/index/index","iconPath":"static/index.png","selectedIconPath":"static/index-select.png","text":"首页"},{"pagePath":"pages/Video/Video","iconPath":"static/video.png","selectedIconPath":"static/video-select.png","text":"视频"},{"pagePath":"pages/FangYi/FangYi","iconPath":"static/illprevent.png","selectedIconPath":"static/illprevent-select.png","text":"防疫"},{"pagePath":"pages/center/center","iconPath":"static/my.png","selectedIconPath":"static/my-select.png","text":"个人中心"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"风雷","compilerVersion":"3.3.13","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationBarBackgroundColor":"#D52525","enablePullDownRefresh":true}},{"path":"/pages/Video/Video","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"视频","navigationBarBackgroundColor":"#D52525","enablePullDownRefresh":false}},{"path":"/pages/FangYi/FangYi","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"防疫","navigationBarBackgroundColor":"#D52525","enablePullDownRefresh":false}},{"path":"/pages/center/center","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","navigationBarBackgroundColor":"#D52525","enablePullDownRefresh":false}},{"path":"/pages/Login/Login","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false}},{"path":"/pages/index/content","meta":{},"window":{"navigationBarTitleText":"新闻详情","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});