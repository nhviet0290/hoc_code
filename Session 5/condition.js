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
// let a = Number(prompt("Nhap a: "));
// let b = Number(prompt("Nhap b: "));
// let x;
// if (a == 0 ) {
//     if (b == 0) {
//         console.log("Phuong trinh co vo so nghiem");
        
//     }
//     else {
//         console.log("Phuong trinh vo nghiem");
        
//     }
//     else {
//         x = -b/a
//         console.log(x);
        
//     }
// Homework
// let a = Number(prompt("Nhap vao gia tri a: "));
// let b = Number(prompt("Nhap vao gia tri b: "));
// let c = Number(prompt("Nhap vao gia tri c: "));

// if (a == 0) {
//     if (b==0) {
//         if (c==0) {
//             console.log("Phuong trinh vo so nghiem");
            
//         }
//         else{
//             console.log("Phuong trinh vo nghiem");
            
//         }
//     }
//      else {
//          console.log("nghiem x cua phuong trinh la ") + -c/b;
         
//      }
// }
// else{
//     let delta = b*b - 4*a*c;
//     if (delta < 0) {
//         console.log("Phuong trinh vo nghiem");
        
//     }
//     else if (delta == 0) {
//         console.log("Phuong trinh co nghiem x bang: " + -b/(2*a));
//     }
//     else {
//         console.log("Phuong trinh co 2 nghiem la " + ((-b + Math.sqrt(delta))/(2*a)) + " va " + ((-b - Math.sqrt(delta))/(2*a)));

//     }
//     }

//Nhap thang , in ra so ngay
let month = Number(prompt("Nhap thang"));

switch (month) {
    case 1:
    case 3:
    case 5:
    case 8:
    case 10:
    case 12:
        console.log("Thang 1 co 31 ngay");
        
        // break;
    case 2:
        console.log("Thang 2 co 28 ngay");
            
        break;
    case 3:
        console.log("Thang 3 co 31 ngay");
        break;
    default:
        console.log("Nhap sai thang:");
        
}