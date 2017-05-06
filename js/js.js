/*var todoInputEle    = document.getElementById("todo-input") ;
var submitBtnEle    = document.getElementById("todo-submit") ;
var allDoneBtnEle   = document.getElementById("todo-allDone");
var todoListEle     = document.getElementById("todo-todoList") ;
var todoEles 		= document.getElementsByClassName("list-group-item");*/

//STEP II
$("#todo-submit").on("click",function(){
	var value = $("#todo-input").val()
	if(value){
		var todoTitle = value
		createTodoElement(todoTitle).appendTo($("#todo-todoList")) ;
		$("#todo-input").val("");
	}
})

//STEP I
function createTodoElement(todoTitle){
	var todoEle = $("<a>");
	todoEle.text(todoTitle).addClass("list-group-item");
	todoEle.on("click",function(){
		if($(this).attr("class")=== "list-group-item"){
			$(this).attr("class","list-group-item list-group-item-success");
		}else{
			$(this).attr("class","list-group-item")
		}
		//STEP III
		$(this).animate({
			opacity: "0",
			marginLeft: "200px"
		},500);
		$(this).hide(200);	
	})
	return todoEle;
}

$("#todo-allDone").on("click",function(){
	var listLength = $(".list-group-item").length;

	$(".list-group-item").each(function(){
		if($(this).attr("class")==="list-group-item"){
			$(this).attr("class","list-group-item list-group-item-success");
		}
		$(this).animate({
			opacity: "0",
			marginLeft: "200px"
		},500);
		$(this).hide(200);	
	})

})

function updateBG (){
	var apiUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8659a1d2d9c25470f9e37d776be63b18&text=beautiful&format=json&nojsoncallback=1"
	$.getJSON(apiUrl , function(s){
		console.log (s);
		var photos  = s.photos.photo ;
		var randomI = Math.floor(Math.random() * 100 ) ;
		var photo   = photos[randomI];
		$("body").css("background-image", "url(" + getPhotoUrl(photo)+ ")") ;
	});
}
/*function getKeywordApiUrl (keyword){
	var api_key = "a82f42684aa35dab74b1843242d5d81b" ;
	return  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+ api_key + "&text=" + keyword + "&format=json&nojsoncallback=1";
}*/
function getPhotoUrl( photo ){
	return "https://farm"+ photo.farm +".staticflickr.com/"+ photo.server +"/" + photo.id+ "_" + photo.secret + "_h.jpg" ;
}

$("#backGroundBtn").on("click",updateBG);
