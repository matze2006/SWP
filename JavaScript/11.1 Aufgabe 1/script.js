let string = "AACT";

A = 0;
C = 0;
G = 0;
T = 0;

for(let i = 0; i < string.length; i++)
{
    if(string[i] == "A")
    {
        A = A + 1;
    }

    if(string[i] == "C")
    {
        C = C + 1;
    }

    if(string[i] == "G")
    {
        G = G + 1;
    }

    if(string[i] == "T")
    {
        T = T + 1;
    }
}

console.log(A + " " + C + " " + G + " " + T);

