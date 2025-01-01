let a = 4;

for(let i = 0; i < a; i++)
{
    if(i % 2 == 0)
    {
        console.log("O O O O");
    }
    else
    {
        console.log("X X X X");
    }
}

let sum = 0;

for (let i = 1; i <= 100; i++)
{
    if(i % 2 == 0)
    {
        sum += i
    }
}

console.log("Summe der geraden Zahlen: " + sum);