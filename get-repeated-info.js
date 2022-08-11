let input = prompt("Please Enter your number : ");
let my_object = {};
let result;
let value = "";
export function getRepeatedInfo(input) {
  for (let index = 0; index < input.length; index++) {
    if (my_object.hasOwnProperty(input[index])) {
      value = my_object[parseInt(input[index])];
      for (let j = 0; j < parseInt(input[index]); j++) {
        value += input[index];
      }
      my_object[parseInt(input[index])] = value;
    } else {
      for (let i = 0; i < parseInt(input[index]); i++) {
        value += input[index];
      }
      my_object[parseInt(input[index])] = value;
    }
    value = "";
  }
  return my_object;
}
console.log(getRepeatedInfo(input));
