const arrayList = [16, true, "8", 4, 9, "6", 36, false, 49, 9, "HiCoders", "false", 1, 4, "true"];

const numbersArray = []; // boş olarak atanan değerlerin tutulacağı array tanımlıyoruz.

for (const arrNum of arrayList) { // for ile arraylist içerisindeki tüm elemanlara bakıyoruz
    if (typeof arrNum === 'number') {
        numbersArray.push(arrNum); // arrNum ile elde edilen numberları (integer) numbersarraya gönderiyoruz. 
    }
                                   
}

console.log("Yeni Array Listesi =>", numbersArray); // ayırdığımız sayıları görmek için konsola yazdırıyoruz


// numbersarrayin [16, 4, 9, 36, 49, 9, 1, 4]; karekökünü hesaplıyoruz

const arrKareList = [];  // boş olarak atanan değerlerin tutulacağı array tanımlıyoruz.

for (let i = 0; i < numbersArray.length; i++) { // for içerisinde tüm elemanları çeviriyoruz
  const kareNumber = numbersArray[i]; // yeni bir değişken tanımladık
  const kareKati = kareNumber * kareNumber; // karesini alıp push ediyoruz
  arrKareList.push(kareKati);
}

console.log("Yeni Dizinin Karesi =>", arrKareList);

/// oluşan yeni dizimizin (arrKareList) nin karekökünü alıyoruz

const kareKokList = [];

for (let j = 0; j < numbersArray.length; j++) {
  const KokNumber = numbersArray[j];
  const kareKokKati =Math.sqrt(KokNumber); // dizinin karekökünü alıyoruz
   kareKokList.push(kareKokKati);// alınan değerleri push ediyor ve konsolda görüyoruz
  
}

console.log("Yeni Dizinin Kare Kökü =>", kareKokList);

// dizinin en küçük sayısını buluyoruz 

const kucukNumber = Math.min(...numbersArray);

console.log("Yeni Dizinin en küçük Sayısı =>",kucukNumber);

// dizinin en küçük sayısını buluyoruz 
const buyukNumber = Math.max(...numbersArray);

console.log("Yeni Dizinin en büyük Sayısı =>",buyukNumber);

// tüm sayıları topluyoruz

let tumToplam =0; // boş bir değişken tanımladım toplamımı tutacak

for (let k = 0; k < numbersArray.length; k++) { //for ile döngümü sağlıyorum

    tumToplam += numbersArray[k] // toplama işlemimi yapıp konsola yazdırıyorum
          
}
console.log("Yeni Dizinin Bütün Toplamı =>",tumToplam);

//yeni dizinin ortalamasını buluyoruz 

const ortalamaArr = tumToplam / numbersArray.length;

console.log("Yeni Dizinin Ortalaması =>",ortalamaArr);


