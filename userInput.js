console.log("Enter the number to multiply");
process.stdin.on('data',function(data) {

const input = data.toString().trim().split(' ');
const num1 = parseFloat(input[0]);
const num2 = parseFloat(input[1]);

const result = num1*num2;
console.log(`The product of ${num1} and ${num2} is  ${result}`);

process.exit();
});