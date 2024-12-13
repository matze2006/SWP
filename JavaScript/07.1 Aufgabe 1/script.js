let eingabe = "1 2 3 4 5 6";
let sum = 0;

eingabe = eingabe.split(" ");

for(let i = 0; i < eingabe.length; i++)
{
    if(parseInt(eingabe[i]) % 2 == 0)
    {
        sum+=parseInt(eingabe[i]);
    }
}

console.log(sum);