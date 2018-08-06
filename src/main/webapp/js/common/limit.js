$(function() {
	//登录账号限制
$(".loginCode").bind('input oninput', function() {
	
	var val = $(this).val();
	val = val.toString().replace(/[^\w\.\/]/ig,'');
	$(this).val(val);
});
//数据字典中文名
$(".dictName").bind('input oninput', function() {
	var val = $(this).val();
	val = val.toString().replace(/[^\d\u4E00-\u9FA5\s*\\(\\)\\（\\）]/g,'');
	$(this).val(val);
});
//数据字典英文名
$('.dictEnName').bind('input oninput', function() { 
	var val = $(this).val();
	val = val.toString().replace(/[^\w\.\/\\(\\)\\（\\）]/ig,'');
	$(this).val(val);
	});
//应付款编号输入限制
	$('.payableNo').bind('blur', function() {
		var reg =/[^\w\.\/\\(\\)\\（\\）]/ig;
		var str =$('.payableNo').val();
		console.info(str);
		if (reg.test(str)) {
			alertMsg.warn("不允许输入中文");
			$('.payableNo').val("");
		}
	});
	//应付款事务号输入限制
	$('.payableTransno').bind('blur', function() {
		var reg =/[^\w\\(\\)\\（\\）]/ig;
		var str =$('.payableTransno').val();
		if (reg.test(str)) {
			alertMsg.warn("不允许输入中文");
			$('.payableTransno').val("");
		}
	});
	//金额输入限制
	$('.drawAmount').bind('blur', function() {
		var reg = /^[0-9]*$/;
		var str =$('.drawAmount').val();
		if (!reg.test(str)) {
			alertMsg.warn("输入参数格式有误");
			$('.drawAmount').val("");
		}
	});
	//内转账号输入限制
	$('.ptTransAccntNo').bind('blur', function() {
		var reg =/(\d){12}/;
		var str =$('.ptTransAccntNo').val();
		if (!reg.test(str)) {
			alertMsg.warn("输入参数格式或参数长度有误");
			$('.ptTransAccntNo').val("");
		}
	});
	//备注字段长度限制
	//内转账号输入限制
	$('.remark').bind('blur', function() {
		var reg = /^.{0,80}$/;
		var str =$('.remark').val();
		if (!reg.test(str)) {
			alertMsg.warn("请输入不超过40字以下的内容");
			$('.remark').val("");
		}
	});
//正整数
$('.positiveInteger').bind('input oninput', function() { 
	var val = $(this).val();
	val = val.toString().replace(/[^\d]/ig,'');
	$(this).val(val);
	});
//父菜单
$('.faMenu').bind('input oninput', function() { 
	var val = $(this).val();
	val = val.toString().replace(/[^\w\.\/]/ig,'');
	$(this).val(val);
});


//数据字典子项编号
$(".subEntry").bind('input oninput', function() {
	
	var val = $(this).val();
	val = val.toString().replace(/[^\d]/ig,'');
	$(this).val(val);
});
//数据字典子项中文名
$(".subName").bind('input oninput', function() {
	var val = $(this).val();
	val = val.toString().replace(/[^\d\u4E00-\u9FA5\s*\\(\\)\\（\\）]/g,'');
	$(this).val(val);
});
//数据字典子项英文名
$('.subEnName').bind('input oninput', function() { 
	var val = $(this).val();
	val = val.toString().replace(/[^\w\.\/\s*\\(\\)\\（\\）]/ig,'');
	$(this).val(val);
	});
//天数
$('.dayInput').bind('input oninput', function() { 
	var val = $(this).val();
	if(val.substring(0,1)=='0'){
		$(this).val("0")
	}else{
		val = val.toString().replace(/[^\d]/ig,'');
		$(this).val(val);
	}
});
$('.dayInput').attr("maxLength","5");

//正整数(可以输入小数点)
$('.floatInput').bind('input oninput', function() { 
	var val = $(this).val();
	val = val.toString().replace(/[^\d\.]/ig,'');
	$(this).val(val);
	});
//金额限制
$('.AmountInput').bind('blur', function() { 
	var val = $(this).val();
	// 金额(38,6)正则表达式
	var reg = /(^[1-9]([0-9]{1,31})?(\.[0-9]{1,6})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9]){0,5}$)/;
	var money = val;
	if (!reg.test(money)) {
		alertMsg.warn('金额不合法');
		$(this).val("");
	}
});
//不可输入今日以前的日期
var myDate = new Date();
var result=myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate() ;
$('.canNotInputBeforNowDate').attr('minDate',result);
//不可输入今日以前的日期

});