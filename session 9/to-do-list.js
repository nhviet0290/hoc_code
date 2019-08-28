let no = 0;
function keyPress(event) {
    if (event.keyCode == 13) {
        let stt = document.createElement("li");
        document.getElementById("STT").appendChild(stt);
        let content = document.createElement("span");
        content.innerHTML = document.getElementById("addList").value;
        document.getElementById("content").appendChild(content);

}
}