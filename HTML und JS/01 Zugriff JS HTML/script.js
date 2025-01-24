document.getElementById("Addieren").addEventListener("click", function(){
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    
    if(isNaN(value1) || isNaN(value2))
    {
        alert("Invalid value");
    }
    else
    {
        const result = parseFloat(value1) + parseFloat(value2);
        document.getElementById("result").innerText = result;
    }
});

document.getElementById("Subtrahieren").addEventListener("click", function(){
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    
    if(isNaN(value1) || isNaN(value2))
    {
        alert("Invalid value");
    }
    else
    {
        const result = parseFloat(value1) - parseFloat(value2);
        document.getElementById("result").innerText = result;
    }
});

document.getElementById("Multiplizieren").addEventListener("click", function(){
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    
    if(isNaN(value1) || isNaN(value2))
    {
        alert("Invalid value");
    }
    else
    {
        const result = parseFloat(value1) * parseFloat(value2);
        document.getElementById("result").innerText = result;
    }
});

document.getElementById("Dividieren").addEventListener("click", function(){
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    
    if(isNaN(value1) || isNaN(value2))
    {
        alert("Invalid value");
    }
    else
    {
        const result = parseFloat(value1) / parseFloat(value2);
        document.getElementById("result").innerText = result;
    }
});