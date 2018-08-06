$(function(){
    $("#loginSubmit").click(function(){
        if(checkInput()) {
            // $("form").action("/loginServlet");
            $.ajax({
                url:"/loginPage",
                type:"post",
                data:{account:$("#j_code").val(),password:$("#j_password").val()},
                success:function(data){
                    window.clearInterval(timer);
                    console.log("over..");
                },
                error:function(e){
                    alert("错误！！");
                    window.clearInterval(timer);
                }
            });
        }else{
            return false;
        }
    });
    function checkInput(){
    	console.log("test")
        //判断用户名
        if($("#j_code").val() == null || $("#j_code").val() == ""){
            alert("用户名不能为空");
            $("#j_code").focus();
            return false;
        }
        //判断密码
        if($("#j_password").val() == null || $("#j_password").val() == ""){
            alert("密码不能为空");
            $("#j_password").focus();
            return false;
        }
        return true;
    }
});