var todoInputEle    = document.getElementById("todo-input") ;
var submitBtnEle    = document.getElementById("todo-submit") ;
var allDoneBtnEle   = document.getElementById("todo-allDone");
var todoListEle     = document.getElementById("todo-todoList") ;
var todoEles 		= document.getElementsByClassName("list-group-item");

///STEP I
submitBtnEle.addEventListener("click",function(){
	var value = todoInputEle.value;

	if(value){
		var todoTitle = value

		var todoEle = createTodoElement(todoTitle) ;
		todoListEle.appendChild(todoEle);

		todoInputEle.value = "" ;
	}
})


///STEP II
function createTodoElement(todoTitle){
	var todoEle = document.createElement("a");
	todoEle.className = "list-group-item";
	todoEle.textContent = todoTitle;
	
	todoEle.addEventListener("click",function(e){
		if(e.currentTarget.className.indexOf("list-group-item-success")>-1){
			todoEle.className = "list-group-item";	
		}else{
			todoEle.className += " list-group-item-success"
		}
	});
	return todoEle;
}


//STEP III
allDoneBtnEle.addEventListener("click",function(e){
	
	var listLength = todoEles.length;
	console.log(listLength);

	for(var i=0;i<listLength;i++){
		if(todoEles[i].className.indexOf("list-group-item-success") == -1){
			todoEles[i].className += " list-group-item-success";
		}
	}
})
