$(function(){
	$("#loginSubmit").click(function(){
		if(required("j_account")&&required("j_code")&&required("j_password")){
			$(this).attr("type","submit");
		}
	});
	function required (id) {
		var node = $('#'+id+'');
		var value = node.val().trim();
		if(value == ""){
			node.focus();
			$(".errorTip").css("display","block").text("必填项目不能为空！");
			return false;
		}else{
			$(".errorTip").css("display","none");
			return true ;
		}
	}
});