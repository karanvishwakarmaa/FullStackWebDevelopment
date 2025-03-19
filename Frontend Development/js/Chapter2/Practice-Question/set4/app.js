let firstnumber = prompt("Enter first number");
let secondnumber = prompt("Enter second number");
let thirdnumber = prompt("Enter third number");

if (firstnumber > secondnumber && firstnumber > thirdnumber) {
  console.log("The largest number is: ", firstnumber);
} else if (secondnumber > firstnumber && secondnumber > thirdnumber) {
  console.log("The largest number is: ", secondnumber);
} else {
  console.log("The largest number is: ", thirdnumber);
}
