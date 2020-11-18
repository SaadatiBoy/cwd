var button = document.getElementById("enter");
var userInput = document.getElementById("userInput");
var ul = document.querySelector("ul");

function userInputLength(){
        return userInput.value.length
};

function createListElement(){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userInput.value));
        ul.appendChild(li);
        userInput.value = "";

};

function addListAfterClick(){
        if (userInputLength() > 0) {
                createListElement();}
};

function addListAfterEnter(){
        if (userInputLength() > 0 && event.keyCode === 13)
        {createListElement()
        
        };     
};

button.addEventListener("click",addListAfterClick);
userInput.addEventListener("keypress",addListAfterEnter);

