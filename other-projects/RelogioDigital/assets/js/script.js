const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    if (hr < 10) {
        horas.textContent = "0" + hr;
    }
    if (min < 10) {
        minutos.textContent = "0" + min;
    }
    if (seg < 10) {
        segundos.textContent = "0" + seg;
    }
    

});