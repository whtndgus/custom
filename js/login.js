// $(function(){
// 	$.ajax({
// 		url : "http://localhost:3000/regist",
//     type: "POST",
// 		data: {
//       name: "조승현",
//       id: "jsh",
//       pw: "password",
//       qu: "home",
//       ans: "korea",
//       color: "#000000"
//     },
// 		success: function(result){
//       console.log(JSON.parse(result))
// 		},
// 		error: function(){
//       console.log("에러 발생")
// 		}
// 	})

// });

$(".login-btn").click((e) => {
  $.ajax({
		url : "http://localhost:3000/login",
    type: "POST",
		data: {
      id: $(".input-id").val(),
      pw: $(".input-pw").val()
    },
		success: function(result){
      console.log(JSON.parse(result))
		},
		error: function(){
      console.log("에러 발생")
		}
	})
})


