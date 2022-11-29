//1. Calculating the sum

const userInput = process.argv.slice(2);
let result = 0;

for (let i = 1; i < userInput.length; i++) {
  let number = Number(userInput[i]);
  if (isNaN(number)) {
    console.log(
      `Sorry, the argument ${userInput[i]} is not a number, please try again`
    );
    return;
  }
  result = result + number;
}

//Calculating the average
let avg = result / (userInput.length - 1);

if (userInput[0] === `sum`) console.log(result);
else if (userInput[0] === `avg`) console.log(avg);
else {
  console.log(
    'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
  );
}
