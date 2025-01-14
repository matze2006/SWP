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

console.log("Enter your name");
let inputOfUser = await readLineAsync();
console.log("Your name is "+ inputOfUser);

readline.close();