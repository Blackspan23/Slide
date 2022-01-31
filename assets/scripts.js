let totalSlides = document.querySelectorAll('.slide_move_imagem').length;
let tamanhoSlide = 1000;
let comprimento = tamanhoSlide * totalSlides+"px";
let slideAtual = 0;

document.querySelector('.slide_controls').style.width = tamanhoSlide+"px";
document.querySelector('header').style.width = tamanhoSlide+"px";
document.querySelector('.slide_move').style.width = comprimento;

function atualizaTela(){
    let novaMargin = (slideAtual * (-tamanhoSlide) + "px");
    document.querySelector('.slide_move').style.marginLeft = (novaMargin);
}

function next(){
    slideAtual++;
    if(slideAtual> (totalSlides-1)){
        slideAtual = 0;
    }
    atualizaTela();
}
function previous(){
    slideAtual--;
    if(slideAtual<0){
        slideAtual = (totalSlides-1);
    }
    atualizaTela();
}


setInterval(next, 3000);