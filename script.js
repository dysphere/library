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

const HP = new Book("Harry Potter", "JKR", 372, "yes")
console.log(HP.info());