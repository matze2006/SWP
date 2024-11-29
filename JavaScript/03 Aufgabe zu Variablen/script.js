let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let bananaAverageWeight = 0.34;
let appleAverageWeight = 0.22;

let bananasPerKilo = 1 / bananaAverageWeight;
let applesPerKilo = 1 / appleAverageWeight;

console.log("Anzahl Bananen pro Kilo: " + bananasPerKilo);
console.log("Anzahl Äpfel pro Kilo: " + applesPerKilo);

let pricePerBanana = bananaAverageWeight * bananaPricePerKilo;
let pricePerApple = appleAverageWeight * applePricePerKilo;

console.log("Preis pro Banane: " + pricePerBanana + " €");
console.log("Preis pro Apfel: " + pricePerApple + " €");

let priceFor8Apples = 8 * pricePerApple;

console.log("Preis von 8 Äpfeln: " + priceFor8Apples + " €");

let priceFor17Bananas = 17 * pricePerBanana;

console.log("Preis von 17 Bananen: " + priceFor17Bananas + " €");

let priceFor1TonApples = 1000 * applePricePerKilo;

console.log("Preis von 1 Tonne Äpfel " + priceFor1TonApples + " €");

let priceFor1TonBananas = 1000 * bananaPricePerKilo;

console.log("Preis von 1 Tonne Bananen: " + priceFor1TonBananas + " €");