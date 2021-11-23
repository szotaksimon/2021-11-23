
let szin="kek";

function szinValtas(){
    let gomb=document.getElementById("gomb");
    if(szin==="kek"){
        szin="zold";
        gomb.classList.add("zold");
        gomb.classList.remove("kek");
    }else{
        szin="kek";
        gomb.classList.add("kek");
        gomb.classList.remove("zold");
    }
    
}
let idozito = null;
function katt(){
    stop();
    //setTimeout(szinValtas,3000)
    idozito = setInterval(szinValtas, 1000);

}

function emailMegvaltozott() {
    let hossz = document.getElementById("email").value.length;
    document.getElementById("emailhossz").innerHTML = hossz;
}

function stop(){
    clearInterval(idozito);
}
function init(){
    document.getElementById("gomb").addEventListener("click",katt);
    document.getElementById("stop").addEventListener("click",stop);
    document.getElementById("email").addEventListener("input", emailMegvaltozott);
}

document.addEventListener("DOMContentLoaded",init)