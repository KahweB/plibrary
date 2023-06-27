let container = document.getElementById("container");
let header = document.querySelector("header");
let isPopupOpen = false;
const body = document.getElementsByTagName("body");
const newbook_Button = document.getElementById("newbook_button");
const form = document.querySelector("form");
let myLibrary = [];
//event listener top button
newbook_Button.addEventListener("click", createPopup);
//constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}
//creates book cards/delete buttons/inside of cards
function show() {
	//delete cards before making new to prevent duplication
	while (container.hasChildNodes()) {
		container.removeChild(container.firstChild);
	}
	for (let i = 0; i < myLibrary.length; i++) {
		let book = myLibrary[i];
		let card = document.createElement("div");

		card.setAttribute("class", "card");
		card.setAttribute("id", i);
		// delete button:
		let deleteBtn = document.createElement("button");
		deleteBtn.setAttribute("class", "deleteBtn");
		deleteBtn.setAttribute("name", i);

		let titleDiv = document.createElement("div");
		let authorDiv = document.createElement("div");
		let pagesDiv = document.createElement("div");
		let readDiv = document.createElement("div");
		titleDiv.innerHTML = book.title;
		authorDiv.innerHTML = book.author;
		pagesDiv.innerHTML = book.pages;
		readDiv.innerHTML = book.read;
		card.setAttribute("class", "card");

		container.appendChild(card);
		card.appendChild(deleteBtn);
		card.append(titleDiv, authorDiv, pagesDiv, readDiv);
	}
}
/*TODO: 
	addEventDeleteBtn() :
	e.target.name hangi delete btn basildigina (number)
	esdegeer cardi sil +
	array sil +
*/
function addEventDeleteBtn() {
	let deleteBtn = document.querySelectorAll(".deleteBtn");
	for (let i = 0; i < deleteBtn.length; i++) {
		deleteBtn[i].addEventListener("click", (e) => {
			let btnName = e.target.name;
			document.getElementById(btnName).remove();
			myLibrary.splice(btnName, 1);
		});
	}
}

function addBookToLibrary() {
	let title = document.querySelector("#inputTitle").value;
	let author = document.querySelector("#inputAuthor").value;
	let pages = document.querySelector("#inputPages").value;
	let read = document.querySelector("#inputRead").value;
	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	document.querySelector("#popup").remove();
	isPopupOpen = false;
}

//creates popup
function createPopup() {
	//prevents multiple popups in DOM
	if (isPopupOpen === false) {
		isPopupOpen = true;

		const popupDiv = document.createElement("div");
		popupDiv.setAttribute("id", "popup");

		const form = document.createElement("form");
		form.setAttribute("id", "bookForm");
		const labelTitle = document.createElement("label");
		labelTitle.setAttribute("for", "inputTitle");
		labelTitle.innerHTML = "Title";
		const inputTitle = document.createElement("input");
		inputTitle.setAttribute("name", "inputTitle");
		inputTitle.setAttribute("id", "inputTitle");
		inputTitle.setAttribute("type", "text");

		const labelAuthor = document.createElement("label");
		labelAuthor.setAttribute("for", "inputAuthor");
		labelAuthor.innerHTML = "Author";
		const inputAuthor = document.createElement("input");
		inputAuthor.setAttribute("name", "inputAuthor");
		inputAuthor.setAttribute("id", "inputAuthor");
		inputAuthor.setAttribute("type", "text");

		const labelPages = document.createElement("label");
		labelPages.setAttribute("for", "inputPages");
		labelPages.innerHTML = "Pages";
		const inputPages = document.createElement("input");
		inputPages.setAttribute("name", "inputPages");
		inputPages.setAttribute("id", "inputPages");
		inputPages.setAttribute("type", "numher");

		const labelRead = document.createElement("label");
		labelRead.setAttribute("for", "inputRead");
		labelRead.innerHTML = "Read?";
		const inputRead = document.createElement("select");
		const optionYes = document.createElement("option");
		optionYes.value = "yes";
		optionYes.innerHTML = "yes";
		const optionNo = document.createElement("option");
		optionNo.value = "no";
		optionNo.innerHTML = "no";
		document.createElement("option").value = "no";
		inputRead.setAttribute("name", "inputRead");
		inputRead.setAttribute("id", "inputRead");

		const submitButton = document.createElement("button");
		submitButton.setAttribute("id", "submitButton");
		submitButton.setAttribute("type", "submit");
		submitButton.innerHTML = "Submit";

		const closePopupButn = document.createElement("button");
		closePopupButn.setAttribute("id", "closePopup");
		closePopupButn.innerHTML = "Close";

		closePopupButn.addEventListener("click", function () {
			isPopupOpen = false;
			popupDiv.remove();
		});
		header.appendChild(popupDiv);
		popupDiv.appendChild(form);
		form.appendChild(labelTitle);
		form.appendChild(inputTitle);
		form.appendChild(labelAuthor);
		form.appendChild(inputAuthor);
		form.appendChild(labelPages);
		form.appendChild(inputPages);
		form.appendChild(labelRead);
		form.appendChild(inputRead);
		inputRead.appendChild(optionNo);
		inputRead.appendChild(optionYes);
		form.appendChild(submitButton);
		popupDiv.appendChild(closePopupButn);
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			addBookToLibrary();
			show();
			addEventDeleteBtn();
			console.log(myLibrary);
		});
	} else {
		return;
	}
}
