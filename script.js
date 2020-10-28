var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

if(deleteBtns.length > 0){
    for(var i = 0; i < deleteBtns.length; i++){
        deleteBtns[i].addEventListener("click", removeParent);
    }
}

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent);
  evt.target.parentNode.remove();
}

ul.addEventListener("click", function(event){
	event.target.classList.toggle("done");
});


//adding new items:

function inputLength(){
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}


function addToListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}
}

function addToListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);



