const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {

    let dateToday = new Date();
    let hr = dateToday.getHours().toString().padStart(2, '0');
    let min = dateToday.getMinutes().toString().padStart(2, '0');
    let seg = dateToday.getSeconds().toString().padStart(2, '0');

    if (hr < 10) gr = '0' + hr;

    if (min < 10) gr = '0' + min;

    if (seg < 10) gr = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})