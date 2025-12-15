const HTML = {};
HTML.month = document.getElementById("Month");
HTML.date = document.getElementById("Date");
HTML.year = document.getElementById("Year");
HTML.weekday = document.getElementById("Weekday")
HTML.time = document.getElementById("Time")
HTML.namnsdag = document.getElementById("Namnsdag")

let d = new Date();
const date = {};
date.day = d.getDay()
date.date = d.getDate()
date.month = d.getMonth()
date.year = d.getFullYear()

async function GetInformationAboutDay(){
    const url = "https://corsproxy.io/?url=https://sholiday.faboul.se/dagar/v2.1/" + date.year + "/" + (date.month + 1) + "/" + date.date;
    try {
        const response = await fetch(url);

        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return await result
    }
    catch (error) {
        console.error(error.message);
    }
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}

function StartTime() {
    const t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    HTML.time.textContent = h + ":" + m + ":" + s;

    setTimeout(StartTime, 1000);
}

async function LoadValues() {
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    HTML.month.textContent = months[date.month];
    HTML.date.textContent = date.date;
    HTML.year.textContent = date.year;
    HTML.weekday.textContent = Days[date.day];

    result = await GetInformationAboutDay();

    HTML.namnsdag.textContent = result.dagar[0].namnsdag.join(", ");

    if(result.dagar[0]["röd dag"] === "Ja"){
    document.getElementById("graysquare").classList.add('bg-red-500');
    document.getElementById("graysquare").classList.remove("bg-gray-300")
    }
}


LoadValues();
