let btnDropdown1 = document.querySelector('.botao1');
let btnDropdown2 = document.querySelector('.botao2');

btnDropdown1.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    btnDropdown2.classList.remove('active');
    btnDropdown1.classList.toggle('active');
});

btnDropdown2.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    btnDropdown1.classList.remove('active');
    btnDropdown2.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!btnDropdown1.contains(e.target) && !btnDropdown2.contains(e.target)) {
        btnDropdown1.classList.remove('active');
        btnDropdown2.classList.remove('active');
    }
});