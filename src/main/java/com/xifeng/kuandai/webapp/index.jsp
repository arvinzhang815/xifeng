<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<html>
<head>
    <meta charset="UTF-8">
    <title>登录</title>
    <link rel="stylesheet" type="text/css" href="css/login/login.css" />
    <script type="text/javascript" src="/js/libs/jquery-2.1.4.min.js"></script>
</head>
<body>
<div class="container" >
    <div class="login">
        <h1 class="title">管理员登录</h1>
        <form action="/j_spring_security_check" method="post">
            <ul>
                <li>
                    <img src="/img/login/user.png"/>
                    <input type="text"   name="j_code" value="" placeholder="请输入账号" id="j_code"/>
                </li>
                <li>
                    <img src="/img/login/password.png"/>
                    <input type="password" name="j_password" value="" placeholder="请输入密码" id="j_password"/>
                </li>
            </ul>
            <button type="button" class="submit" id="loginSubmit">登录</button>
        </form>
    </div>
    <!--footer start-->
    <div class="footer">
        <p>技术支持：<a href="https://blog.csdn.net/arvin_zhang_" target="_blank">arvinzhang</a></p>
    </div>
    <!--footer end-->
</div>
<script>
    $(function(){
        $("#loginSubmit").click(function(){
            $.ajax({
                type : "post",
                url : "/queryByInfo",
                dataType : "JSON",
                data : form.serialize(),
                success : function(data) {

                }
            });
        });
        function required (id) {
            var node = $('#'+id+'');
            var value = node.val().trim();
            if(value == ""){
                alert("必填项目不能为空！");
                return false;
            }
        }
    });
</script>
</body>
</html>