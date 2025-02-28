//Tabelle
const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
        })
    })
}

const fillTable = (data) => {
    let html = "";
    let position = 1;

    html += "<div id='table'>"

    data.forEach(element => {
        html += "<div id='" + element.teamInfoId + "' class='flex border items-center mb-10'>";
        html += "<div class='ml-10'>" + position + "." + "</div>";
        html += "<div class='w-20 h-20 ml-20'>" + "<img src='" + element.teamIconUrl + "'>" + "</div>";
        html += "<div class='ml-20'>" + element.teamName + "</div>";
        html += "</div>"
        position++;
    });
    document.getElementById("output").innerHTML = html;
    html += "</div>"
    
    //Team anzeigen
    document.getElementById("table").addEventListener("click", (event) => {
        alert("clicked");
    });
}

loadData();


