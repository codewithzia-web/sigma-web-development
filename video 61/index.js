// console.log("this is faulty calculater")
let random = Math.random();
console.log(random);

function askQuestion(message) {
  if (typeof prompt === "function") {
    return prompt(message);
  }

  const readline = require("readline");

  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

(async () => {
  const a = Number(await askQuestion("Enter first number: "));
  const b = await askQuestion("Enter second operator: ");
  const c = Number(await askQuestion("Enter third number: "));

  const object = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*",
  };

  const chosenOperator = random > 0.1 ? b : object[b] || b;
  const result = eval(`${a} ${chosenOperator} ${c}`);

  if (typeof alert === "function") {
    alert(`this for code ${result}`);
  } else {
    console.log(`this for code ${result}`);
  }
})();