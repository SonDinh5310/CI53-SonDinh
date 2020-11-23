// //Bai 1

// console.log(`
// __________________
// < srsly dude, why? >
//  ------------------
//         \\   ^__^
//          \\  (oo)\\_______
//             (__)\\       )\\/\\
//                 ||----w |
//                 ||     ||
// `);

// //Bai 2: cho mang a = [1,2,3,4,5,6,7,8]. khong su dung vong lap hoac nhung phuong thuc tuong tu nhu vong lap, hay in ra cac phan tu chan
// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("2,4,6,8");

// //Bai 3: cho da vao x nhan gia tri 0 hoac 1. Khong su dung cau dieu kien, in ra man hinh
// //neu x = 0 ->> in ra 1
// //neu x = 1 ->> in ra 0
// let x = parseInt(prompt("hay nhap so: "));
// console.log(1 - x);

//bai 4: cho dau vao x la mot so. Chi su dung switch  ... case, hay in ra man hinh
//neu x = 10, in ra man hinh: A+;
//neu x = 9, in ra man hinh A;
//neu x = 8, in ra man hinh: B+;
//neu x = 7, in ra B
//neu x = 6, in ra C
//neu x = 5, in ra C+

// let x = Number(prompt("Hay nhap so: "));
// switch (x) {
//   case 10:
//     console.log("A+");
//     break;
//   case 9:
//     console.log("A");
//     break;
//   case 8:
//     console.log("B+");
//     break;
//   case 7:
//     console.log("B");
//     break;
//   case 6:
//     console.log("C");
//     break;
//   case 5:
//     console.log("C+");
//     break;
// }

//Bai 5: Cho dau vao x la 1 so. Chi su dung switch ... case, hay in ra man hinh
//neu x > 10, in ra "khong hop le"
//meu 9 <= x <= 10, in ra A+
//neu 8 <= x < 9, in ra A
//neu 7 <= x < 8, in ra B+

// let x = Number(prompt("Hay nhap so: "));
// switch (true) {
//   case x > 10:
//     console.log("Khong hop le");
//     break;
//   case x >= 9 && x <= 10:
//     console.log("A+");
//     break;
//   case x >= 8 && x < 9:
//     console.log("A");
//     break;
//   case x >= 7 && x < 8:
//     console.log("B+");
//     break;
// }

let $no = document.getElementById("no");
let $answers = document.getElementById("answers");
let count = 0;
// them listener
$no.addEventListener("mouseover", function () {
  count++;
  if (count < 5) {
    $answers.classList.toggle("reverse");
  } else {
    $answers.style.display = "none";
  }
});

//ghi de listener
// $no.onmouseover = function () {
//   console.log("Did u just no me ?");
// };

//Bai 1: Tim hieu ve OOP?
//-khai niem
//-4 tinh chat? vi du?

//Bai 2: Nhap 1 mang cac so, hay tim tat ca cac so nguyen to trong mang
