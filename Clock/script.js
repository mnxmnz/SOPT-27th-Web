function digitalClock() {
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");

    let h = new Date().getHours();
    let m = new Date().getMinutes();

    hours.innerHTML = h;
    minutes.innerHTML = m;
}

setInterval(() => {
    digitalClock();
});
