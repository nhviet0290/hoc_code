// let array1 = [1,2,3,4,5,6];
// for (let index = 0; index < array1.length; index++) {
//     const element = array1[index];
//     console.log(element);
// }
// console.log(array1[50]);

// array1[0] = 7;
// console.log(array1[0]);

// let person = ["Pham Van A", "Ha Noi", 19, ["HTML", "JS"]];
// for (let index = 0; index < person.length; index++) {
//     console.log(person[index]);
    
    
// }
// person[2] += 1;
// console.log(person[2]);
// console.log(person);
// console.log("==========================");

// person.push("Dai hoc quoc gia Ha Noi");
// person.unshift("B", "C");
// let new_lenght = person.length;
// for (let index = 0; index < person.length; index++) {
//         console.log(person[index]);
        
        
//     }
// console.log(new_lenght);
// console.log("==========================");

// person[10] = "ABC";

// for (let index = 0; index < person.length; index++) {
//     console.log(person[index]);
    
    
// }
// console.log(person.length);

// let socanh = Number(prompt("Nhap so canh:"));
// let chieudai=[];
// let chuvi = 0;
// for (let index = 0; index < socanh; index++) {
//     chieudai.push(Number(prompt("Nhap do dai canh " + (index +1))));
//     chuvi += chieudai[index];
// }
// console.log(chuvi);

// for (let index = 0; index < chieudai.length; index++) {
//     chuvi += chieudai[index];
    
// }
// console.log(chuvi);
//xoa khoi array
// let array2 = [2,3,4,5,6];
// delete array2[3];
// array2.pop(); //xoa o cuoi cung
// array2.shift(); // xoa o dau tien
let menu = "Menu: \n" +
            "1. Danh sach sach trong thu vien\n" +
            "2. Them sach\n" +
            "3. Doi ten sach\n" +
            "4. Xoa sach\n" +
            "5. Thoat";
let isExit = false;
while (condition) {
    console.log(menu);
    let chon = prompt("Chon Menu")
    switch (chon) {
        case 1:
            alert("1")    
            break;
        case 2:
            alert("2")    
            break;
        case 3:
            alert("3")    
            break;
        case 4:
            alert("4")    
            break;
        case 5:
            alert("Cam on cac ban")    
            break;    
        default:
            alert("Nhap lai menu")
            break;
    }
if(isExit){
    break;
    }
}