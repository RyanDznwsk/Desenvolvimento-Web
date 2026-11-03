let valorCorte = 0.71;
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    let alcool = Number(formData.get('alcool'));
    let gasolina = Number(formData.get('gasolina'));
    let razao = alcool / gasolina;
    let resultado = document.querySelector('div.resultado');
    if (razao <= valorCorte) {
        resultado.classList.remove('alcool', 'gasolina');
        resultado.classList.add('alcool');
        resultado.querySelector('p').innerText = "O preço do álcool está abaixo de 70% do valor da gasolina.";
    } else {
        resultado.classList.remove('alcool', 'gasolina');
        resultado.classList.add('gasolina');
        resultado.querySelector('p').innerText = "O preço do álcool está acima de 70% do valor da gasolina.";
    }
    resultado.querySelector('p.razao').innerText = `Razão álcool/gasolina: ${razao.toFixed(2)}`;
});