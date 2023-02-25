//? BENZİN İSTASYONU

//* 1- Dizel : 24.53
//* 2- Benzin : 22.25
//* 3- LPG : 11.1

let dizel = 24.53;
let benzin = 22.25;
let lpg = 11.1;

let altSatir = "\r\n";

let yakitTuru = Number(prompt(
    "1 - DİZEL" + altSatir +
    "2 - BENZİN" + altSatir +
    "3 - LPG" + altSatir +
    "Yakıt türünü seçiniz !"
))

if (yakitTuru == 1 || yakitTuru == 2 || yakitTuru == 3) {

    let yakitLitresi = Number(prompt("Yüklenecek yakıt litresini giriniz: "));
    let bakiye = Number(prompt("Bakiyenizi giriniz: "));

    if (yakitTuru == 1) {
        let tutar = dizel * yakitLitresi;
        if (bakiye >= tutar) {
            bakiye = bakiye - tutar;
            alert("İşlem başarılı." + altSatir + "Kalan bakiyeniz: " + bakiye);
        } else(
            alert(
                "Bakiye yetersiz." + altSatir +
                "Gerekli olan tutar: " + tutar + altSatir +
                "Bakiyeniz: " + bakiye + altSatir +
                "Eksik tutar: " + (tutar - bakiye)
            )
        )
    } else if (yakitTuru == 2) {
        let tutar = benzin * yakitLitresi;
        if (bakiye >= tutar) {
            bakiye = bakiye - tutar;
            alert("İşlem başarılı." + altSatir + "Kalan bakiyeniz: " + bakiye);
        } else(
            alert(
                "Bakiye yetersiz." + altSatir +
                "Gerekli olan tutar: " + tutar + altSatir +
                "Bakiyeniz: " + bakiye + altSatir +
                "Eksik tutar: " + (tutar - bakiye)
            )
        )
    } else if (yakitTuru == 3) {
        let tutar = lpg * yakitLitresi;
        if (bakiye >= tutar) {
            bakiye = bakiye - tutar;
            alert("İşlem başarılı." + altSatir + "Kalan bakiyeniz: " + bakiye);
        } else(
            alert(
                "Bakiye yetersiz." + altSatir +
                "Gerekli olan tutar: " + tutar + altSatir +
                "Bakiyeniz: " + bakiye + altSatir +
                "Eksik tutar: " + (tutar - bakiye)
            )
        )
    }
} else {
    alert("Geçerli yakıt türü seçin !");
}