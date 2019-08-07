let menu = "Menu: \n"+
            "1. Danh sách sách trong thư viện\n" +
            "2. Thêm sách\n" + 
            "3. Đổi tên sách\n" + 
            "4. Xóa sách\n" + 
            "5. Thoát";

let message = menu + "\nChọn menu: "
let danhsach=[];
let booklist ="";
while(true){
    let choose = Number(prompt(message));
    let isExit = false;
    switch(choose){
        case 1:
            if (danhsach.length == 0) {
                alert("Hiện tại chưa có cuốn sách nào");
                
            }
            else {
                for (let index = 0; index < danhsach.length; index++) {
                    booklist += danhsach[index] +"\n";
                    
                }
                
                alert("Danh sách sách là: \n" + booklist);
            }
            break;
        case 2:
            let addBook = Number(prompt("Bạn muốn thêm vào mấy cuốn sách"));
            for (let index = 0; index < addBook; index++) {
                let newBook = prompt("Mời bạn nhập tên sách: ");
                danhsach.push(newBook);
                
            }
            break;
        case 3:
            alert("3");
            break;
        case 4:
            alert("4");
            break;
        case 5:
            isExit = true;
            break;
        default:
            alert("Nhập sai rồi, nhập lại.");            
    }
    if(isExit){ 
        break;
    }
}
alert("Cam on ban!");