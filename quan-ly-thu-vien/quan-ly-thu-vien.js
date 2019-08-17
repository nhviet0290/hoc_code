let menu = "Menu: \n"+
            "1. Danh sách sách trong thư viện\n" +
            "2. Thêm sách\n" + 
            "3. Đổi tên sách\n" + 
            "4. Xóa sách\n" + 
            "5. Mượn sách\n" +
            "6. Thống kê số lượng sách từng loại, tổng gia trị\n" +
            "7. Sắp xếp theo số lượng, theo gia trị, theo tổng giá trị\n" +
            "8. Thoát\n";
let message = menu + "\nChọn menu: "
let listBook=[{tenSach:"sach 1",soLuong:5, giaBan:2, tongTien:10}];
let book={};
let danhSach =[{'name':"sach 1",soLuong:5, giaBan:2, tongTien:10}]


while(true){
    let choose = Number(prompt(message));
    let isExit = false;
    switch(choose){
        case 1:
            printListBook();
            break;
        case 2:
            addNewBook()                            
            break;
        case 3:{
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
        }
        case 4:
            // for (let index = 0; index < listBook.length; index++) {
            //     showBook += (index+1) + ". "+ listBook[index] +"\n";
                
            // }
            // sttBook = Number(prompt("Danh sách sách là: \n" +showBook + "Chọn số thứ tự sách bạn muốn xóa tên: " ));
            //  console.log("a");
                
            // showBook="";
            // while (sttBook < 1 || sttBook > listBook.length) {
            //     for (let index = 0; index < listBook.length; index++) {
            //         showBook += (index+1) + ". "+ listBook[index] +"\n";
                    
            //     }    
            //     sttBook = Number(prompt("Danh sách sách là: \n" +showBook + "Bạn đã nhập sai STT sách, mời nhập lại: " ))
            //     showBook="";

            // }
            // alert("Đã xóa cuốn sách số: " + sttBook + " tên là: " + listBook[sttBook - 1]);
            // listBook.splice(sttBook-1,1);
            // for (let index = 0; index < listBook.length; index++) {
            //     showBook += (index+1) + ". "+ listBook[index] +"\n";
                
            // }
            // alert("Danh sách sách còn lại là: \n" + showBook);
            // showBook="";
                let delBook = prompt("Nhap ten sach can xoa: ");
                inListSach(listBook);
                xoaSach(delBook, danhSach);
            break;
        case 5:
            let muonSach = {
            tenSach : prompt("Nhap ten sach"),
            soLuong : Number(prompt("Nhap so luong sach: ")),
            }
            let nameBook5 =[];
            for (let index = 0; index < listBook.length; index++) {
                nameBook5[index] = listBook[index].tenSach ;   
            }
                                        
            if (nameBook5.indexOf(muonSach.tenSach) >= 0) {
                listBook[nameBook5.indexOf(muonSach.tenSach)].soLuong -= muonSach.soLuong;
                // console.log(listBook[nameBook5.indexOf(muonSach.tenSach)].soLuong); //Tinh ra so luong sach
                if (listBook[nameBook5.indexOf(muonSach.tenSach)].soLuong < 0) {
                    console.log("Không đủ số lượng sách cần mượn");
                    listBook[nameBook5.indexOf(muonSach.tenSach)].soLuong += muonSach.soLuong
                } else {
                    listBook[nameBook5.indexOf(muonSach.tenSach)].tongTien -= muonSach.soLuong * listBook[nameBook5.indexOf(muonSach.tenSach)].giaBan;
                }
            } else {
                alert("Sai ten sach");
                ;
            }            
            nameBook5=[];
            break;
        case 6: 
        let thongKe ="";
        for (let index = 0; index < listBook.length; index++) {
            thongKe += (index + 1) + ". Sách " + listBook[index].tenSach + " số lượng: " +listBook[index].soLuong + " giá bán: " + listBook[index].giaBan + " tổng giá trị: "+ listBook[index].tongTien + "\n" ;   
        }
        console.log(thongKe);
                    
        break;
        case 7:
        //sort theo so luong


            break;        
        case 8:
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

// Bai tap: Quan ly sách : Ten + So luong + gia ban, 
// nếu thêm sách mới, tên trùng +số lượng tăng lên
// Mục 5 :mượn sách + sô lượng mượn => giảm sách
// Mục 6 : Thống kê số lượng sách, giá trị của từng loại, tổng giá trị
// Mục 7: Sắp xếp theo số lượng, theo gia trị, theo tổng giá trị
// Mục 8: Thoát

function printListBook(params) {
    if (danhSach.length == 0) {
        print("Danh sách trống");
        
    }
    else {
        let m = "Danh sách: \n";
        m = 'STT : BookDetail: ';
        for (let index = 0; index < danhSach.length; index++) {
            const book = danhSach[index];
            m += '/n' + `${index +1}: Name: ${book.name}, price: ${book.price}, Amount: ${book.amount}`;
            
        }
        prinpt(m)
    }
}
function prinpt(message) {
    alert(message);
}

function addNewBook() {
    let newBookName = prompt("Nhập tên sách: ");
    let newAmount = Number(prompt("Nhap số lượng sách: "));
    for (let i = 0; i < danhSach.length; i++) {
        const book = danhSach[i];
        if(newBookName.toUpperCase() == book.name.toUpperCase()){
            book.amount += newAmount;
            return;
        }
        
    }
    let newPrice = Number(prompt("Nhập giá sách: "))
    let newBook = getDefauleBook();
    updateBook(newBook, newBookName, newPrice, newAmount);
    danhsach.push(newBook);
}