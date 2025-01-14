import { resolve } from "path";
import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            
        });
    });
};

console.log("Selktieren Sie die gewünschte Funktion:");
console.log(" 1. Einzahlen");
console.log(" 2. Abheben");
console.log(" 3. Kontostand");
console.log(" 4. Ende");

let input = 0;
let Betrag = 0;

do{
    input = await readLineAsync();

    if(input == 1)
    {
        console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:");
        let Einzahlung = Number(await readLineAsync());
        console.log("Sie haben " + Einzahlung + " Euro eingezahlt!");
        Betrag = Betrag + Einzahlung;
    }

    if(input == 2)
    {
        console.log("Wie viel würden Sie gerne abheben?");
        let Auszahlung = Number(await readLineAsync());
        console.log("Sie haben " + Auszahlung + " Euro abgehoben!");
        Betrag = Betrag - Auszahlung;
    }

    if(input == 3)
    {
        console.log("Der Kontostand beträgt: " + Betrag + " Euro");
    }

}while(input != 4);



readline.close();