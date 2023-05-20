//exemplo intervall

function DisplayTime(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('resultado').textContent = time;
}
const creatClock = setInterval(DisplayTime, 1000);
