var texto = document.getElementById('texto');
var contador = document.getElementById('contador');

texto.addEventListener('keyup', function (){
    contador.innerText = texto.value.length;
});
