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

class SubjectClass {
  classID;
  subjectName;
  lecturersList;
  studentsList;
  constructor(_classID, _subjectName, _lecturersList, _studentsList) {
    this.classID = uuid.v4();
    this.subjectName = _subjectName;
    this.lecturersList = [];
    this.studentsList = [];
  }

  addStudent(person) {
    if (person instanceof Person && person !== Lecturer) {
      this.studentsList.push(person);
    }
  }
  addLecturer(person) {
    if (person instanceof Person && person !== Lecturer) {
      this.lecturersList.push(person);
    }
  }
}
