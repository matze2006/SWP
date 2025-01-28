let data = [
    {firstname:"Matteo", lastname:"Kleber", points:100},
    {firstname:"Peter", lastname:"Gsteu", points:90},
    {firstname:"Matthias", lastname:"Hagen", points:80}
];

function loadPeople(){
    let html = "";
    data.forEach((element) => {
        html += "<div>" + element.firstname + " " + element.lastname + " - " + element.points + " Punkte </div>"
    });

    document.getElementById("content").innerHTML = html;
}

loadPeople();

