const HTML = {};
HTML.Month = document.getElementById("Month");
HTML.Date = document.getElementById("Date");
HTML.Year = document.getElementById("Year");
HTML.Weekday = document.getElementById("Weekday")
HTML.Time = document.getElementById("Time")

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}

function StartTime() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    HTML.Time.textContent = h + ":" + m + ":" + s;

    setTimeout(StartTime, 1000);
}

function LoadValues(){
    const d = new Date();
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Satrday","Sunday"];
    HTML.Month.textContent = months[d.getMonth()];
    HTML.Date.textContent = d.getDate();
    HTML.Year.textContent = d.getFullYear();
    HTML.Weekday.textContent = Days[d.getDay()];

    StartTime();
}



LoadValues()

