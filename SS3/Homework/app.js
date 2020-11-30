class Person {
  name;
  age;
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
}

class Boy extends Person {
  handsome;
  constructor(_name, _age, _handsome) {
    super(_name, _age);
    this.handsome = _handsome;
  }
}

class Girl extends Person {
  beauty;
  constructor(_name, _age, _beauty) {
    super(_name, _age);
    this.beauty = _beauty;
  }
}

class Group {
  people;
}
