// function sayHello() {
//     console.log("Hello World");
    
// }
// let ten = function(){
//     console.log("My name is Viet");
    
// };

// for (let index = 0; index < 5; index++) {
//     sayHello();
//     ten();
// }
// console.log(typeof(sayHello));
// console.log(typeof(ten));


// function chanLe(a) {
//     if (a % 2 == 0) {
//         console.log("so chan");
        
//     } else {
//         console.log("So le");
        
//     }
// }
// let number = Number(prompt("Nhap so"))
// chanLe(number);

// function tinhTong(a,b){
//     let sum = a + b;
//     console.log(a);
//     console.log(b);
//     console.log("Tong 2 so la: " + sum);
    
// }

// let x = 10 ;
// let y = 20;
// tinhTong(x, y);
// tinhTong(y, x);

// function sumArray(array){
//     let sum = 0;
//     for (const value of array) {
//         sum += value;
        
//     }
//     console.log(sum);
// }
// let tong = [1,2,30];
// sumArray(tong);
// tinhTong(10);

// function tinhTong4(a, b, c, d){
//     let sum = a + b + c + d;
//     console.log(sum);
    
// }
// let n = 30;
// let m = 20;
// tinhTong4(m,n);

// function inThongTin(object,n) {
//     for (let index = 0; index < n; index++) {
//         for (const key in object) {
//             if (object.hasOwnProperty(key)) {
//                 let value = object[key];
//                 console.log(key + ": " + value);
//             }
//         }
        
//     }   
// }
// let n = Number(prompt("Nhap so lan lap"));
// let person = {
//     name : "Viet",
//     age : 30,
//     que : "Thai Binh",
//     truong : "Thuong Mai"
// }
// inThongTin(person,n);


//findMax
// let a = 1;
// let b = 2;
// let c = 3;
// function findMax(a, b ,c) {
//     console.log(Math.max (a,b,c));
// }

// findMax(a,b,c);

// // //in N!
// function timGiaiThua(a) {
//     let giaiThua = 1;
//     for (let index = 1; index <= a; index++) {
//         giaiThua *= index;
        
//     }
//     console.log(giaiThua);
    
// }
// let n = Number(prompt("Nhap N"));
// timGiaiThua(n);

// //in x mu y

// function xMuY(x, y) {
//     console.log(Math.pow(x,y));
    
// }
// let x = 0;
// let y = 3;
// xMuY(x,y);

//Function in thông tin tung sinh vien tu danh sach
// function inThongtin(array) {
//     for (let index = 0; index < array.length; index++) {
//         let object = array[index];
//         inSinhVien(object);
//     }
// }

// function inSinhVien(object) {
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             print(key + " là: " +object[key]);              
//         }
//     }
// }
// function print(message) {
//     alert(message);
// }
// let danhSachSV =[];
// let sv1 = {
//     name : "Nguyen Van A",
//     class : "10A"
// }
// let sv2 = {
//     name : "Nguyen Van B",
//     class : "10B"
// }
// let sv3 = {
//     name : "Nguyen Van C",
//     class : "10C"
// }
// danhSachSV.push(sv1);
// danhSachSV.push(sv2);
// danhSachSV.push(sv3);

// inThongtin(danhSachSV)

// let sach =[];
// let sach1 = {
//     tenSach : "sach 1",
//     soLuong : 3
// }
// let sach2 = {
//     tenSach : "sach 2",
//     soLuong : 5
// }
// sach.push(sach1);
// sach.push(sach2);
// let nhap ={
//     tenSach : prompt("Nhap ten sach"),
//     soLuong : Number(prompt("Nhap so luong"))
// }

//nhap 2 so a,b 
// function tinhTong(a, b) {
//     return a + b;
// }

// alert(tinhTong(5,10));

// function soNguyenTo(a) {
//     let count = 0;
//     for (let index = 1; index < a; index++) {
//         if(a % index == 0){
//             count++
//         }
//         if (count >2) {
//             return false;
//         } 
//         }
//         return true;
//     }

// let ketQua = soNguyenTo(10);
// if (ketQua){
//     console.log("là so nguyen to");
    
// }else{
//     console.log("k la so nguyen to");
    
// }

// function timUoc(n) {
//     let danhSachUoc =[];
//     for (let index = 1; index <= n; index++) {
//         if (n % index == 0) {
//             danhSachUoc.push(index);
//         }
        
//     } return danhSachUoc;   
// }

// let show = timUoc(100);
// console.log(show);

let listBook = [
    {
        'name': "sach 1",
        amount:10,
        price: 20000
    },
    {
        'name': "sach 2",
        amount:20,
        price: 59000
    },
    {
        'name': "sach 3",
        amount:50,
        price: 30000
    },
    {
        'name': "sach 34",
        amount:100,
        price: 99000
    }
]

// let listNumber = [12,8,3,5,4,7,2,6,9];
// listNumber.sort(function(a,b){return a-b})
// console.log(listNumber);
// listBook.sort(function(b, a){
//     return a.price - b.price;
// })
// console.log(listBook);
// listBook.sort(function(a,b){
//     return a.amount - b.amount;
// })
// console.log(listBook);

// function sortAmountAsc(a,b) {
//     return a - b;
// }
// listBook.sort(sortAmountAsc);
// console.log(listBook);
// function sortAmountDesc(b,a) {
//     return a - b;
// }
// listBook.sort(sortAmountDesc);
// console.log(listBook);

// function filterBook(arr) {
//     return arr.amount >= 12;
// }
// let newArr = listBook.filter(filterBook);
// console.log(newArr);

// function filterBetween(arr) {
//     return arr.amount > 12 && arr.amount <70;
// }
// let newArr1 = listBook.filter(filterBetween);
// console.log(newArr1);


// function filterSum(arr) {
//     return arr.amount * arr.price <=300000 ;
// }
// let newArr2 = listBook.filter(filterSum);
// console.log(newArr2);

let findName = prompt("Nhap ten can tim: ")
function filterBook3(arr) {
    let result = arr.name.toUpperCase().indexOf(findName.toUpperCase());
    return result  >= 0;
}
let newArr3 = listBook.filter(filterBook3);
console.log(newArr3);

// let n = Number(prompt("Nhap so: "));
// function giaiThua(n) {
//     if(n==0){
//         return 1;
//     }
//     return n * giaiThua(n-1);
// }
// let ketQua = giaiThua(n);
// console.log(ketQua);

// let x = Number(prompt("Nhap so x: "));
// let y = Number(prompt("Nhap so y: "));
// function xMuY(x,y) {
//     if(y==0){
//         return 1;
//     }
//     return x * xMuY(x,y-1);
// }
// let ketQua1 = xMuY(x,y);
// console.log(ketQua1);

function sortArr(a,b){
    return a.amount - b.amount;
}

let newList = listBook.sort(sortArr);
console.log(newList);
