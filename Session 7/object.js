// let person = {
//     "name" : "Viet",
//     "age" : 30,
//     "home" : "Minh khai",
//     // "name" : "Nam"
// }
// console.log(person);
// // console.dir(person);
// // console.table(person);
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.home);

// person.name = "Quốc";
// console.log(person.name);
// person.age += 1;
// console.log(person.age);


// delete person.name;
// console.log(person);

// person.school = "dai hoc";
// console.log(person);

// let arr = [10,5,2];

// console.log(typeof(arr));
// console.log(typeof(person));
// console.log(arr instanceof Array);
// console.log(person instanceof Array);
// console.log(arr.constructor.toString().indexOf('Array') >= 0);


// Tao 1 SV chua co thon tin
// Yeu cau nguoi dung nhap vao ten, tuoi, que quan cho object;
//Yeu cau nguoi dung nhap danh sach cac mon dang hoc cho SV
let student ={};
student.name = prompt("Nhap ten sinh vien: ");
student.age = Number(prompt("Nhap tuoi sinh vien: "));
student.homeTown = prompt("Nhap que quan sinh vien: ");
let hocPhan = [];
let soMon = Number(prompt("So hoc phan sinh vien phải hoc là: "));
for (let index = 0; index < soMon; index++) {
    hocPhan.push(prompt(" Nhap ten mon hoc so " + (index+1)));
    
}
    student.monhoc = hocPhan;
let danhSachKey="";
for (let key in student) {
    if (student.hasOwnProperty(key)) {
        danhSachKey += key + '/n';
    }
}
console.log(danhSachKey);

let upDate = prompt("Ban muon sua thuoc tinh nao?")
if (student.hasOwnProperty(update)){
    if (upDate == 'age') {
    student[upDate] = Number(prompt("Nhap noi dung thay doi"));    
    }
    student[upDate] = prompt("Nhap noi dung thay doi");
}
else {
    alert("Nhap sai thong tin");
}
let classes = {
    maso : prompt("Nhap ma so lop"),
    tenlop : prompt("Nhap ten lop")
}
student.class = classes;
console.log(student);
for (let index = 0; index < 2; index++) {
    let themMon = prompt("NHap ten mon hoc: ");
    student.monhoc.push(themMon);
    
}

