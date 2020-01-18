var soThuNhat;
var dau="";

function phentoan(id){
    var a=document.getElementById("ketqua").value;
    document.getElementById("ketqua").value = a + id;
}
function phentinh(id){
    soThuNhat=document.getElementById("ketqua").value;
    document.getElementById("ketqua").value="";
    dau=id;
}
function bang(){
    switch(dau)
    {
    case "cong":
        document.getElementById("ketqua").value = parseInt(soThuNhat) + parseInt(document.getElementById("ketqua").value);
        break;
    case "tru":
        document.getElementById("ketqua").value = parseInt(soThuNhat) - parseInt(document.getElementById("ketqua").value);
        break;
    case "nhan":
        document.getElementById("ketqua").value = parseInt(soThuNhat) * parseInt(document.getElementById("ketqua").value);
        break;
    default:
        document.getElementById("ketqua").value = parseInt(soThuNhat) / parseInt(document.getElementById("ketqua").value);

        break;
    }
}
function clr(){
    soThuNhat="";
    dau="";
    document.getElementById("ketqua").value="";
}