//Bài 1:
//Khái niệm: Lập trình hướng đối tượng (Object Oriented Programming – OOP)
//là một mẫu hình lập trình dựa trên khái niệm "công nghệ đối tượng",
//mà trong đó, đối tượng chứa đựng các dữ liệu, trên các trường, thường được
//gọi là các thuộc tính; và mã nguồn, được tổ chức thành các phương thức.

//4 tính chất:
//-Tính đóng gói (Encapsulation)
//VD: 1 viên thuốc ta biết nó để làm gì nhưng không biết nó có những thành phần như thế nào
//-Tính kế thừa (Inheritance)
//VD: 2 lớp là Android và IOS
//-Tính đa hình (Polymorphism)
//VD: chó và mèo, đều là động vật nhưng có tập tính khác nhau
//-Tính trừu tượng (Abstraction)
//VD:Bạn chạy xe tay ga thì có hành động là tăng ga để tăng tốc,
//thì chức năng tăng ga là đại diện cho trừu tượng, chúng ta biết là để
//tăng ga nhưng không biết nó thực sự hoạt dộng như thế nào.

//Bài 2:
function primeCheck(num, array) {
  let checkFlag = true;
  if (num < 2) {
    checkFlag = false;
  } else {
    for (let i = 2; i < num - 1; i++) {
      if (num % i === 0) {
        checkFlag = false;
        break;
      }
    }
  }
  if (checkFlag === true) {
    array.push(num);
  }
}

let size = Number(prompt("Ban muon nhap bao nhieu so ?"));
let array = [];

for (let i = 0; i < size; i++) {
  primeCheck(Number(prompt(`Hay nhap so thu ${i + 1}`)), array);
}
console.log("Cac so nguyen to la: \n");
console.log(...array);
