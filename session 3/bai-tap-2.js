let dai_rong = prompt("Nhap chieu dai va rong cua hinh chu nhat");
let dai = dai_rong.split(",",0);
let rong = dai_rong.split(",",1);
let chu_vi = 2 * (dai + rong);
let dien_tich = dai * rong;
console.log(dai);

console.log(`Hinh chu nhat có chieu dai ${dai}, chieu rong ${rong}, có chu vi va dien tich la ${chu_vi}, ${dien_tich}`);
