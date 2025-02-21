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
    let position = 1;

    data.forEach(element => {
        html += "<div class='flex m-10 border items-center'>";
        html += "<div class=''>" + position + "." + "</div>";
        html += "<div class='w-20 h-20 ml-20'>" + "<img src='" + element.teamIconUrl + "'>" + "</div>";
        html += "<div class='ml-20'>" + element.teamName + "</div>";
        html += "</div>"
        position++;
    });
    document.getElementById("output").innerHTML=html;
}

loadData();