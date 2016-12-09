(function($) {
    $.fn.extend({
    	fixCenter:function(){
    		var obj = $(this);
    		var x = ($(window).width()-obj.width())/2;
    		var y = ($(window).height()-obj.height())/2;
    		//y = y + getScrollTop() - 30;
    		 y = y + 30;
    		obj.css({"left": x+"px", "top": y+"px"});
    	}
    });
})(jQuery);

function showQRCode() {
	//$("#qrcode").show();
}

function hideQRCode() {
	$("#qrcode").hide();
}

function showOnlyPopUpLayer() {
	$("#pop_windown_over_layer").show();
}
function hideOnlyPopUpLayer() {
	$("#pop_windown_over_layer").hide();
}

function getScrollTop() {
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop) {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body) {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}