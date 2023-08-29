let myLibrary = [];
const headings = ["title", "author", "pages", "read"];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages,
        ${this.read}`
    }
}

function addBooktoLibrary(Book) {
myLibrary.push(Book);
}
   
function BookDisplay() {
    const container = document.querySelector(".container");
    const table = document.createElement('table'); 
    const head = document.createElement('thead');
    const header_row = document.createElement('tr');
    for ( let i = 0; i < 4; i++) {
    const header = document.createElement('th');
    header.textContent = headings[i];
    header_row.appendChild(header);
    head.appendChild(header_row);
}
    table.appendChild(head);
    container.appendChild(table);
    const tbody = document.createElement('tbody');

    for (let i = 0; i < myLibrary.length; i++) {
        const row = document.createElement('tr');
        for (let i = 0; i < 4; i++) {
        const cell = document.createElement('td');
        cell.setAttribute("class", headings[i]);
        row.appendChild(cell);
        }
        tbody.appendChild(row);
        table.appendChild(tbody);
    }

    const titles = document.querySelectorAll(".title");
    for (let i = 0; i < titles.length; i++) {
        titles[i].textContent = myLibrary[i].title
    }

    const authors = document.querySelectorAll(".author");
    for (let i = 0; i < authors.length; i++) {
        authors[i].textContent = myLibrary[i].author
    }

    const pageses = document.querySelectorAll(".pages");
    for (let i = 0; i < pageses.length; i++) {
        pageses[i].textContent = myLibrary[i].pages
    }

    const readings = document.querySelectorAll(".read");
    for (let i = 0; i < readings.length; i++) {
        readings[i].textContent = myLibrary[i].read
    }

}

function updateBookDisplay(myLibrary) {
    const table = document.querySelector("table");
    const body = document.querySelector("tbody");
    const row = document.createElement("tr");
    for (let i = 0; i < 4; i++) {
        const cell = document.createElement("td");
        cell.setAttribute("class", headings[i]);
        row.appendChild(cell);
    }

    body.appendChild(row);
    table.appendChild(body);

    let lastIndex = myLibrary.length - 1
    let last = myLibrary[lastIndex];

    const titles = document.querySelectorAll(".title");
    titles[lastIndex].textContent = last.title
    const authors = document.querySelectorAll(".author");
    authors[lastIndex].textContent = last.author
    const pageses = document.querySelectorAll(".pages");
    pageses[lastIndex].textContent = last.pages
    const readings = document.querySelectorAll(".read");
    readings[lastIndex].textContent = last.read

}

const newButton = document.querySelector("#new");
const newDialog = document.querySelector("#new_book");
const quitButton = newDialog.querySelector("#cancel");
const newData = newDialog.querySelector("#confirm");

const title = newDialog.querySelector("#title");
const author = newDialog.querySelector("#author");
const pages = newDialog.querySelector("#pages");
const read = newDialog.querySelector("#read");

newButton.addEventListener("click", () => {
    newDialog.showModal();
})

title.addEventListener("change", (e) => {
newData.dataset.title = title.value;
})

author.addEventListener("change", (e) => {
newData.dataset.author = author.value;
})

pages.addEventListener("change", (e) => {
newData.dataset.pages = pages.value;
})

read.addEventListener("change", (e) => {
    newData.dataset.read = read.value;
})

newData.addEventListener("click", (e) => {
    e.preventDefault();

    let newBook = new Book(newData.dataset.title, newData.dataset.author,
        newData.dataset.pages, newData.dataset.read);
    addBooktoLibrary(newBook);
    updateBookDisplay(myLibrary);
    newDialog.close();
})

quitButton.addEventListener("click", () => {
    newDialog.close();
})


const HP = new Book("Harry Potter", "JKR", 372, true)
const Ani = new Book("Ani", "KA", 100, true)
addBooktoLibrary(HP)
addBooktoLibrary(Ani)
BookDisplay()