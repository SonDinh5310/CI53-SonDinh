import Book from "./Book.js";

export default class ScienceBook extends Book {
  major;
  constructor(_id, _name, _price, _publishedDate, _major) {
    super(_id, _name, _price, _publishedDate);
    this.major = _major;
  }
}
