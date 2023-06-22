let container = document.getElementById("container");
let isPopupOpen = false;
const body = document.getElementsByTagName("body");
const newbook_Button = document.getElementById("newbook_button");

//event listener top button
newbook_Button.addEventListener("click", createPopup);

//constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function createPopup() {
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
		inputAuthor.setAttribute("id", "inputAuthor");
		inputAuthor.setAttribute("type", "text");

		const labelPages = document.createElement("label");
		labelPages.setAttribute("for", "inputPages");
		labelPages.innerHTML = "Pages";
		const inputPages = document.createElement("input");
		inputPages.setAttribute("id", "inputPages");
		inputPages.setAttribute("type", "numher");

		const labelRead = document.createElement("label");
		labelRead.setAttribute("for", "inputRead");
		labelRead.innerHTML = "Read?";
		const inputRead = document.createElement("input");
		inputRead.setAttribute("id", "inputRead");
		inputRead.setAttribute("type", "text");

		const submitButton = document.createElement("button");
		submitButton.setAttribute("id", "submitButton");
		submitButton.setAttribute("type", "submit");
		submitButton.setAttribute("value", "Submit");
		submitButton.innerHTML = "Submit";

		const closePopupButn = document.createElement("button");
		closePopupButn.setAttribute("id", "closePopup");
		closePopupButn.innerHTML = "Close";

		closePopupButn.addEventListener("click", function () {
			isPopupOpen = false;
			popupDiv.remove();
		});

		container.appendChild(popupDiv);
		popupDiv.appendChild(form);
		form.appendChild(labelTitle);
		form.appendChild(inputTitle);
		form.appendChild(labelAuthor);
		form.appendChild(inputAuthor);
		form.appendChild(labelPages);
		form.appendChild(inputPages);
		form.appendChild(labelRead);
		form.appendChild(inputRead);
		form.appendChild(submitButton);
		popupDiv.appendChild(closePopupButn);
	} else {
		return;
	}
}
