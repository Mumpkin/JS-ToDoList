//makes removeall button hidden
document.getElementById("removeall").style.visibility = "hidden";

var error = document.getElementById("error");

function removeBtnVisibility() {
    //checks if the list has more than 1 items
    if (document.getElementById("list").getElementsByTagName('li').length >= 2) {
        //makes removeall button visible
        document.getElementById("removeall").style.visibility = "visible";
    }
    //makes removeall button hidden
    else {
        document.getElementById("removeall").style.visibility = "hidden";
    }
}

function addItem() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var input = document.getElementById("input").value;
    var btn = document.createElement("button");

    //removes the error message
    error.innerHTML = "";

    //error if no input is given
    if(input === ""){
        error.innerHTML = "You must write something";
    }else {
        //creates list items, adds input to them and gives list items a class
        li.className = "list-group-item";
        li.innerHTML = input;

        //creates remove button, gives it a class, creates the text for it and directs the button to the function
        li.appendChild(btn);
        btn.className = "btn btn-danger remove";
        btn.innerHTML = "X";
        btn.setAttribute("onClick", "removeItem(this);");

        ul.appendChild(li);

        //clears input
        document.getElementById("input").value = "";

        removeBtnVisibility();
    }
}

//removes the parent and the button
function removeItem(item) {
    item.parentNode.remove();

    //removes the error message
    error.innerHTML = "";

    removeBtnVisibility();
}

//removes all items by clearing the ul
function removeAllItems() {
    document.getElementById("list").innerHTML = "";

    //removes the error message
    error.innerHTML = "";

    removeBtnVisibility();
}
