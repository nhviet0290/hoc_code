let ten_tuoi = prompt("Hay cho biet ten, nam sinh cua ban");
let vi_tri_dau_phay = ten_tuoi.indexOf(",");
let ten = ten_tuoi.substr(0,vi_tri_dau_phay);
let tuoi = 2019 - ten_tuoi.substr(vi_tri_dau_phay+1);
console.log(`Ban ten la ${ten}, ${tuoi} tuoi`);
