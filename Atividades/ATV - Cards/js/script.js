let botoes = document.querySelectorAll('button');
let cards = document.querySelectorAll('li.card');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', (e) => {
        e.stopPropagation();
        cards.forEach(el => el.classList.remove('active'));
        cards[index].classList.add('active');
    });
});

document.addEventListener('click', () => {
    cards.forEach(el => el.classList.remove('active'));
});