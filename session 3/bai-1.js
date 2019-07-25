let ten_tuoi = promt("Hay cho biet ten, tuoi cua ban");
let vi_tri_dau_phay = ten_tuoi.indexOf(",");
console.log(`Ten ban la ${ten_tuoi}.substr(0,${vi_tri_dau_phay}-1)`);
