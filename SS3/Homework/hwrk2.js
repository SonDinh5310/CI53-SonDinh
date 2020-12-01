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

class Relationship {
  a;
  b;
  constructor(_a, _b) {
    this.a = _a;
    this.b = _b;
  }
}

class Group {
  people;
  relationships;
  constructor(_people, _relationships) {
    this.people = [];
    this.relationships = [];
  }
  addPerson(person) {
    if (person instanceof Person) {
      this.people.push(person);
    }
  }
  addRelationships(a, b) {
    if (a instanceof Person && b instanceof Person && a !== b) {
      let foundRelationship = this.relationships.find((relationship) => {
        return (
          (relationship.a === a && relationship.b === b) ||
          (relationship.a === b && relationship.b === a)
        );
      });

      if (!foundRelationship) {
        let newRelationship = new Relationship(a, b);
        this.relationships.push(newRelationship);
      }
    }
  }
  findAllFriends(person) {
    let listFriends = [];
    for (let i = 0; i < this.relationships.length; i++) {
      if (person.name === this.relationships[i].a.name) {
        listFriends.push(this.relationships[i].b);
      }
      if (person.name === this.relationships[i].b.name) {
        listFriends.push(this.relationships[i].a);
      }
    }
    return listFriends;
  }
  findMaleFriends(person) {
    let listFriends = this.findAllFriends(person);
    let listMaleFriends = [];
    for (let i = 0; i < listFriends.length; i++) {
      if (listFriends[i] instanceof Boy) {
        listMaleFriends.push(listFriends[i]);
      }
    }
    return listMaleFriends;
  }
  findFemaleFriends(person) {
    let listFriends = this.findAllFriends(person);
    let listFemaleFriends = [];
    for (let i = 0; i < listFriends.length; i++) {
      if (listFriends[i] instanceof Girl) {
        listFemaleFriends.push(listFriends[i]);
      }
    }
    return listFemaleFriends;
  }
  findFemaleOver5(person) {
    let listFriends = this.findAllFriends(person);
    let listFemaleOver5 = [];
    for (let i = 0; i < listFriends.length; i++) {
      if (listFriends[i] instanceof Girl && listFriends[i].beauty > 5) {
        listFemaleOver5.push(listFriends[i]);
      }
    }
    return listFemaleOver5;
  }
}

let A = new Boy("A", 19, 4);
let B = new Girl("B", 19, 10);
let C = new Girl("C", 19, 7);
let D = new Boy("D", 19, 9);
let E = new Girl("E", 19, 4);

let myGroup = new Group("Friend Group", "Relationships");

myGroup.addPerson(A);
myGroup.addPerson(B);
myGroup.addPerson(C);
myGroup.addPerson(D);
myGroup.addPerson(E);

myGroup.addRelationships(A, B);
myGroup.addRelationships(A, C);
myGroup.addRelationships(A, D);
myGroup.addRelationships(C, B);
myGroup.addRelationships(C, D);
myGroup.addRelationships(C, E);
myGroup.addRelationships(D, B);
myGroup.addRelationships(D, E);
myGroup.addRelationships(A, D);
myGroup.addRelationships(A, E);

console.log(myGroup);

console.log(myGroup.findAllFriends(A));
console.log(myGroup.findAllFriends(B));
console.log(myGroup.findAllFriends(C));
console.log(myGroup.findAllFriends(D));
console.log(myGroup.findAllFriends(E));

console.log(myGroup.findFemaleFriends(A));
console.log(myGroup.findMaleFriends(B));

console.log(myGroup.findFemaleOver5(A));
console.log(myGroup.findFemaleOver5(D));
