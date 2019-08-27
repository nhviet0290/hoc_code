// let h1 = document.getElementById("test").innerHTML;
// let value = document.getElementById("secondTag").innerHTML;
// // console.log(h1);
// console.log(value);
// // console.log(document);
// let headings = document.getElementsByClassName("heading");
// console.log(headings);
// let secondTag = document.getElementById("secondTag");
// console.dir(secondTag);

// document.getElementById('test').innerHTML = 'Nội dung sinh ra từ JS';
// let n = 1;
// let PI = 3.14;
// let listNumber = [1,2,3,4,8,6];
// let person = {
//     'name': 'Viet',
//     'age' : 30
// }
// function changeText() {
//     document.getElementById('test').innerHTML = 'Đây là thẻ p: &lt;p&gt;&lt;/p&gt;';
// }

// document.getElementById('dataTypeInt').innerHTML = n;

// document.getElementById('dataTypeFloat').innerHTML = PI;


// for (const tag of document.getElementsByClassName('dataTypeArray')) {
//     tag.innerHTML = getArrayString(listNumber);
// }
// function getArrayString(arr) {
//     let result = '<ul>';
//     for (const value of arr) {
//         result += '<li>' + value + '</li>'
//     }
//     result += '</ul>';
//     return result;
// }
// for (const tag of document.getElementsByClassName('dataTypeObject')) {
//     tag.innerHTML = getObject(person);
// }
// function getObject(object) {
//     let s ="";
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             const value = object[key];
//             s += value +","
//         }
//     } 
//     return s;
// }

// function submit() {
//     let name = document.getElementById("inputName").value;
//     let age = document.getElementById("inputAge").value;
//     document.getElementById("welcome").innerHTML = "Name: " + name + "<br/>" +" Age: " + age;
// }
function giaiThuaN() {
    let n = Number(document.getElementById("nhapN").value);
    let i = 1    
    for (let index = 1; index <= n; index++) {
        i *= index;
    }
    document.getElementById("ketQua").innerHTML = "Kết quả là: " + i;

}
function tongN() {
    let n = Number(document.getElementById("nhapN1").value);
    let i = 0;    
    for (let index = 0; index <= n; index++) {
        i += index;
    }
    document.getElementById("ketQua1").innerHTML = "Kết quả là: " + i;
}
function nhapAB() {
    let a = Number(document.getElementById("nhapA").value);
    let b = Number(document.getElementById("nhapB").value);
    let cong = a + b;
    let tru = a - b;
    let nhan = a * b;
    let chia = a / b;
    document.getElementById("cong").innerHTML = a + " + " + b + " = " + cong;
    document.getElementById("tru").innerHTML = a + " - " + b + " = " + tru;
    document.getElementById("nhan").innerHTML = a + " * " + b + " = " + nhan;
    document.getElementById("chia").innerHTML = a + " / " + b + " = " + chia;
}
function giaiPhuongTrinh() {
    let a4 = Number(document.getElementById("nhapA4").value);
    let b4 = Number(document.getElementById("nhapB4").value);
    if (a4 == 0) {
        if (b4==0) {
            document.getElementById("giaiPhuongTrinh").innerHTML = "Phương Trình vô số nghiệm";
        } else {
            document.getElementById("giaiPhuongTrinh").innerHTML = "Phương trình vô nghiệm"
        }
    } else{
        let x = -b4/a4;
        document.getElementById("giaiPhuongTrinh").innerHTML = "Nghiệm phương trình là: x = " + x;
    }
}

function printInfo() {
    let student = {};
    student.name = document.getElementById("name").value;
    student.age = document.getElementById("age").value;
    student.home = document.getElementById("home").value;
    document.getElementById("printInfo").innerHTML = "Tên: " + student.name + "<br>" + "Tuổi: " + student.age + "<br>" + "Quê quán: " + student.home;
}

function localTime() {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let year = d.getFullYear();
    let date = d.getDate();
    let months = ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12",]
    let month = months[d.getMonth()];
    let days = ["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"];
    let day = days[d.getDay()];
    document.getElementById("localTime").innerHTML = "Hôm nay là " + day + " ngày " + date  +" " + month + " năm " + year 
                                                    + " , bây giờ  là " + hour + " giờ " + minute + " phút " + second + " giây"

    
}