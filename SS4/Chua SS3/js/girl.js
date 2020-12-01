import Person from "./person.js";
export default class Girl extends Person {
  beauty;
  constructor(_name, _age, _beauty) {
    super(_name, _beauty);
    this.handsome = _beauty;
  }
}
