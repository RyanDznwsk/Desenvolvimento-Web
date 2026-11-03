document.addEventListener('DOMContentLoaded', () => {
    let overlay = document.getElementById('popupOverlay');
    let botoesInscricao = document.querySelectorAll('a.botao');
    let btnFechar = document.getElementById('btnFechar');
    let btnCancelar = document.getElementById('btnCancelar');
    let btnConfirmar = document.getElementById('btnConfirmar');

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
        overlay.setAttribute('hidden', 'true');
        document.body.style.overflow = '';
    });

    btnConfirmar.addEventListener('click', () => {
        alert("Entrada Confirmada");
        overlay.setAttribute('hidden', 'true');
        document.body.style.overflow = '';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.setAttribute('hidden', 'true');
            document.body.style.overflow = '';
        }
    });
});