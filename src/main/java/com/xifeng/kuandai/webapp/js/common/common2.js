/*
$(function () {
    var pageInfoHeight = $(".pageinfo").height() + 2 || 0; //是否有底部分页
    var handleHeight = $(".handle").innerHeight() || 0;
    var searchBarHeight = $(".pageHeader").height() || 0;//是否有头部搜索
    if ($(".handle").height()) {
        handleHeight = 24;
    }
    var height = $(window).height() - 117 - pageInfoHeight - handleHeight -searchBarHeight;
    $(".content").height(height);
    //table颜色
    $("td").click(function () {
        tr = $(this).parent('tr');
        $(this).parent('tr').find("input[type='radio']").prop('checked', true);
        $(this).parent('tr').css("background", "#7cc5e5").siblings('tr').css("background", "transparent");
    })
});
//--------------------------数据字典查询功能--------------------------
function loadSelect() {
    $(".select").each(function () {
        var that = $(this);
        if(!that.attr("isLoad")){
            var url = '/control/dictionary/queryDictionarySubNameMap?entry=' + that.data('code');
            $.ajax({
                type: "get",
                url: url,
                async: false,
                success: function (res) {
                    res = JSON.parse(res);
                    res = res.dictSubNameMap;
                    for (var key in res) {
                        $("<option value='" + key + "'>" + res[key] + "</option>").appendTo(that);
                    }
                    that.attr("isLoad","true");
                },
                error: function (res) {
                    console.log("error" + res);
                }
            });
        }

    })
}
loadSelect();
// --------------------------加载常量类--------------------------
function loadConstant() {
    var types = $("[data-type]");
    types.each(function () {
        var that = $(this);
        	if(!that.attr("isLoad")){
        		if (that.attr("original-value")) {
        			var text = that.attr("original-value");
        		} else {
        			var text = that.html();
        		}
                var url = '/control/dictionary/queryDictionarySubNameMap?entry=' + that.data('type');
                if (text !== "") {
                    $.ajax({
                        type: "get",
                        url: url,
                        async: true,
                        success: function (res) {
                            res = JSON.parse(res);
                            res = res.dictSubNameMap;
                            for (var key in res) {
                                if (key == text) {
                                    that.text(res[key]);

                                }
                            }
                            that.attr("isLoad",true);
                        },
                        error: function (res) {
                            console.log("error" + res)
                        }
                    });
                }
        	}

    })
}
loadConstant();
// --------------------------核算币种下拉菜单查询功能--------------------------
$(function () {
    function loadCurrencySelect() {
        $(".currencySelect").each(function () {
            var that = $(this);
            if(!that.attr("isLoad")) {
                $.ajax({
                    type: "get",
                    url: "/fund/currency/querycurrencymap",
                    async: false,
                    success: function (data) {
                        data = JSON.parse(data);
                        data = data.currencyMap;
                        for (var key in data) {
                            if (data.hasOwnProperty(key)) {
                                $('<option value=' + key + '>' + data[key] + '</option>').appendTo(that);

                            }
                        }
                        that.attr("isLoad",true);
                    },
                    error: function (data) {
                        console.log("数据加载错误！")
                    }
                });
            }
        });
    }
    loadCurrencySelect();
})
// --------------------------结算款种类下拉菜单查询功能--------------------------
$(function() {
	function loadSettleTypeSelect() {
		$(".settleTypeSelect").each(function() {
			var that = $(this);
			if (!that.attr("isLoad")) {
				$.ajax({
					type : "get",
					url : "/fund/settletype/querysettletypemap",
					async : false,
					success : function(data) {
						data = JSON.parse(data);
						data = data.settleTypeMap;
						for ( var key in data) {
							if (data.hasOwnProperty(key)) {
								$('<option value=' + key + '>' + data[key] + '</option>').appendTo(that);
							}
						}
						that.attr("isLoad", true);
					},
					error : function(data) {
						console.log("数据加载错误！")
					}
				});
			}
		});
	}
	loadSettleTypeSelect();
});
//--------------------------支付途径下拉菜单查询功能--------------------------
$(function () {
    function loadPayWaySelect() {
        $(".payWaySelect").each(function () {
            var that = $(this);
            if(!that.attr("isLoad")) {
                $.ajax({
                    type: "get",
                    url: "/fund/payWay/querypaywaymap",
                    async: false,
                    success: function (data) {
                        data = JSON.parse(data);
                        data = data.payWayMap;
                        for (var key in data) {
                            if (data.hasOwnProperty(key)) {
                                $('<option value=' + key + '>' + data[key] + '</option>').appendTo(that);
                            }
                        }
                        that.attr("isLoad", true);
                    },
                    error: function (data) {
                        console.log(data);
                        console.log("数据加载错误！")
                    }
                });
            }
        });
    }
    loadPayWaySelect();
})

//select default
function defaultVal() {
    $("select[default-value]").each(function () {
        var defaultVal = $(this).attr("default-value");
        $(this).find('option').each(function () {
            if ($(this).val() == defaultVal) {
                $(this).attr("selected", "selected")
            }
        })
    })
}
defaultVal();

// jquery扩展插件
$.extend({
    tr: function (dom) {
        var tr;
        dom.find('input[type="radio"]').each(function () {
            if ($(this).is(":checked")) {
                tr = $(this).parents('tr');
            }
        })
        return tr;
    }
});
$.fn.extend({
    checkRequired: function () {
        var form = $(this);
        var result = true;
        var requiredStr = "";
        form.find('input').each(function () {
            if ($(this).hasClass('required') && $(this).val().trim() == "") {
                $(this).focus();
                $(this).css('border-color', '#f92b25');
                result = false;
               	if($(this).hasClass('date')){
               		if($(this).parents('i').length == 0){
               			requiredStr += $(this).siblings('label').html().replace(/(：)/g, "") + "、";
               		}else{
               			requiredStr += $(this).parents('i').siblings('label').html().replace(/(：)/g, "") + "、";
               		}
               	}else{
               		requiredStr += $(this).siblings('label').html().replace(/(：)/g, "") + "、";
               	}
                $(this).attr("dirty","dirty");
            } else {
                $(this).css('border-color', '#a2bac0 #b8d0d6 #b8d0d6 #a2bac0');
            }
        });
        form.find('select').each(function () {
            if ($(this).hasClass('required') && $(this).val() == "") {
                $(this).focus();
                $(this).css('border-color', '#f92b25');
                result = false;
                requiredStr += $(this).siblings('label').html().replace(/(：)/g, "") + "、";
                $(this).attr("dirty","dirty");
            } else {
                $(this).css('border-color', '#a2bac0 #b8d0d6 #b8d0d6 #a2bac0');
            }
        })
        		form.find('input').each(function() {
			if($(this).attr("dirty")){
				$(this).keyup(function(){
					if($(this).val() !=""){
						$(this).css('border-color', '#a2bac0 #b8d0d6 #b8d0d6 #a2bac0');
					}else{
						$(this).css('border-color', '#f92b25');
					}
				})
			}
		});
		form.find('select').each(function () {
			if($(this).attr("dirty")){
				$(this).change(function () {
					if($(this).val() !=""){
						$(this).css('border-color', '#a2bac0 #b8d0d6 #b8d0d6 #a2bac0');
					}else{
						$(this).css('border-color', '#f92b25');
					}
				})
			}
		})
        if (result == false) {
            requiredStr = requiredStr.substring(0, requiredStr.length - 1) + "为必填项目！"
            alertMsg.warn(requiredStr, []) //warn
        }
        return result;
    }
})
// 加载DATA

function reload(data) {
	for(var key in data) {
		$("input").each(function() {
			if($(this).attr('name') == key){
				if($(this).hasClass("date")){
					// 时间须进行Format
					if($(this).attr("dateFmt") == "yyyy-MM-dd"){
						if (!data[key]){
							$(this).val(data[key]);
						} else {
							var time = data[key].replace(/\-/g,"/");
							$(this).val(DateFormat.format(new Date(time), 'yyyy-MM-dd'));
						}
					}else if($(this).attr("dateFmt") == "HH:mm:ss"){
						if (!data[key]) {
							$(this).val('');
						} else {
							var str = "2000-01-01" +" " + data[key].trim();
							var time = DateFormat.format(new Date(str), 'yyyy-MM-dd hh:mm:ss');
							time = time.substring(11,time.length);
							$(this).val(time);
						}
					}else if($(this).attr("dateFmt") == "yyyy-MM-dd HH:mm:ss"){
						$(this).val(DateFormat.format(new Date(data[key]), 'yyyy-MM-dd hh:mm:ss'));
					}else if($(this).attr("dateFmt") == "yyyy-MM-dd hh:mm:ss"){
						$(this).val(DateFormat.format(new Date(data[key]), 'yyyy-MM-dd hh:mm:ss'));
					}
				}else{
					$(this).val(data[key]);
				}
			}
		});
		$("select").each(function() {
			if ($(this).attr('name') == key) {
				if(!$(this).hasClass('currencyText')) {
					$(this).find('option').each(function() {
						if ($(this).val() == data[key]) {
							$(this).prop('selected', true);
						}

					})
				} else {
					$(this).find('option').each(function() {
						var text = $(this).text();
						text = text.split("|")[0].trim();
						if (text == data[key]) {
							$(this).prop('selected', true);
						}
					})
				}
			}
		});

		$("textarea").each(function() {
			if ($(this).attr('name') == key) {
				$(this).html(data[key]);
				if($(this).attr('originalValue')){
					$(this).val($(this).attr('originalValue'));
				}
				$(this).attr('originalValue',$(this).val());
			}
		});
	}
}
// 重置数据
function refresh(that) {
	that.parents('form').find('input').each(function() {
		if(!$(this).attr('not-reset')) {
			$(this).val("");
		}
		if ($(this).attr('default-value')) {
			var defaultValue = $(this).attr('default-value');
			$(this).val(defaultValue);
		}
	});
	that.parents('form').find('select').each(function() {
		if (!$(this).attr('not-reset')) {
			$(this).find('option').each(function() {
				if ($(this).prop('selected')) {
					$(this).prop('selected', false);
				}
			});
			if ($(this).attr('default-value')) {
				var defaultValue = $(this).attr('default-value');
				$(this).find('option').each(function() {
					if ($(this).val() == defaultValue) {
						$(this).prop('selected', true);
					}
				});
			}
		}
	});
	that.parents('form').find('textarea').each(function() {
		if (!$(this).attr('not-reset')) {
			$(this).html("");
		}
		if ($(this).attr('default-value')) {
			var defaultValue = $(this).attr('default-value');
			$(this).val(defaultValue);
		}else{
			$(this).val("");
		}
	});
}
//--------------------------【RESET】按钮--------------------------
$('.reset').click(function(){
	refresh($(this));
	reload(data);
});

//获取父节点下的‘attr’属性值为‘attrValue’的节点
function getNode(parent, attr, attrValue) {
    var nodes = [];
    parent.find('*').each(function () {
        if ($(this).attr(attr) == attrValue) {
            nodes.push($(this));
        }
    });
    if (nodes.length > 1) {
        console.log('attr:' + attr + '  attrValue:' + attrValue);
        console.log('parent');
        console.log(parent);
        console.log('nodes');
        console.log(nodes);
        alert("节点不唯一！");
    } else if (nodes.length == 0) {
        console.log('attr:' + attr + '  attrValue:' + attrValue);
        alert("未找到节点！");
    } else {
        var node = nodes[0];
        return node;
    }
}

//获取父节点下的‘name’属性值为‘attrValue’的节点
function getNodeByName(parent, attrValue) {
    return getNode(parent, 'name', attrValue);
}

//获取某tr下attr属性值为attrValue的节点
function getTdDomByAttr (tr,attr,attrValue) {
    var td ;
    tr.find('td').each(function () {
        if($(this).attr(attr) == attrValue){
            td = $(this)
        }
    })
    return td;
}
//限制禁止输入非法字符'< >'
$("input").each(function() {
	$(this).keyup(function() {
		$(this).val($(this).val().replace(/[<>]/g, ""));
	})
})
$("textarea").each(function() {
	$(this).keyup(function() {
		$(this).val($(this).val().replace(/[<>]/g, ""));
	})
})
//常量类定义：
/!* 生效状态：已生效 *!/
var EFFECT_YES = '1';
/!* 生效状态：已注销 *!/
var EFFECT_CANCEL = '2';
/!* 返回结果标志：成功 *!/
var RESULT_FLAG_SUCCESS = '1';

/!* 机内账户类型：机内1账户 *!/
var SPECIAL_ACCT_TYPE_ONE = '1';
/!* 机内账户类型：机内2账户 *!/
var SPECIAL_ACCT_TYPE_TWO = '2';
/!* 机内账户类型：机内3账户 *!/
var SPECIAL_ACCT_TYPE_THREE = '3';

/!* 操作执行状态：待核准 *!/ var AUDIT_NO = '1';
/!* 操作执行状态：已核准 *!/ var AUDIT_YES = '3';
/!* 操作执行状态：已作废 *!/ var AUDIT_CANCEL = '4';

/!* 操作标志: 新增 *!/ var OPER_ADD = '1';
/!* 操作标志: 变更 *!/ var OPER_CHANGE = '2';
/!* 操作标志: 注销 *!/ var OPER_CANCEL = '3';*/
