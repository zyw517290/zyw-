$(function() {
	$().ready(function(loginForm) {

		$("#loginForm").validate({
	        onsubmit:true,
        	onkeyup:false,
			rules: {
				username: {
					required: true,
					rangelength: [6, 10]
				},
				pwd: {
					required: true,
					rangelength: [6, 10]
				}
			},
			message: {
				username: {
					required: "请输入用户名",
					rangelength: "输入的字段在6到10之间"
				},
				pwd: {
					required: "请输入密码",
					rangelength: "输入的字符在6到10之间"
				}
			},submitHandler:function(loginForm){
				$.ajax({
					type: "post",
					data: {
						 user:$("#username").val(),
						 psd:$("#pwd").val(),
					},
					url:"http://www.petrichoro.com/ports/index.php/Home/User/regist",
					async:true,
					dataType:"jsonp",
					success:function(date){
						console.log(date);
//						$.each(array, function() {
//							
//						});
					}
				})
			}
		})
	})
})