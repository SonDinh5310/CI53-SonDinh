import Person from "./person.js";
import Relationship from "./relationship.js";

export default class Group {
  name;
  people;
  relationships;
  constructor(_name) {
    this.name = _name;
    this.people = [];
    this.relationships = [];
  }

  addPerson(person) {
    if (person instanceof Person) {
      this.people.push(person);
    }
  }

  addRelationship(p1, p2) {
    if (p1 instanceof Person && p2 instanceof Person && p1 !== p2) {
      let foundRelationship = this.relationships.find((relationship) => {
        return (
          (relationship.a === p1 && relationship.b === p2) ||
          (relationship.a === p2 && relationship.b === p1)
        );
      });
    }
    if (!foundRelationship) {
      this.relationships.push(new Relationship(p1, p2));
    }
  }
  findFriends(person) {
    if (person instanceof Person) {
      let friends = [];

      for (let relationship of this.relationships) {
        if (relationship.a === person) {
          friends.push(relationship.b);
        }
        if (relationship.b === person) {
          friends.push(relationship.a);
        }
      }
    }
  }
  findBoyFriends(Person) {
    let friends = this.findFriends(person);

    return friends.filter((friend) => {
      return friend instanceof Boy;
    });
  }
}
