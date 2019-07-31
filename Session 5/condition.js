// Nhap 2 so, chon so lon hon
// let so1 = Number(prompt("Nhap vao 1 so bat ky"));
// let so2 = Number(prompt("Nhap vao 1 so bat ky"))
// if (so1 > so2) {
//     console.log(`so lon hon la ${so1}`);
// }

// if (so1 < so2) {
//     console.log(`so lon hon la ${so2}`);
// }

// if (so1 == so2) {
//     console.log(`Hai so bang nhau`);
// }

// let so1 = Number(prompt("Nhap vao 1 so bat ky"));
// let so2 = Number(prompt("Nhap vao 1 so bat ky"));
// if (so1 > so2) {
//     console.log(`so lon hon la ${so1}`);
// }

// else if (so1 < so2) {
//     console.log(`so lon hon la ${so2}`);
// }

// else {
//     console.log(`Hai so bang nhau`);
// }

// // Nhap thang sinh => mua
// let thang = Number(prompt("Nhap 1 thang bat ky"));
// if (thang >= 1 && thang <= 3) {
//     console.log("Ban sinh vao mua xuan");
// }
// else if (thang <= 6) {
//     console.log("Ban sinh vao mua he");
// }
// else if (thang <= 9) {
//     console.log("Ban sinh vao mua thu");
// }
// else if (thang <= 12) {
//     console.log("Ban sinh vao mua dong");
// }
// else {
//     console.log("Vui long nhap vao thang tu 1 den 12");
    
// }
// Nhap a, b , tim nghiem x cho phuong trinh 
let a = Number(prompt("Nhap a: "));
let b = Number(prompt("Nhap b: "));
let x;
if (a == 0 ) {
    if (b == 0) {
        console.log("Phuong trinh co vo so nghiem");
        
    }
    else {
        console.log("Phuong trinh vo nghiem");
        
    }
    else {
        x = -b/a
        console.log(x);
        
    }