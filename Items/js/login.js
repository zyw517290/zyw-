
//$().ready(function(){
	$("#loginForm").validate({
		onsubmit:true,
    	onkeyup:false,
		rules: {						
			username: {
				required: true,
				rangelength: [6,16]
			},
			pwd: {
				required: true,
				rangelength: [6,16]
			},
			message: {
				username: {
					required: "请输入用户名",
					rangelength: "用户名输入的字符介于在6-16位之间"
				},
				pwd: {
					required: "请输入密码",
					rangelength: "密码输入的字符介于在6-16位之间"
				}
			},submitHandler:function(loginForm){
				$.ajax({
					type:"post",
					data: {
						username:$("#username").val(),
						pwd:$("#pwd").val(),
					},
					url:"http://www.petrichoro.com/ports/index.php/Home/User/login",
					async:true,
					dataType : "jsonp",
					success:function(data){
//						console.log(data)
						$.each(data, function(i,j) {
							if(j == '登录成功'){
								location.href = '../homePage.html';
							}
						});
					}
				});
			}
		}
	})
//})







//$(function(){
//	$.ajax({
//		type:"get",
//		url:"http://www.petrichoro.com/ports/index.php/Home/User/regist",
//		async:true,
//		dataType : "jsonp",
//		success:function(data){
//			console.log(data)
//		}
//	});
//})
