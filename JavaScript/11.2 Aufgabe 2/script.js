let s = "000111000";
let out = "";

for (let i = 0; i < s.length; i++)
{
    if(s[i] == 0)
    {
        out += "1";
    }
    else
    {
        out += "0";
    }
}

console.log(out);