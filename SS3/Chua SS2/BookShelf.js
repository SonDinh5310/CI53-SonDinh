import Book from "./Book.js";

export default class BookShelf {
  name;
  owner;
  dateModified;
  books;
  constructor(_name, _owner, _dateModified) {
    this.name = _name;
    this.owner = _owner;
    this.dateModified = _dateModified;
    this.books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
    }
  }
  updateBook(id, data) {
    //* C1
    // for (let book of this.books) {
    //   if (book.id === id) {
    //     book.update(data);
    //     break;
    //   }
    // }

    //*C2
    //!find() cua array neu tim dc 1 phan tu thoa man ->return phan tu do, nguoc lai tra ve NULL
    let book = this.books.find(function (item) {
      return item.id === id;
    });

    if (book !== null) {
      book.update(data);
    }
  }

  deleteBook(id) {
    //! findIndex() cua array: neu tim duoc phan tu thoa man -> tra ve index, nguoc lai tra ve -1
    let bookIndex = this.books.findIndex((item) => item.id === id);
    if (bookIndex > -1) {
      this.books.splice(bookIndex, 1);
    }
  }

  showBooks() {
    console.log(this.books);
  }

  findBooks(name) {
    //! filter() cua array: tra ve 1 mang moi gom nhung phan tu thoa man dieu kien nhung ko thay doi mang cu
    return this.books.filter((item) => item.name === name);
  }
}
