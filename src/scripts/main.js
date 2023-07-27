document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let randomNumber = Math.random() * numeroMaximo;

        randomNumber = Math.floor(randomNumber + 1);
        document.getElementById('resultado-valor').innerText = randomNumber;
        document.querySelector('.resultado').style.display = 'block';
    })
})