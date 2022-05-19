const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours().toString()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const test = `${hours}:${minutes}:${seconds}`;
    clock.innerText = test;
}

setInterval(getClock, 1000);