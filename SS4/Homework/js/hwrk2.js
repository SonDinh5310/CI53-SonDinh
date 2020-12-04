class Person {
  name;
  age;
  phoneNumber;
  location;
  constructor(_name, _age, _phoneNumber, _location) {
    this.name = _name;
    this.age = _age;
    this.phoneNumber = _phoneNumber;
    this.location = _location;
  }
}

class Vector {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Group {
  peopleList;
  F0Patient;
  F1sList;
  F2sList;
  constructor() {
    this.peopleList = [];
    this.F1sList = [];
    this.F2sList = [];
  }
  addPerson(person) {
    if (person instanceof Person) {
      this.peopleList.push(person);
    }
  }
  addF0(person) {
    if (person instanceof Person) {
      this.F0Patient = person;
    }
  }
  findF1People() {
    for (let i = 0; i < this.peopleList.length; i++) {
      if (
        calDistance(this.F0Patient, this.peopleList[i]) < 2 &&
        this.F0Patient !== this.peopleList[i]
      ) {
        this.F1sList.push(this.peopleList[i]);
      }
    }
    return this.F1sList;
  }
  findF2People() {
    for (let i = 0; i < this.F1sList.length; i++) {
      for (let j = 0; j < this.peopleList.length; j++) {
        if (
          calDistance(this.F1sList[i], this.peopleList[j]) < 2 &&
          this.F1sList.indexOf(this.peopleList[j]) === -1 &&
          this.F0Patient !== this.peopleList[j] &&
          this.F0Patient !== this.F1sList[i]
        ) {
          this.F2sList.push(this.peopleList[j]);
        }
      }
    }
    return this.F2sList;
  }
}

const calDistance = (a, b) => {
  // console.log(a.location.x, b.location.x, a.location.y, b.location.y);
  return Math.hypot(a.location.x - b.location.x, a.location.y - b.location.y);
};

let person1 = new Person("Long", 19, "0123456789", new Vector(1, 2)),
  person2 = new Person("Linh", 19, "0123456789", new Vector(2, 3)),
  person3 = new Person("Lam", 19, "0123456789", new Vector(2, -1)),
  person4 = new Person("Lan", 19, "0123456789", new Vector(3, 5)),
  person5 = new Person("Sang", 19, "0123456789", new Vector(4, -1)),
  person6 = new Person("An", 19, "0123456789", new Vector(1, 3)),
  person7 = new Person("Truong", 19, "0123456789", new Vector(3, 4)),
  person8 = new Person("Chinh", 19, "0123456789", new Vector(1, 1)),
  person9 = new Person("Nam", 19, "0123456789", new Vector(-1, 1)),
  person10 = new Person("Ninh", 19, "0123456789", new Vector(-1, -3));

let groupOfPeople = new Group();

groupOfPeople.addPerson(person1);
groupOfPeople.addPerson(person2);
groupOfPeople.addPerson(person3);
groupOfPeople.addPerson(person4);
groupOfPeople.addPerson(person5);
groupOfPeople.addPerson(person6);
groupOfPeople.addPerson(person7);
groupOfPeople.addPerson(person8);
groupOfPeople.addPerson(person9);
groupOfPeople.addPerson(person10);

groupOfPeople.addF0(person1);

groupOfPeople.findF1People();
groupOfPeople.findF2People();

console.log(groupOfPeople.F1sList);
console.log(groupOfPeople.F2sList);
