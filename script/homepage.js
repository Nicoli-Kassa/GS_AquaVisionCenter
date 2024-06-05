// Carrossel de fotos
const imgs = document.querySelector("#img");
const img = document.querySelectorAll("#img img");

let i = 0;

function carrossel(){
    i++;
    if(i > img.length - 1){
        i = 0;
    }

    imgs.style.transform = `translateX(${-i*100}%)`
}

setInterval(carrossel, 3000);   
        