class Person {
  name;
  age;
  address;
  constructor(_name, _age, _address) {
    // console.log(_name, _age, _address);
    //this la cac doi tuong dang duoc khoi tao
    // console.log(this);
    this.name = _name;
    this.age = _age;
    this.address = _address;
  }
  speak() {
    console.log("Hello World");
  }
  introduce() {
    console.log(
      `Xin chao moi nguoi minh ten la ${this.name}.Minh nam nay ${this.age} tuoi. Que minh o ${this.address}`
    );
  }
}

// let name = "Son";
// let age = 20;
// let address = "HN";

// let person1 = new Person(name, age, address);
// let person2 = new Person("a", 20, "b");

// // person1.name = name;
// // person1.age = age;
// // person1.address = address;

// console.log(person1);

// Hay tao 1 class gom cac tinh chat sau
// Class OldGirlfriend: name, age, address, favorites, hair, weight, height
// Tao 3 Object tu OldGirlfriend

// class OldGirlfriend extends Person {
//   //! Co the ke thua tu 1 class khac nhung khong bao gom constructor
//   //! Tinh ke thua chi ke thua 1 chieu tu cha -> con, khong co 2 chieu
//   //   name;
//   //   age;
//   //   address;
//   favorites;
//   hair;
//   weight;
//   height;
//   constructor(_name, _age, _address, _favorites, _hair, _weight, _height) {
//     // this.name = _name;
//     // this.age = _age;
//     // this.address = _address;
//     //! Van co the su dung duoc bang cach dung super()
//     super(_name, _age, _address);
//     this.favorites = _favorites;
//     this.hair = _hair;
//     this.weight = _weight;
//     this.height = _height;
//   }

//   getMarried() {
//     console.log(`${this.name} gui thiep mung cuoi.`);
//   }
// }

// let ex1 = new OldGirlfriend("Kim", 19, "HN", "music", "long", 45, 155);
// let ex2 = new OldGirlfriend("Tu", 20, "HN", "film", "short", 50, 160);
// let ex3 = new OldGirlfriend("Ngan", 21, "HN", "socer", "mid", 55, 165);

// ex1.speak();
// ex2.introduce();

// console.log(ex1, ex2, ex3);

class Boy extends Person {
  size;
  handsome;
  rich;
  constructor(_name, _age, _address, _size, _handsome, _rich) {
    super(_name, _age, _address);
    this.size = _size;
    this.handsome = _handsome;
    this.rich = _rich;
  }
}

class Girl extends Person {
  size;
  beauty;
  good;
  constructor(_name, _age, _address, _size, _beauty, _good) {
    super(_name, _age, _address);
    this.size = _size;
    this.handsome = _beauty;
    this.rich = _good;
  }
}

class GoodBoy extends Boy {
  tedious;
  constructor(_name, _age, _address, _size, _handsome, _rich, _tedious) {
    super(_name, _age, _address, _size, _handsome, _rich);
    this.tedious = _tedious;
  }
}

class BadBoy extends Boy {
  salty;
  constructor(_name, _age, _address, _size, _handsome, _rich, _salty) {
    super(_name, _age, _address, _size, _handsome, _rich);
    this.salty = _salty;
  }
}

class YellowBoy extends Boy {
  payment;
  constructor(_name, _age, _address, _size, _handsome, _rich, _payment) {
    super(_name, _age, _address, _size, _handsome, _rich);
    this.payment = _payment;
  }
}

let girl1 = new Girl("Linh", 19, "HN", 90, 9, 9);
let goodBoi = new GoodBoy("Long", 19, "HN", 90, 9, 10, 5);
let badBoi = new BadBoy("Anh", 19, "HN", 90, 10, 10, 10);
let yellowBoi = new YellowBoy("Hung", 25, "HN", 90, 8, 8, 100);

console.log(girl1, goodBoi, badBoi, yellowBoi);

class MyMath {
  static sum(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b !== 0) {
      return a / b;
    }
    return false;
  }
}
//! Co tu khoa static dat truoc method -> khong can phai khoi toa object tu class day
//! Ko co tu khoa static -> phai khoi toa object
// let m1 = new MyMath();
console.log(MyMath.sum(1, 2));
console.log(MyMath.subtract(3, 5));
