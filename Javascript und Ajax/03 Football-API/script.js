const loadData = ()=>{
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillTable(data);
        })
    })
}

const fillTable = (data)=>{
    let html = "";
    let position = 0;

    data.forEach(element => {
        html += "<div>" + position + "." + "<img src='" + element.teamIconUrl + "' width='50' height='50'>" + element.teamName + element.points + "</div>";
        position++;
    });
    document.getElementById("output").innerHTML=html;
}

loadData();