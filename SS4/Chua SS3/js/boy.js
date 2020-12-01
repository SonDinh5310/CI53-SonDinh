import Person from "./person.js";
export default class Boy extends Person {
  handsome;
  constructor(_name, _age, _handsome) {
    super(_name, _age);
    this.handsome = _handsome;
  }
}
