/************************************************************
 * Confirm Modal Plugin V1.0
 * https://github.com/klutche/confirm_modal
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 ************************************************************/

$(function(){
	var modal = $(".modal");//モーダルウインドウのクラス
	var opacity = 0.9;//モーダル背景の透明度
	var button = $(".close_modal");//モーダル解除ボタンのクラス
	var limit = 120;//Cookieの有効期限(分)
	var cookie = $.cookie("modal");
	if(cookie !== "off"){
		var overlay = $("<div></div>");
		overlay.css({
			"position":"fixed",
			"z-index":100,
			"top":0,
			"left":0,
			"height":100+"%",
			"width":100+"%",
			"background":"#000",
			"opacity":opacity
		});
		$("body").append(overlay);
		modal.css("display", "block");
	}
	button.click(function(){
		$(overlay).fadeOut("slow");
		$(modal).hide();
		var clearTime = new Date();
		clearTime.setTime(clearTime.getTime()+(limit*60*1000));
		$.cookie("modal", "off", {expires:clearTime, path:"/"});
	});
	$(".remove_cookie").click(function(){
		$.removeCookie("modal", {expires:-1, path:"/"});
		location.reload();
	});
});
