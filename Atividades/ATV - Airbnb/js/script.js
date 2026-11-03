let diaria = 620;
let taxaLimpeza = 120;
let diarias = document.querySelectorAll('.diaria');
let checkIn = document.getElementById('check-in');
let checkOut = document.getElementById('check-out');
let noites = document.getElementById('noites');
let valorDiaria = document.getElementById('valorDiaria');
let valorServico = document.getElementById('valorServico');
let valorTotal = document.getElementById('valorTotal');

diarias.forEach(element => {
    element.innerText = diaria;
});

let hospedes = document.querySelector('select');
hospedes.addEventListener('change', () => {
    let diariaAtualizado = diaria + diaria * (Number(hospedes.value) / 100);
    diarias.forEach(el => el.innerText = diariaAtualizado);

    if (checkIn.value && checkOut.value) {
        let data1 = new Date(checkIn.value);
        let data2 = new Date(checkOut.value);
        let diferenca = data2 - data1;
        let dias = Math.round(diferenca / 86400000);
        if (dias > 0) {
            let valorDiarias = diaria * dias;
            let taxaServico = valorDiarias * 0.15;
            let total = valorDiarias + taxaLimpeza + taxaServico;
    
            noites.innerText = dias;
            valorDiaria.innerText = valorDiarias.toFixed(2);
            valorServico.innerText = taxaServico;
            valorTotal.innerText = total;
        }
    }
});

checkIn.addEventListener('change', () => {
    if (checkIn.value && checkOut.value) {
        let data1 = new Date(checkIn.value);
        let data2 = new Date(checkOut.value);
        let diferenca = data2 - data1;
        let dias = Math.round(diferenca / 86400000);
        if (dias > 0) {
            let valorDiarias = diaria * dias;
            let taxaServico = valorDiarias * 0.15;
            let total = valorDiarias + taxaLimpeza + taxaServico;

            noites.innerText = dias;
            valorDiaria.innerText = valorDiarias.toFixed(2);
            valorServico.innerText = taxaServico;
            valorTotal.innerText = total;
        }
    }
});

checkOut.addEventListener('change', () => {
    if (checkIn.value && checkOut.value) {
        let data1 = new Date(checkIn.value);
        let data2 = new Date(checkOut.value);
        let diferenca = data2 - data1;
        let dias = Math.round(diferenca / 86400000);
        if (dias > 0) {
            let valorDiarias = diaria * dias;
            let taxaServico = valorDiarias * 0.15;
            let total = valorDiarias + taxaLimpeza + taxaServico;

            noites.innerText = dias;
            valorDiaria.innerText = valorDiarias;
            valorServico.innerText = taxaServico.toFixed(2);
            valorTotal.innerText = total;
        }
    }
});