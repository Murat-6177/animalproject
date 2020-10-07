/*let myAge = 126; //my age */
// yukarıdaki variable ı comment out yaptık çünkü hemen aşağıda prompt ile input almayı deneyeceğiz aşağıda
let myAge= prompt("Yaşınızı giriniz")

let earlyYears  = 2*10.5;  // will change //and we multiplyed with 15  => bir insanın 2 yaşı bir köğein 21 yaşına..


let laterYears = myAge - 2;
console.log(laterYears) // this will also change

laterYears= laterYears*4; //number of dog years  // laterYears *= 4;  => bu şekilde de yazılabilir "*="
console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears; // My age in dog years.

let myName = "Hamza".toLowerCase() // The toLowerCase method returns a string with all lowercase letters
console.log(`My name is ${myName}. I am ${myAge} years old in human years Which is ${myAgeInDogYears} years old in dog years`)
alert(`My name is ${myName}. I am ${myAge} years old in human years Which is ${myAgeInDogYears} years old in dog years`)



//Also dog age to human age

let dogAge = prompt("Now enter dog age to find it in human years:");
let dogAgeInHumanYears = (dogAge - 2 * 10.5) / 4 + 2;

console.log(`Dog is ${dogAge} years old in dog years which is ${dogAgeInHumanYears} years old in human years.`); // Print my statement.
alert(`Dog is ${dogAge} years old in dog years which is ${dogAgeInHumanYears} years old in human years.`); // Print my statement.




/*  "incele bu kodu explanation a bakarak"          

let tortoiseAge = prompt("Now enter tortoise age to find it in human years:");
let firstYearOfHumanYearsFromTortoise = 12;
let laterYearsOfHumanYearsFromTortoise = (tortoiseAge - 1) * 10;
let tortoiseAgeInHumanYears = firstYearOfHumanYearsFromTortoise + laterYearsOfHumanYearsFromTortoise;

console.log(`Tortoise is ${tortoiseAge} years old in tortoise years which is ${tortoiseAgeInHumanYears} years old in human years.`); // Print my statement.
alert(`Tortoise is ${tortoiseAge} years old in tortoise years which is ${tortoiseAgeInHumanYears} years old in human years.`); // Alert my statement.


*/