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
myLibrary.push(Book)
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
    table.appendChild(header_row);
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

const HP = new Book("Harry Potter", "JKR", 372, true)
const Ani = new Book("Ani", "KA", 100, true)
addBooktoLibrary(HP)
addBooktoLibrary(Ani)
BookDisplay()