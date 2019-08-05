//B1 Nhập vào bán kính hình tròn, in ra chu vi và diện tích hình tròn.
// let bankinh = Number(prompt("Nhap vao ban kinh hinh tron: "));
// let pi = 3.14;
// let chuvi = 2 * bankinh * pi;
// let dientich = bankinh * bankinh * pi;
// console.log("Chu vi hinh tron la: " + chuvi);
// console.log("Dien tich hinh tron la: " + dientich);

//B2 Nhập vào chiều dài và chiều rộng, in ra chu vi và diện tích hình chữ nhật
// let dai = Number(prompt("Nhap vao chieu dai: "));
// let rong = Number(prompt("Nhap vao chieu rong: "));
// let chuvi = 2 * (dai + rong);
// let dientich = dai * rong;
// console.log("Chu vi la: " + chuvi);
// console.log("Dien tich la: " + dientich);

// //B3 
// let x = Number(prompt("Nhap gia tri của x: "));
// let y1 = 4 * (x*x + 10 * x * Math.sqrt(x) + 3 * x + 1 );
// let y2 = (Math.sin(Math.PI * x * x) + Math.sqrt(x*x + 1)) / (Math.exp(2*x) + Math.cos((Math.PI * x) / x))

// console.log(y1);
// console.log(y2);

// //B4
// let sotien = Number(prompt("Nhap so tien can gui: "));
// let to100 = Math.floor(sotien/ 100000);
// let du100 = sotien - to100 * 100000 ;
// let to50 = Math.floor(du100/ 50000);
// let du50 = du100 - to50 * 50000;
// let to20 = Math.floor(du50/ 20000);
// let du20 = du50 - to20 * 20000 ;
// let to10 = Math.floor(du20 / 10000);
// if (du100 > 0 ) {
//     if (du50 > 0) {
//         if (du20 > 0) {
//             console.log("So tien doi thanh :" + to100 + " tờ 100k " + to50 + " tờ 50k " + to20 + " tờ 20k " + to10 + " tờ 10k ");
            
//         } else { 
//             console.log("So tien doi thanh :" + to100 + " tờ 100k " + to50 + " tờ 50k " + to20 + " tờ 20k ");
            
//         }
//     } else {
//         console.log("So tien doi thanh :" + to100 + " tờ 100k " + to50 + " tờ 50k " );
//     }
// } else {
//     console.log("So tien doi thanh :" + to100 + " tờ 100k ");
// }

//SS2+3
// B1
// for (let index = 0; index <= 100; index++) {
//     console.log(index);
    
    
// }

// //B2
// for (let index = 100; index >= 0; index--) {
//     console.log(index);
    
// }
//B3
// for (let index = 1; index <= 100 ; index+= + 2) {
//     console.log(index);
// }
// for (let index = 0; index <= 100 ; index+= + 2) {
//     console.log(index);
// }
//B4
// for (let index = 100; index >= 0; index -= 2) {
//     console.log(index);
// }
// for (let index = 99; index >= 0; index -= 2) {
//     console.log(index);
// }