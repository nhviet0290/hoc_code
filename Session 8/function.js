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

let sach =[];
let sach1 = {
    tenSach : "sach 1",
    soLuong : 3
}
let sach2 = {
    tenSach : "sach 2",
    soLuong : 5
}
sach.push(sach1);
sach.push(sach2);
let nhap ={
    tenSach : prompt("Nhap ten sach"),
    soLuong : Number(prompt("Nhap so luong"))
}


function themSach(object,array) {
   
    inTenSach(array) ;
    if (sach.indexOf(object.tenSach) <0 ) {
        array.push(object);                     
    } else{
        let i = sach.indexOf(object.tenSach);
        array[i].soLuong += object.soLuong;
        array[i].tongTien = array[i].soLuong * array[i].giaBan;
        console.log( array[i].soLuong);
        
    }
}

function inTenSach(array) {
    let danhSachSach =[];
    for (let index = 0; index <= (array.length -1); index++) {
        danhSachSach[index] = array[index].tenSach;
        
}

}
inTenSach(sach);
console.log(danhSachSach);