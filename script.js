let hourHand = document.getElementById("hour");
let minuteHand = document.getElementById("minute");
let secondHand = document.getElementById("second");

function displayTime() {
    let date = new Date();

    // getting hours ,minutes and second from date//

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * (hh % 12) + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hourHand.style.transform = `rotate(${hRotation}deg)`;
    minuteHand.style.transform = `rotate(${mRotation}deg)`;
    secondHand.style.transform = `rotate(${sRotation}deg)`;

}

displayTime();
setInterval(displayTime,1000);