
$(function () {
  var flag = true;
  toogleChange();
  colorChange();
  function colorChange() {
    $(".floor .w").each(function (i, ele) {
      if ($(document).scrollTop() >= $(ele).offset().top) {
        $(".fixedTool li")
          .eq(i)
          .addClass("bgc")
          .siblings("li")
          .removeClass("bgc");
      }
    });
  }
  //封装判断函数当前位置来决定是否返回顶部按钮的出现
  function toogleChange() {
    var toolTop = $(".recom").offset().top;
    $(document).scrollTop() >= toolTop
      ? $(".back").slideDown()
      : $(".back").slideUp();
  }
  //滑动到指定位置 返回顶部按钮的显示与出现
  $(window).scroll(function () {
      if($(document).scrollTop() < $(".fixedTool li").eq(0).offset().top){
          $(".fixedTool li").removeClass("bgc");
      }
    toogleChange();
    //当页面滑动到指定区域相应的按钮添加类
    if (flag) {
      colorChange();
        }
      });
  //返回顶部按钮的点击事件
  $(".back").click(function () {
    flag = false;
    $("body, html")
      .stop()
      .animate(
        {
          scrollTop: 0,
        },
        function () {
          flag = true;
        }
      );
    $(".fixedTool li").removeClass("bgc");
  });
  //按钮的点击事件
  $(".fixedTool li").click(function () {
    flag = false;
    var index = $(this).index();
    var long = $(".floor .w").eq(index).offset().top;
    //   滑动动画效果
    $("body, html")
      .stop()
      .animate(
        {
          scrollTop: long,
        },
        function () {
          flag = true;
        }
      );
    //当前的按钮添加类
    $(this).addClass("bgc").siblings().removeClass("bgc");
  });
});

