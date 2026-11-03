let overlay = document.getElementById('popupOverlay');
let botoesInscricao = document.querySelectorAll('a.botao');
let btnFechar = document.getElementById('btnFechar');
let btnCancelar = document.getElementById('btnCancelar');
let btnConfirmar = document.getElementById('btnConfirmar');
let ano = document.getElementById('ano')

ano.addEventListener('input', () => {
    let idade = 2026 - Number(ano.value);
    if (ano.value.length === 4 && idade >= 18) {
        btnConfirmar.style.cursor = "pointer";
        btnConfirmar.removeAttribute('disabled');
    } else {
        btnConfirmar.style.cursor = "not-allowed";
        btnConfirmar.setAttribute('disabled', 'true');
    }
});

botoesInscricao.forEach(botao => {
    botao.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
    });
});

btnFechar.addEventListener('click', () => {
    overlay.setAttribute('hidden', 'true');
    document.body.style.overflow = '';
});

btnCancelar.addEventListener('click', () => {
    window.location = "https://google.com"
});

btnConfirmar.addEventListener('click', () => {
    overlay.setAttribute('hidden', 'true');
    document.body.style.overflow = '';
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.setAttribute('hidden', 'true');
        document.body.style.overflow = '';
    }
});