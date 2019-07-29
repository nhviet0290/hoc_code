
// let nhap = Number(prompt("Nhap so can tinh tu 1 den N"));
// let tong = 0
// for (let index = 0; index < nhap + 1; index++) {
//     tong = tong + index;
    

    
// }
// console.log(tong);


// let so_canh = Number(prompt("Nhap vao so canh cua da giac"));
// let chu_vi = 0;
// for (let index = 0; index < so_canh; index++) {
//     let chieu_dai = Number(prompt(`Chieu dai cua canh so ${index + 1} la:`));
//     chu_vi += chieu_dai;
// }
// console.log(`Chu vi cua da giac la ${chu_vi}`);


// let nhap = Number(prompt("Nhap so can tinh"));
// let tong = 0;
// for (let index = 1; index < nhap + 1; index++) {
//     tong = tong + 1 / index;
    
// } 
// console.log(tong);


// let nhap = Number(prompt("Nhap so can tinh"));
// let tong = 0;
// for (let index = 1; index < nhap + 1; index++) {
//     tong = tong + 1 / (index * (index + 1));
    
// } 
// console.log(tong);

// let index = 0;
// while (index < 3) {
//     console.log(index++);
    
// }

// let pw = prompt("Moi nhap mat khau : ");
// while (pw.length < 8) {
//     pw = prompt("Mat khau chua phai nhieu hon 8 ky tu, vui long nhap lai : ");
// }
// console.log(`Mat khau la ${pw}`);

HOME WORK
B1:
let pw = prompt("Moi nhap mat khau : ");
while (pw.length < 8 ) {
    pw = prompt("Mat khau chua phai nhieu hon 8 ky tu, vui long nhap lai : ");
}
while (pw.indexOf("%") < 0 && pw.indexOf("$") < 0 && pw.indexOf("_") < 0) {
    pw = prompt("Mat khau chua phai chua ky tu %$_, vui long nhap lai : ");
}
console.log(`Mat khau la ${pw}`);

B2
let dai = prompt("Nhap vao chieu dai: ");
let rong = prompt("Nhap vao chieu rong: ");
let ve = "";
for (let index = 0; index < Number(dai); index++) {
    ve = ve + "*";
    
}
for (let index = 0; index < Number(rong); index++) {
       console.log(ve);
}

B3
let dai_canh = prompt("Nhap vao chieu dai: ");
let ve = "";
for (let index = 0; index < Number(dai_canh); index++) {
    ve = ve + "*";
    console.log(ve);
    
}
