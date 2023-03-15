// if else
let response = prompt("Apakah kamu lolos SIB Arkatama?");
if(response == "ya"){
    alert("Selamat!!");
}else if(response == "tidak"){
    alert("Mohon maaf, silakan mencoba di batch selanjutnya");
}else{
    alert("Silakan mendaftar melalui web kampus merdeka";)
}

// switch
let response = prompt("Program apa yang kamu ikuti?");
switch(response){
    case "FSWD":
        alert("Saya mahasiswa FSWD");
        break;
    case "DM":
        alert("Saya mahasiswa DM");
        break;
    default:
        alert("Saya bukan mahasiswa SIB Arkatama");
        break;
}