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

    data.forEach(element => {
        html += "<div>" + "<img src='" + element.teamIconUrl + "'>" + element.teamName + element.points + "</div>";
    });
    document.getElementById("output").innerHTML=html;
}

loadData();