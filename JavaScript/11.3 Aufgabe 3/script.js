let input = [-1,1,8,4,5];
let out = 10;

for(let i = 0; i < input.length; i++)
{
    if(Math.abs(input[i]) < out)
    {
        out = input[i];

        if(out < 0 && input.includes(Math.abs(out)))
        {
            out=Math.abs(out)
        }
    }
}

console.log(out);
