
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

// 
// let x = prompt("Nhap gia tri x");
// let y = 4 * (x * x + 10 * x * Math.sqrt(x) + 3 * x + 1);
// console.log(y);

// let pw = prompt("Moi nhap mat khau : ");
// while (pw.length < 8) {
//     pw = prompt("Mat khau chua phai nhieu hon 8 ky tu, vui long nhap lai : ");
// }
// while ((Number(pw.indexOf("%")) + Number(pw.indexOf("_")) + Number(pw.indexOf("&"))) < -2) {
//     pw = prompt("Mat khau cthieu ky tu %&_, vui long nhap lai : ");
// }
// console.log(`Mat khau cua ban la ${pw}`);

// B2:
// let dai = prompt("Nhap chieu dai");
// let rong = prompt("Nhap chieu rong");
// let ve = "*";
// let hinhchunhat="";

// for (let index = 1; index < Number(dai); index++) {
//     ve = ve + "*";
// }
// for (let index = 0; index < Number(rong); index++) {
//     hinhchunhat += ve + "\n";
// }

// console.log(hinhchunhat);

// B3
// let canh = prompt("Nhap chieu dai");
// let ve = "";
// let tamgiac="";
// for (let index = 0; index < Number(canh); index++) {
//     ve += "*";
//     tamgiac += ve + "\n"; 
    
// }
// for (let index = 1; index < Number(canh) ; index++) {
//     ve = ve.slice (0,ve.length - 1);
//     tamgiac += ve + "\n";
   
//     }
// console.log(tamgiac);

