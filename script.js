let container = document.getElementById("container");
const body = document.getElementsByTagName("body");
const newbook_Button = document.getElementById("newbook_button");



//event listener top button
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
    inputTitle.setAttribute("id", "inputTitle");
    inputTitle.setAttribute("type", "text");

    const inputAuthor =  document.createElement("input");
    inputAuthor.setAttribute("id", "inputAuthor");
    inputAuthor.setAttribute("type","text");

    const inputPages = document.createElement("input");
    inputPages.setAttribute("id", "inputPages");
    inputPages.setAttribute("type", "numher");

    const inputRead = document.createElement("input");
    inputRead.setAttribute("id", "inputRead");
    inputRead.setAttribute("type", "text");

    const closePopupButn = document.createElement("button");
    closePopupButn.setAttribute("id", "closePopup");
    closePopupButn.innerHTML = "Close";

    closePopupButn.addEventListener("click", function(){
        popupDiv.remove();
    });

    container.appendChild(popupDiv);
    popupDiv.appendChild(form);
    form.appendChild(inputTitle);
    form.appendChild(inputAuthor);
    form.appendChild(inputPages);
    form.appendChild(inputRead);
    popupDiv.appendChild(closePopupButn);
}