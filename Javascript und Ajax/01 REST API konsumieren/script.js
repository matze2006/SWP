document.getElementById("load").addEventListener("click",function(){
    fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
        result.json().then((data)=>{
            getHTMLForTodos(data);
        })
    })
})

function getHTMLForTodos(data){
    let html = "<url>";
    data.forEach(todo => {
        html += "<li>" + todo.title + "</li>";
    });
    html += "</url>";
    document.getElementById("content").innerHTML = html;
}