import Book from "./Book.js";

export default class ComicBook extends Book {
  funny;
  pageNumber;
  constructor(_id, _name, _price, _publishedDate, _funny, _pageNumber) {
    super(_id, _name, _price, _publishedDate);
    this.funny = _funny;
    this.pageNumber = _pageNumber;
  }
}
