// Code Structure
console.log("Code Structure:"); alert("Welcome");

console.log("Hello World")
alert("Hello World")


// Variables
var nama = "Dzakiyyah";
const alamat = "Purwokerto";


// Data Types
var semester = 6;
const jurusan = "Sistem Informasi";
var mahasiswa = true;
var boyfriend = null;
var kampus;

let biodata = {
    asal: "Bekasi",
    saudara: 1,
    negara: "Indonesia",
    isMarried: false,
    hobi: ["Membaca", "Travelling"],
};


// Functions
function perkenalan(){
    let umur = 20;
    console.log(`Saya ${nama}. Saya berumur ${umur} tahun. Saya tinggal di ${alamat}`);
}

perkenalan();
console.log(`saya memiliki ${biodata.saudara} saudara dan saya berasal dari ${biodata.asal} yang merupakan salah satu kota di ${biodata.negara}`);