let toDoList = [];
let countSTT = 0;
function keyPress(event) {
    if (event.keyCode == 13) {
        countSTT += 1
        let table = document.getElementById("data");
        let row = table.insertRow(-1);
        let stt = row.insertCell(0);
        stt.innerHTML = countSTT;
        let content = row.insertCell(-1);
        content.innerHTML = document.getElementById("addList").value;
        let btn = row.insertCell(-1);
        let button = document.createElement("button");
        button.innerHTML = "Done"
        button.addEventListener('click' , function doneJob() {
            button.classList.add('hidden');
            btn.innerHTML = "Đã Xong"
        })
        btn.appendChild(button);
        let deleteData = row.insertCell(-1);
        let buttonDel = document.createElement("button");
        buttonDel.innerHTML = "Xóa";
        buttonDel.addEventListener('click', function delData() {
            let i = Number(buttonDel.parentNode.parentNode.childNodes[0].childNodes[0].data);
            buttonDel.parentNode.parentNode.remove();
            for (let index = i; index < countSTT; index++) {
                document.getElementsByTagName("tr")[index].children[0].childNodes[0].data -=1;
            }
            countSTT -= 1; 
            
        }) 
        deleteData.appendChild(buttonDel);
       }
    }