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
let n = 1;
let PI = 3.14;
let listNumber = [1,2,3,4,8,6];
let person = {
    'name': 'Viet',
    'age' : 30
}
function changeText() {
    document.getElementById('test').innerHTML = 'Đây là thẻ p: &lt;p&gt;&lt;/p&gt;';
}

document.getElementById('dataTypeInt').innerHTML = n;

document.getElementById('dataTypeFloat').innerHTML = PI;


for (const tag of document.getElementsByClassName('dataTypeArray')) {
    tag.innerHTML = getArrayString(listNumber);
}
function getArrayString(arr) {
    let result = '<ul>';
    for (const value of arr) {
        result += '<li>' + value + '</li>'
    }
    result += '</ul>';
    return result;
}
for (const tag of document.getElementsByClassName('dataTypeObject')) {
    tag.innerHTML = getObject(person);
}
function getObject(object) {
    let s ="";
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            s += value +","
        }
    } 
    return s;
}

function submit() {
    let name = document.getElementById("inputName").value;
    let age = document.getElementById("inputAge").value;
    document.getElementById("welcome").innerHTML = "Name: " + name + "<br/>" +" Age: " + age;
}