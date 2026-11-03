let diaria = 620;
let taxaLimpeza = 120;
let diarias = document.querySelectorAll('.diaria');
let hospedes = document.querySelector('select');
let checkIn = document.getElementById('check-in');
let checkOut = document.getElementById('check-out');
let noites = document.getElementById('noites');
let valorDiaria = document.getElementById('valorDiaria');
let valorServico = document.getElementById('valorServico');
let valorTotal = document.getElementById('valorTotal');
let cupons = document.getElementById('cupons');
let btnCupons = document.querySelector('div.cupons button')

diarias.forEach(element => {
    element.innerText = diaria;
});

btnCupons.addEventListener('click', () => {


    if (checkIn.value && checkOut.value && dias > 0) {
        let total = (valorDiarias + taxaLimpeza + taxaServico) * cupom;
        valorTotal.innerText = total.toFixed(2);
    }
});

hospedes.addEventListener('change', () => {
    let diariaAtualizada = diaria + diaria * (Number(hospedes.value) / 100);
    diarias.forEach(el => el.innerText = diariaAtualizada);

    if (checkIn.value && checkOut.value) {
        let data1 = new Date(checkIn.value);
        let data2 = new Date(checkOut.value);
        let diferenca = data2 - data1;
        let dias = Math.round(diferenca / 86400000);
        
        if (dias > 0) {
            let valorDiarias = diariaAtualizada * dias; 
            let taxaServico = valorDiarias * 0.15;
            let total = valorDiarias + taxaLimpeza + taxaServico;
    
            noites.innerText = dias;
            valorDiaria.innerText = valorDiarias;
            valorServico.innerText = taxaServico.toFixed(2);
            valorTotal.innerText = total.toFixed(2);
        }
    }
});

checkIn.addEventListener('change', () => {
    let diariaAtualizada = diaria + diaria * (Number(hospedes.value) / 100);

    if (checkIn.value && checkOut.value) {
        let data1 = new Date(checkIn.value);
        let data2 = new Date(checkOut.value);
        let diferenca = data2 - data1;
        let dias = Math.round(diferenca / 86400000);
        
        if (dias > 0) {
            let valorDiarias = diariaAtualizada * dias;
            let taxaServico = valorDiarias * 0.15;
            let total = valorDiarias + taxaLimpeza + taxaServico;

            noites.innerText = dias;
            valorDiaria.innerText = valorDiarias;
            valorServico.innerText = taxaServico.toFixed(2);
            valorTotal.innerText = total.toFixed(2);
        }
    }
});

checkOut.addEventListener('change', () => {
    let diariaAtualizada = diaria + diaria * (Number(hospedes.value) / 100);

    if (checkIn.value && checkOut.value) {
        let data1 = new Date(checkIn.value);
        let data2 = new Date(checkOut.value);
        let diferenca = data2 - data1;
        let dias = Math.round(diferenca / 86400000);
        
        if (dias > 0) {
            let valorDiarias = diariaAtualizada * dias;
            let taxaServico = valorDiarias * 0.15;
            let total = valorDiarias + taxaLimpeza + taxaServico;

            noites.innerText = dias;
            valorDiaria.innerText = valorDiarias;
            valorServico.innerText = taxaServico.toFixed(2);
            valorTotal.innerText = total.toFixed(2);
        }
    }
});