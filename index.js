const HTML = {};
HTML.Month = document.getElementById("Month");
HTML.Date = document.getElementById("Date");
HTML.Year = document.getElementById("Year");
HTML.Weekday = document.getElementById("Weekday")



function GetIp(){
    return fetch("https://api.ipify.org/")
        .then(response => response.text());
}

async function GetTime(){
    console.log("Fetching Time...")
    const ip = await GetIp();
    const response = await fetch("https://timeapi.io/api/time/current/ip?ipAddress=" + ip)
    const data = await response.json();
    console.log(data);
    return data;
}

async function LoadValues(){
    const data = await GetTime();
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    HTML.Month.innerHTML = months[data.month - 1];
    HTML.Date.innerHTML = data.day;
    HTML.Year.innerHTML = data.year;
    HTML.Weekday.innerHTML = data.dayOfWeek;
}

LoadValues()