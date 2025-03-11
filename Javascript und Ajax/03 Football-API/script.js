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
    let html = "<div id='table' >";
    let position = 1;

    data.forEach(element => {
        html += "<div data-teamId='  " + element.teamInfoId + "' class='flex items-center mb-10'>";
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
        let selectedTeamId = event.target.getAttribute("data-teamId");
        console.log("selectedTeamId", selectedTeamId);
        lastgame(selectedTeamId);
    });
}

function lastgame(teamId){
    console.log("inside get next match");
    const url =`https://api.openligadb.de/getlastmatchbyleagueteam/4608/${teamId}`
    fetch(url)
    .then((response) => response.json())
    .then((json) =>{
        console.log(json);
        let html = "<div id='lastgame'>";
        html += "<div class='text-2xl mb-3'>Letztes Spiel in der Saison 2023/2024</div>"
        html += `<div class=''>${json.team1.teamName} Vs ${json.team2.teamName}</div>`;
        html += "</div>";
        document.getElementById("lastgame").innerHTML = html;
    });
}

loadData();


