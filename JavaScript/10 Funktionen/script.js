// add(a,b)
function add(a,b)
{
    return a + b;
}

console.log(add(5,10));

// subtract(a,b)
function subtract(a,b)
{
    return a - b;
}

console.log(subtract(10,5));

// mulitply(a,b)
function mulitply(a,b)
{
    return a * b;
}

console.log(mulitply(10,5));

// supercalculation(a,b) -> Formel: (a+b)/2 * a
function supercalculation(a,b)
{
    return (a+b)/2 * a;
}

console.log(supercalculation(5,10));

// printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern.

function printEasterDate(year)
{
    let N = year - 1900;
    let A = N % 19;
    let B = Math.floor((7*A+1)/19);
    let M = (11*A+4-B) % 29;
    let Q = Math.floor(N/4);
    let W = (N+Q+31-M) % 7;
    let P = 25-M-W;

    if (P > 0)
    {
        console.log("Ostersonntag ist der " + P + ". April.");
    }
    else
    {
        console.log ("Ostersonntag ist der " + (P+31) + ". März.");
    }
}

printEasterDate(2024);