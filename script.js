var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allLi = document.getElementsByTagName("li");
var allLiBtn = document.querySelectorAll(".remove");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
	makeNewDeleteBtn(li);
	allLiBtn = document.querySelectorAll(".remove");

	clickLi();
	clickDelete();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress() {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//strikeout when item clicked

function strikeOut(){
	this.classList.toggle("done");
}

function clickLi(){
	for(var i=0; i<allLi.length; i++){
		allLi[i].addEventListener("click", strikeOut)
	}
}

//add delete button to every new li
function makeNewDeleteBtn(li){
	var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));		
		deleteButton.classList.add("remove");
		li.appendChild(deleteButton);
	// return deleteButton;
}

//add delete button to existing li on start
function initAll(){
	//add delete button to every list item
	for(var i=0; i<allLi.length; i++){
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));
		allLi[i].appendChild(deleteButton);		
		deleteButton.classList.add("remove");
	}
	 allLiBtn = document.querySelectorAll(".remove");
}


function removeLi(){
	this.parentNode.remove();
}

function clickDelete(){
	for(var i=0; i<allLiBtn.length; i++){
		allLiBtn[i].addEventListener("click", removeLi);
	}
}


initAll();
clickLi();
clickDelete();

