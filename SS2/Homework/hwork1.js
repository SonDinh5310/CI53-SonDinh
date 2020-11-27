//Bai 1: Tìm hiểu về module trong javascript? Import/Export? Cho 1 ví dụ?
/*
* Khai niem: 
-Module trong JS la bao gom mot tap hop cac ham de giup xu ly 1 chuc nang
nao do. Cac chuc nang khac nhau co the co cac Module khac nhau. Cac ham trong Module co
the duoc import de su dung binh thuong.

* Tai sao lai su dung module?
+Tinh bao tri
+Namespacing
+Tai su dung duoc

* Import/Export
-Import: duoc su dung de lay cac ham, doi tuong hoac gia tri duoc export trong module de
dua vao su dung trong chuong trinh.
-Export: duoc su dung khi tao cac module JS de goi cac ham, doi tuong hoac gia tri trong
module de chung co the duoc su dung boi cac chuong trinh bang lenh import.
*/
//*VD:
//*📁helloWorld.js
// export function firstCode(username) {
//   alert(`${username} said Hello World!`);
// }
//*📁main.js
// import { firstCode } from "./firstCode.js";
// firstCode("Son");

//Bai 2:
class Book {
  constructor(_id, _name, _price, _publishedDate) {
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.publishedDate = _publishedDate;
  }
  update(prop, data) {
    this[prop] = data;
  }
}

class ComicBook extends Book {
  constructor(_id, _name, _price, _publishedDate, _funny, _pageNumber) {
    super(_id, _name, _price, _publishedDate);
    this.funny = _funny;
    this.pageNumber = _pageNumber;
  }
}

class TextBook extends Book {
  constructor(_id, _name, _price, _publishedDate, _subject, _grade) {
    super(_id, _name, _price, _publishedDate);
    this.subject = _subject;
    this.grade = _grade;
  }
}

class ScienceBook extends Book {
  constructor(_id, _name, _price, _publishedDate, _major) {
    super(_id, _name, _price, _publishedDate);
    this.major = _major;
  }
}

class BookShelf {
  booksList = [];
  constructor(_name, _owner, _dateModified) {
    this.name = _name;
    this.owner = _owner;
    this.dateModified = _dateModified;
  }
  addBook(book) {
    this.booksList.push(book);
    this.dateModified = new Date().getTime();
    console.log(this.booksList);
  }
  updateBook(id, prop, data) {
    let index = this.booksList.indexOf(id);
    if (index !== -1) {
      this.booksList[i][prop] = data;
    } else {
      alert(`Can't find the book with id ${id}`);
    }
    console.log(this.booksList);
  }
  deleteBook(id) {
    let index = this.booksList.indexOf(id);
    if (index !== -1) {
      this.booksList.splice(id, 1);
    } else {
      alert(`Can't find the book with id ${id}`);
    }
    console.log(this.booksList);
  }
  showBook() {
    if (this.booksList.length > 0) {
      console.log(this.booksList);
    } else {
      console.log("Khong co sach");
    }
  }
  findBooks(name) {
    let result = [];
    for (let i = 0; i < this.booksList.length; i++) {
      if (this.booksList[i].name.toLowerCase() === name.toLowerCase()) {
        result.push(this.booksList[i].name);
      }
    }
    return result;
  }
}

let timeDate = new Date().getTime();
const book1 = new Book(1, "The Book", 10, "20-11-2020"),
  comic = new ComicBook(2, "Rick & Morty", 10, "21-11-2020", 10, 300),
  hisScienceBook = new ScienceBook(
    3,
    "Fundamental Physics",
    10,
    "22-11-2020",
    "Physics"
  ),
  herTextBook = new TextBook(4, "Math Homework", 10, "10-10-2020", "Math", 3),
  theShelf = new BookShelf("The Shelf", "Son", timeDate);

book1.update("name", "Clean Code");

theShelf.addBook(book1);
theShelf.addBook(comic);
theShelf.addBook(hisScienceBook);
theShelf.addBook(herTextBook);

theShelf.updateBook(2, "price", 20);

theShelf.deleteBook(3);

theShelf.showBook();

theShelf.findBooks("Clean Code");

//*Câu hỏi: nếu truyền thể hiện của class ComicBook, TextBook, ScienceBook
//*vào addBook liệu có được không? Vì sao?
//-Co the lam duoc vi ComicBook, TextBook, ScienceBook de uke thua tu Book.
