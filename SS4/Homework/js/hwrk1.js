class Person {
  name;
  age;
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
}

class Student extends Person {
  studentID;
  academicYear;
  constructor(_name, _age, _academicYear) {
    super(_name, _age);
    // this.studentID = uuid.v4();
    this.studentID = uuid.v4();
    this.academicYear = _academicYear;
  }
}

class Lecturer extends Person {
  lecturerID;
  academicLvl;
  constructor(_name, _age, _academicLvl) {
    super(_name, _age);
    this.lecturerID = uuid.v4();
    this.academicLvl = _academicLvl;
  }
}

class ClassRoom {
  classID;
  subjectName;
  lecturerData;
  studentsList;
  constructor(_subjectName) {
    this.classID = uuid.v4();
    this.subjectName = _subjectName;
    // this.lecturerData = _lecturerData;
    this.studentsList = [];
  }

  addPersonToClass(person) {
    if (!(person instanceof Person)) {
      console.log("Wrong data!");
      return;
    } else if (person instanceof Student) {
      this.studentsList.push(person);
      console.log("Added student to class");
    } else if (person instanceof Lecturer && this.lecturerData === undefined) {
      this.lecturerData = person;
      console.log("Added lecturer to class");
    }
  }
  removePersonFromClass(person) {
    let index = this.studentsList.indexOf(person);
    if (index > -1) {
      this.studentsList.splice(index, 1);
    }
  }
  updatePersonData(person, data) {
    let index = this.studentsList.indexOf(person);
    if (index > -1) {
      for (let prop in data) {
        if (
          person instanceof Person &&
          this.studentsList[index][prop] !== undefined &&
          prop !== "studentID" &&
          prop !== "lecturerID"
        ) {
          this.studentsList[index][prop] = data[prop];
        }
      }
    }
  }
  showPeopleInClass() {
    console.log(this.studentsList);
    console.log(this.lecturerData);
  }
  findStudent(type, value) {
    let result = [];
    if (type === "id") {
      for (let i = 0; i < this.studentsList.length; i++) {
        if (this.studentsList[i].studentID.toString() === value) {
          console.log(this.studentsList[i]);
        }
      }
    }
    if (type === "name") {
      for (let i = 0; i < this.studentsList.length; i++) {
        if (this.studentsList[i].name.toLowerCase() === value.toLowerCase()) {
          result.push(this.studentsList[i]);
        }
      }
      console.log(result);
    }
  }
}

let student1 = new Student("Long", 19, "2020-2024"),
  student2 = new Student("Linh", 19, "2020-2024"),
  student3 = new Student("Lan", 19, "2020-2024"),
  student4 = new Student("Nam", 20, "2020-2024"),
  student5 = new Student("Ninh", 20, "2020-2024"),
  student6 = new Student("Sang", 20, "2020-2024"),
  student7 = new Student("Son", 19, "2020-2024"),
  student8 = new Student("Nguyet", 18, "2020-2024"),
  student9 = new Student("Khang", 18, "2020-2024"),
  student10 = new Student("Nga", 18, "2020-2024"),
  student11 = new Student("Nga", 19, "2020-2024"),
  student12 = new Student("Nga", 20, "2020-2024");

let lecturer1 = new Lecturer("Chi", 34, "Professor"),
  lecturer2 = new Lecturer("Hung", 35, "Professor");

let mathClass = new ClassRoom("Math"),
  ITClass = new ClassRoom("IT");

mathClass.addPersonToClass(student1);
mathClass.addPersonToClass(student2);
mathClass.addPersonToClass(student3);
mathClass.addPersonToClass(student10);
mathClass.addPersonToClass(student11);
mathClass.addPersonToClass(student12);

mathClass.addPersonToClass(lecturer1);

ITClass.addPersonToClass(student4);
ITClass.addPersonToClass(student5);
ITClass.addPersonToClass(student6);
ITClass.addPersonToClass(student10);
ITClass.addPersonToClass(student11);
ITClass.addPersonToClass(student12);

ITClass.addPersonToClass(lecturer2);

mathClass.showPeopleInClass();
ITClass.showPeopleInClass();

mathClass.removePersonFromClass(student2);

mathClass.updatePersonData(student1, { name: "Test Name", age: 10 });

mathClass.findStudent("name", "Nga");
// Để tìm bằng id có thể vào trong console chrome chay
