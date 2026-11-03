let taxaJuros = 0.02;
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    let renda = Number(formData.get('renda'));
    let emprestimo = Number(formData.get('emprestimo'));
    let prazo = Number(formData.get('prazo'));
    let prazoAnos = prazo / 12;
    let juros = emprestimo * taxaJuros * prazoAnos;
    let valorTotal = emprestimo + juros
    let parcela = valorTotal / prazo;
    let capacidade = renda * 0.3;
    let mensagem;
    if (parcela > capacidade) {
        mensagem = "Risco de compretimento de renda"
    } else {
        mensagem = "Condição de empréstimo adequada"
    }

    let resultado = document.querySelector('div.resultado');
    resultado.removeAttribute('hidden');
    resultado.querySelector('p').innerText = `O valor de cada parcela é R$:${parcela.toFixed(2)}. ${mensagem}.`
});
