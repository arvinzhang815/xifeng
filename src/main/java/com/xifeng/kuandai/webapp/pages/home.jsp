<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<link rel="stylesheet" type="text/css" href="/css/common/common2.css" />
<%--<script type="text/javascript">
    $(".fundTypeTable td").each(function() {
        var that = $(this);
        if (that.attr("original-value")) {
            that.html("");
        }
    });
</script>--%>
<div class="handle">
    <a href="javascript:;" class="btn add">新增</a>
    <a href="javascript:;" class="btn update">变更</a>
    <a href="javascript:;" class="btn delete">删除</a>
    <a href="javascript:;" class="btn see">查看</a>
    <a href="javascript:;" class="btn search nameSearch">姓名搜索</a>
    <a href="javascript:;" class="btn search telSearch">手机号搜索</a>
    <a href="javascript:;" class="btn search kdNoSearch">宽带号搜索</a>
</div>
<div class="content" style="overflow: auto; width: 100%;">
    <div class="table-container">
        <input id="fundTypeLastSearch" type="hidden" value='${lastSearch}'>
        <table class="fundTypeTable">
            <tr>
                <th>操作</th>
                <th>姓名</th>
                <th>手机号</th>
                <th>宽带账号</th>
                <th>家庭住址</th>
                <th>宽带安装地址</th>
                <th>宽带安装时间</th>
                <th>宽带到期时间</th>
                <th>备注</th>
            </tr>
            <c:forEach items="${response }" var="vo">
                <tr data-id="${vo.name }">
                    <td><input type="radio" name="radioFundType" /></td>
                    <td name="name">${vo.name }</td>
                    <td name="telphone">${vo.telphone }</td>
                    <td name="kuandaiNo">${vo.kuandaiNo }</td>
                    <td name="address">${vo.address }</td>
                    <td name="KDAddr">${vo.KDAddr }</td>
                    <td name="begainDate">${vo.begainDate }</td>
                    <td name="endDate">${vo.endDate }</td>
                    <td name="remark">${vo.remark }</td>
                </tr>
            </c:forEach>
        </table>
    </div>
    <!--table end-->
</div>
<script type="text/javascript" src="js/common/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="js/libs/dwz.min.js"></script>
<script>
    $(function() {
        // 【姓名搜索】按钮
        $(".nameSearch").click(function() {
            $.pdialog.open(
                '/html/Search.html',
                'search',
                '搜索',
                {mask : true, width : 850},
                {data:$('#fundTypeLastSearch').val()}
            );
        });
    });
</script>
