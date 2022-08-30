
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado () {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao (indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', () => {

    if (cartaoAtual === cartoes.length - 1) {
        cartaoAtual = - 1;
    }

    esconderCartaoSelecionado();
    
    cartaoAtual++;
    mostrarCartao(cartaoAtual);


});

btnVoltar.addEventListener('click', () => {

    if (cartaoAtual === 0) {
        cartaoAtual = 3;
    }

    esconderCartaoSelecionado();
    
    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});