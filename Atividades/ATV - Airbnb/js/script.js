let valorDiaria = 620;
let diaria = document.querySelectorAll('.diaria');
diaria.forEach(element => {
    element.innerText = valorDiaria;
})
let hospedes = document.querySelector('select');
hospedes.addEventListener('change', () => {
    valorDiariaAtualizado = valorDiaria + valorDiaria * (Number(event.target.value) / 100);
    diaria.forEach(element => {
        element.innerText = valorDiariaAtualizado;
    })
})