// e,t person = {
//     'name' : "Viet",
//     'age' : 20,
//     'school' : 'ĐH TM',
//     'hobby' : ['game', 'code', 'JS'],
//     'class' : {
//         'id': 'J4E 41',
//         'name' : 'Javascript'
//     }
// }
// let person_json = `{
//     "name" : "Viet",
//     "age" : 20
// }`
// console.log(person);

// console.log(JSON.stringify(person));
// console.log(JSON.parse(person_json));

fetch('https://api.weather.gov/points/39.7456,-97.0892');


let https = new XMLHttpRequest();
let responseData;
https.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        responseData =JSON.parse(this.responseText);
        console.log(responseData); 
    }
}
https.open('GET','https://api.weather.gov/points/39.7456,-97.0892');
https.send();