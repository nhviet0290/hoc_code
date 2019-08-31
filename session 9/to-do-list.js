let toDoList = [];
function keyPress(event) {
    if (event.keyCode == 13) {
        dataToArray();
        let count = toDoList.length;
        let table = document.getElementById("data");
        let row = table.insertRow(-1);
        let stt = row.insertCell(0);
        stt.innerHTML = count;
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
            buttonDel.parentNode.parentNode.classList.add('hidden')
            let i = Number(buttonDel.parentNode.parentNode.children[0].childNodes[0].data);
            console.log(toDoList.length);
            for (let index = i+1; index < toDoList.length+1; index++) {
                let sttAfterdel = Number(document.getElementsByTagName("tr")[index].children[0].childNodes[0].data)
                sttAfterdel  -= 1;
                document.getElementsByTagName("tr")[index].children[0].childNodes[0].data = sttAfterdel;
                
            }
            
        }

        )
        deleteData.appendChild(buttonDel);
       }
    }

function dataToArray() {
    toDoList.push(document.getElementById("addList").value);
}


function deleteData() {

}