// Iteration 1: Names and Input
let hacker1 = "Rafael";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Augusto";
console.log(`The navigator's name is ${hacker2}\n`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.\n`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.\n`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!\n`
  );
}

// Iteration 3: Loops
let driver = "";
for (let i = 0; i < hacker1.length; i++) {
  if (!((i / 2) % 0) && i != 0) {
    driver += " ";
  }
  driver += hacker1[i].toUpperCase();
}
console.log(driver);

let navigatorReverse = "";
for (let i = hacker2.length - 1; i > -1; i--) {
  navigatorReverse += hacker2[i];
}
console.log(navigatorReverse);

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both have the same name?");
}
