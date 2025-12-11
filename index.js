const HTML = {};
HTML.Month = document.getElementById("Month");
HTML.Date = document.getElementById("Date");
HTML.Year = document.getElementById("Year");
HTML.Weekday = document.getElementById("Weekday")

function LoadValues(){
    const d = new Date();
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Satrday","Sunday"];
    HTML.Month.innerHTML = months[d.getMonth()];
    HTML.Date.innerHTML = d.getDate()
    HTML.Year.innerHTML = d.getFullYear();
    HTML.Weekday.innerHTML = Days[d.getDay()]
}

LoadValues()