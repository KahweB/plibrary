let container = document.getElementById("container");
const body = document.getElementsByTagName("body");
const newbook_Button = document.getElementById("newbook_button");





//event listener of top button
newbook_Button.addEventListener("click",createPopup);

//constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createPopup(){
    const popupDiv = document.createElement("div");
    popupDiv.setAttribute("id","popup");

    const form = document.createElement("form");
    form.setAttribute("id", "bookForm");

    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("id","inputTitle");
    inputTitle.setAttribute("type","text");
    
    
    container.appendChild(popupDiv);
    popupDiv.appendChild(form);
}