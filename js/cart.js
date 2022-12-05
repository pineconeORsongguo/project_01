$(function () {
  //全选按钮change事件
  $(".check_all").change(function () {
    $(".check_one, .check_all").prop("checked", $(this).prop("checked"));
    //当全选按钮选上时，所有的盒子都添加背景颜色
    $(this).prop("checked") == true
      ? $(".product_content").addClass("bgc")
      : $(".product_content").removeClass("bgc");
    getSum();
  });
  //单选框change事件
  $(".check_one").change(function () {
    //当被选中的个数等于全部选框的个数时 单选框全选上则全选按钮也被选上
    $(".check_one:checked").length == $(".check_one").length
      ? $(".check_all").prop("checked", true)
      : $(".check_all").prop("checked", false);
    //当被选中时当前盒子添加背景颜色
    $(this).prop("checked") == true
      ? $(this).parents(".product_content").addClass("bgc")
      : $(this).parents(".product_content").removeClass("bgc");
    getSum();
  });
  //增加商品数量点击事件
  $(".jia").click(function () {
    var n = $(this).siblings(".product_number").val();
    n++;
    $(this).siblings(".product_number").val(n);
    //增加小计的实现
    var p = $(this).parents("li").siblings(".price").text();
    p = p.substring(1);
    var pr = (n * p).toFixed(2);
    $(this)
      .parents("li")
      .siblings(".subtotal")
      .text("￥" + pr);
    getSum();
  });
  //减少商品数量点击事件
  $(".jian").click(function () {
    var n = $(this).siblings(".product_number").val();
    if (n == 1) {
      return false;
    }
    n--;
    $(this).siblings(".product_number").val(n);
    //减少小计的实现
    var p = $(this).parents("li").siblings(".price").text();
    p = p.substring(1);
    var pr = (n * p).toFixed(2);
    $(this)
      .parents("li")
      .siblings(".subtotal")
      .text("￥" + pr);
    getSum();
  });
  //用户直接在文本框输入值change小计事件
  $(".product_number").change(function () {
    var n = $(this).val();
    var p = $(this).parents("li").siblings(".price").text();
    p = p.substring(1);
    var pr = (n * p).toFixed(2);
    $(this)
      .parents("li")
      .siblings(".subtotal")
      .text("￥" + pr);
    getSum();
  });
  //单个商品删除点击事件
  $(".delete").click(function () {
    $(this).parents(".product_content").remove();
    getSum();
  });
  //选中商品删除事件
  $(".deletes").click(function () {
    $(".check_one:checked").parents(".product_content").remove();
    $(".check_all").prop("checked", false);
    getSum();
  });
  //清空购物车事件
  $(".car_empty").click(function () {
    $(".product_content").remove();
    $(".check_all").prop("checked", false);
    getSum();
  });
  getSum();
  //封装一个函数
  function getSum() {
    var sum = 0;
    var money = 0;
    //总件数
    $(".check_one:checked")
      .parents("li")
      .siblings("li")
      .find(".product_number")
      .each(function (i, ele) {
        sum += parseInt($(ele).val());
      });
    $(".sum_number").text(sum);
    //总钱数
    $(".check_one:checked")
      .parents("li")
      .siblings(".subtotal")
      .each(function (i, ele) {
        money += parseFloat($(ele).text().substring(1));
      });
    $(".sum_price").text("￥" + money.toFixed(2));
  }
});
