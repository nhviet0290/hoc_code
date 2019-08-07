let menu = "Menu: \n"+
            "1. Danh sách sách trong thư viện\n" +
            "2. Thêm sách\n" + 
            "3. Đổi tên sách\n" + 
            "4. Xóa sách\n" + 
            "5. Thoát";

let message = menu + "\nChọn menu: "
let listBook=["a","Ba vạn dặm dưới đáy biển","c"];
let showBook ="";

while(true){
    let choose = Number(prompt(message));
    let isExit = false;
    switch(choose){
        case 1:
            if (listBook.length == 0) {
                alert("Hiện tại chưa có cuốn sách nào");
                
            }
            else {
                for (let index = 0; index < listBook.length; index++) {
                    showBook += (index+1) + ". "+ listBook[index] +"\n";
                    
                }
                
                alert("Danh sách sách là: \n" + showBook);
                showBook="";
            }
            break;
        case 2:
            let addBook = Number(prompt("Bạn muốn thêm vào mấy cuốn sách"));
            for (let index = 0; index < addBook; index++) {
                let newBook = prompt("Mời bạn nhập tên sách: ");
                listBook.push(newBook);
                
            }
            break;
        case 3:
            for (let index = 0; index < listBook.length; index++) {
                showBook += (index+1) + ". "+ listBook[index] +"\n";
                
            }
            let sttBook = Number(prompt("Danh sách sách là: \n" +showBook + "Chọn số thứ tự sách bạn muốn sửa tên: " ));
            showBook="";
            while (sttBook < 1 || sttBook > listBook.length) {
                for (let index = 0; index < listBook.length; index++) {
                    showBook += (index+1) + ". "+ listBook[index] +"\n";
                    
                }    
                sttBook = Number(prompt("Danh sách sách là: \n" +showBook + "Bạn đã nhập sai STT sách, mời nhập lại: " ))
                showBook="";

            }
                let bookNew=[];
                bookNew[sttBook -1 ] = prompt("Mời bạn sửa lại tên sách",listBook[sttBook -1]);
                if (listBook[sttBook -1 ] == bookNew[sttBook -1 ] ) {
                    alert("Tên sách không thay đổi gì")
                } else {
                    listBook[sttBook -1 ] = bookNew[sttBook -1 ];
                    alert("Tên sách đã được sửa thành: " + listBook[sttBook -1 ] );
                }              
            break;
        case 4:
            for (let index = 0; index < listBook.length; index++) {
                showBook += (index+1) + ". "+ listBook[index] +"\n";
                
            }
            let sttBookDel = Number(prompt("Danh sách sách là: \n" +showBook + "Chọn số thứ tự sách bạn muốn xóa tên: " ));
            showBook="";
            while (sttBookDel < 1 || sttBookDel > listBook.length) {
                for (let index = 0; index < listBook.length; index++) {
                    showBook += (index+1) + ". "+ listBook[index] +"\n";
                    
                }    
                sttBookDel = Number(prompt("Danh sách sách là: \n" +showBook + "Bạn đã nhập sai STT sách, mời nhập lại: " ))
                showBook="";

            }
            alert("Đã xóa cuốn sách số: " + sttBookDel + " tên là: " + listBook[sttBookDel - 1]);
            listBook.splice(sttBookDel-1,1);
            for (let index = 0; index < listBook.length; index++) {
                showBook += (index+1) + ". "+ listBook[index] +"\n";
                
            }
            alert("Danh sách sách còn lại là: \n" + showBook);
            showBook="";

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