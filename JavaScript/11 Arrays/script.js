//Aufgabe 1
let arr = [4,1,2,3];
let sum = 0;

arr.push(17);
arr.push(199);

for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

for(let i = 0; i < arr.length; i++)
{
    sum = sum + arr[i];
}

console.log("Summme: " + sum);

console.log ("Mittelwert: " + sum/arr.length);

//Aufgabe 2

arr = ["Susi","Paula","Hans"]
console.log("Meine Freunde sind " + arr[0] + ", " + arr[1] + " und " + arr[2]);

arr.push("Sepp");
console.log("Meine Freunde sind " + arr[0] + ", " + arr[1] + ", " + arr[2] + " und " + arr[3]);