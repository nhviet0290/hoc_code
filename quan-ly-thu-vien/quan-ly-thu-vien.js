let menu = "Menu: \n"+
            "1. Danh sách sách trong thư viện\n" +
            "2. Thêm sách\n" + 
            "3. Update book  sách\n" + 
            "4. Xóa sách\n" + 
            "5. Mượn sách\n" +
            "6. Thống kê số lượng sách từng loại, tổng gia trị\n" +
            "7. Sắp xếp theo số lượng, theo gia trị, theo tổng giá trị\n" +
            "8. Tìm kiếm:\n" +//tìm theo tên , số lượng, lọc theo đơn giá, lọc theo tổng giá trị
            "9. Thoát";
let message = menu + "\nChọn menu: "
let danhSach =[{'name':"sach 1", 'price' :5, 'amount':2}]


while(true){
    let choose = Number(prompt(message));
    let isExit = false;
    switch(choose){
        case 1:
            let listBook = printListBook(danhSach);
            prinpt(listBook)
            break;
        case 2:
            addNewBook()                            
            break;
        case 3:
            newPriceAmount();         
            break;
        
        case 4:
            delBook();
            break;
        case 5:
            borrowBook();
            break;
        case 6: 
            bookStats();
            break;
        case 7:
            sortBook()
            break;        
        case 8:
            findFilter();
            break;
        case 9:
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

function prinpt(message) {
    alert(message);
}

function printListBook(array) {
    if (array.length == 0) {
        print("Danh sách trống");
        
    }
    else {
        let m = "Danh sách: \n";
        m += 'STT : BookDetail: ';
        for (let index = 0; index < array.length; index++) {
            const book = array[index];
            m += <p>`${index +1}: Name: ${book.name}, price: ${book.price}, Amount: ${book.amount}`</p>;
            
        }
        return m;
    } 
}
function showListBook() {
    let listBook = printListBook(danhSach);
    prinpt(listBook);
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
    danhSach.push(newBook);
}

function getDefauleBook() {
    let book = {
        'name' : "",
        'price' : 0,
        'amount' : 0
    }
    return book; 
}

function updateBook(newBook, newBookName, newPrice, newAmount){
    newBook.name = newBookName;
    newBook.price = newPrice;
    newBook.amount = newAmount;
    
}

function newPriceAmount() {
    let listBook = printListBook(danhSach);
    let STT = Number(prompt(listBook + "\n Nhập STT sách cần update: "));
    while (STT <1 || STT > danhSach.length) {
        STT = Number(prompt(listBook + "\n Nhập sai STT, nhập lại: "));
    }
    let book = danhSach[STT-1];
    let updatePrice = Number(prompt("Cap nhat gia moi: "));
    let updateAmount = Number(prompt("Cap nhat so lượng moi: "));
    updateBook(book, book.name, updatePrice, updateAmount);    
}

function delBook() {
    let listBook = printListBook(danhSach);
    let STT = Number(prompt(listBook + "\n Nhập STT sách cần xóa: "));
    while (STT <1 || STT > danhSach.length) {
        STT = Number(prompt(listBook + "\n Nhập sai STT, nhập lại: "));
    }
    danhSach.splice(STT-1,1);
}

function borrowBook() {
    let listBook = printListBook(danhSach);
    let STT = Number(prompt(listBook + "\n Nhập STT sách cần mượn: "));
    while (STT <1 || STT > danhSach.length) {
        STT = Number(prompt(listBook + "\n Nhập sai STT, nhập lại: "));
    }
    let book = danhSach[STT -1];
    let borrowAmount = Number(prompt("Nhap số lượng sách mượn: "));
    while (borrowAmount > book.amount) {
        borrowAmount = Number(prompt("Không đủ sách cho mượn, nhập lại: "));
    }
    book.amount -= borrowAmount;
    updateBook(book, book.name, book.price, book.amount);
}

function bookStats() {
    let listBook = printListBook(danhSach);
    let STT = Number(prompt(listBook + "\n Nhập STT sách cần thống kê: "));
    while (STT <1 || STT > danhSach.length) {
        STT = Number(prompt(listBook + "\n Nhập sai STT, nhập lại: "));
    }
    
    let book = danhSach[STT - 1];
    let stats = "Thống kê sách " + book.name + "\n" 
                + "Số lượng sách: " + book.amount + "\n"
                + "Giá bán: " + book.price + "\n"
                + "Tổng tiền: " + (book.price * book.amount);    
    prinpt(stats);
}

function sortBook() {

    let isExitSearch = false;    
    while (true){
    isExitSearch = false; 
    let listBook = printListBook(danhSach);
    let typeSort = Number(prompt("Chọn cách thức sắp xếp: \n" 
                                    +"1. Số lượng \n"
                                    +"2. Giá trị \n"
                                    +"3. Tổng giá trị"))
    switch (typeSort) {
        case 1:
            let newSortAmount = danhSach.sort(sortAmount);
            console.log(newSortAmount);
            break;
        case 2:
            let newSortPrice = danhSach.sort(sortPrice);
            console.log(newSortPrice);
            break;
        case 3:
            let newSortTotal = danhSach.sort(sortTotal);
            console.log(newSortTotal);
            break;
    
        default:
            isExitSearch = true;
            break;
    }
    if(isExitSearch){
        break;
    }
}
}
function sortAmount(a, b) {
    return a.amount - b.amount;
}

function sortPrice(a, b) {
    return a.price - b.price;
}
function sortTotal(a, b) {
    return a.amount * a.price - b.amount * b.price;
}

//tìm theo tên , số lượng, lọc theo đơn giá, lọc theo tổng giá trị
// var findName;
function findFilter() {
    let isExitFilter = false;
    while (true) {
        isExitFilter = false;
        let sttFind = Number(prompt("1. Tìm theo tên\n"+"2. Lọc theo đơn giá\n" + "3. Lọc theo tổng giá trị"));
        switch (sttFind) {
            case 1:
                let findName = prompt("Nhập tên sách cần tìm: ");
                function filterName(arr) {
                    let listBookName = arr.name.toUpperCase().indexOf(findName.toUpperCase())
                        return listBookName >=0 ;
                }
                let newListFilterName = danhSach.filter(filterName,findName);
                console.log(newListFilterName);
                
                break;
            case 2:
                let filterAmount = Number(prompt("Nhap so: "));
                function filterAmount(arr) {
                    return arr.amount >=filterAmount;
                }
                let newListFilterAmount = danhSach.filter(filterAmount);
                console.log(newListFilterAmount);
                
                break;
            case 3:
                
                break;    
            default:
                isExitFilter = true;
                break;
        }
        if(isExitFilter);
        break;
    }
}



function optionOne() {
    let printListBook(listBook);

}