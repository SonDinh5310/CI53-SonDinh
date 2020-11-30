import Book from "./Book.js";

export default class TextBook extends Book {
  subject;
  grade;
  constructor(_id, _name, _price, _publishedDate, _subject, _grade) {
    super(_id, _name, _price, _publishedDate);
    this.subject = _subject;
    this.grade = _grade;
  }
}
