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

Book.prototype.toggleRead = function() {
    if (this.read == true) {
        this.read = false;
    }
    else {
        this.read = true;
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

        const removeButton = document.createElement("button");
        removeButton.textContent = "remove"
        removeButton.setAttribute("class", "remove");
        removeButton.setAttribute("type", "button");
        removeButton.dataset.index = i

        const toggleButton = document.createElement("button");
        toggleButton.textContent = "toggle read"
        toggleButton.setAttribute("class", "toggle");
        toggleButton.setAttribute("type", "button");
        toggleButton.dataset.index = i

        row.appendChild(removeButton);
        row.appendChild(toggleButton);
        tbody.appendChild(row);
        table.appendChild(tbody);

    }

    let removes = document.querySelectorAll(".remove");
    removes.forEach(function (i) {
        i.addEventListener("click", () => {
            let body = document.querySelector("tbody");
            body.deleteRow(i.dataset.index);
            myLibrary.splice(i.dataset.index, 1);
            let newRemoves = document.querySelectorAll(".remove");
            for (let i = 0; i < newRemoves.length; i++) {
                newRemoves[i].dataset.index = i
            }
            let newToggles = document.querySelectorAll(".toggle");
            for (let i = 0; i < newToggles.length; i++) {
                newToggles[i].dataset.index = i
            }
        });
    });

    let toggles = document.querySelectorAll(".toggle");
    toggles.forEach(function (btn) {
        btn.addEventListener("click", () => {
            let readStatus = document.querySelectorAll(".read");
            myLibrary[btn.dataset.index].toggleRead()
            readStatus[btn.dataset.index].textContent = myLibrary[btn.dataset.index].read

        })
    })

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

    const removeButton = document.createElement("button");
    removeButton.textContent = "remove"
    removeButton.setAttribute("class", "remove");
    removeButton.setAttribute("type", "button");

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "toggle read"
    toggleButton.setAttribute("class", "toggle");
    toggleButton.setAttribute("type", "button");

    row.appendChild(removeButton);
    row.appendChild(toggleButton);

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

    removeButton.dataset.index = lastIndex
    toggleButton.dataset.index = lastIndex

    let removes = document.querySelectorAll(".remove");
    removes[lastIndex].addEventListener("click", () =>
    {
        let body = document.querySelector("tbody");
        body.deleteRow(removes[lastIndex].dataset.index);
        myLibrary.splice(removes[lastIndex].dataset.index, 1);
        let newRemoves = document.querySelectorAll(".remove");
        for (let i = 0; i < newRemoves.length; i++) {
            newRemoves[i].dataset.index = i
        }
        let newToggles = document.querySelectorAll(".toggle");
        for (let i = 0; i < newToggles.length; i++) {
            newToggles[i].dataset.index = i
        }
    })

    let toggles = document.querySelectorAll(".toggle");
    toggles[lastIndex].addEventListener("click", () => {
        let readStatus = document.querySelectorAll(".read");
            myLibrary[toggles[lastIndex].dataset.index].toggleRead()
            readStatus[toggles[lastIndex].dataset.index].textContent = myLibrary[toggles[lastIndex].dataset.index].read
    })


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
    let bool = (newData.dataset.read == "true");

    let newBook = new Book(newData.dataset.title, newData.dataset.author,
        newData.dataset.pages, bool);
    addBooktoLibrary(newBook);

    newData.dataset.index = myLibrary.length - 1
    updateBookDisplay(myLibrary);
    newDialog.close();
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "none";
})

quitButton.addEventListener("click", () => {
    newDialog.close();
})


const HP = new Book("Harry Potter", "JKR", 372, true)
const Ani = new Book("Ani", "KA", 100, false)
addBooktoLibrary(HP)
addBooktoLibrary(Ani)
BookDisplay()