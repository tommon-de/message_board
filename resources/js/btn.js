// 计算事件方法
function LocalTime(s) {
        return s < 10 ? '0' + s : s;
}
$(document).ready(function(){
  	// 提交触发事件
  	$("#btn").click(function(){

			var myDate = new Date();
               //获取当前年
               var year = myDate.getFullYear();
               //获取当前月
               var month = myDate.getMonth() + 1;
               //获取当前日
               var date = myDate.getDate();
               var h = myDate.getHours();       //获取当前小时数(0-23)
               var m = myDate.getMinutes();     //获取当前分钟数(0-59)
               var s = myDate.getSeconds();		//获取当前秒数（0-59）
               var now = year + '-' + LocalTime(month) + "-" + LocalTime(date) + 
               " " + LocalTime(h) + ':' + LocalTime(m) + ":" + LocalTime(s); // 转化成时间字符
			var text = $("#text").val();  //获取文本域内容
			//判断文本域是否为空
			if (text != "") {
				//将头像，文本内容，时间插入发到对应的留言框
				$("#message").append("<div><img src=./resources/img/img_head.jpg  class=\"img-circle con_img\">"
				+text+"<span class=time>"+now+"</span>"+"</div>");
				//提交后，清空文本域内容
				$("#text").val("");
			}else{
				alert("内容不能为空");
			}
  	});

});