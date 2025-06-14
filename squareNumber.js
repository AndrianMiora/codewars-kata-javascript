function squareNumber(number=0) {
  const numToString = number.toString();
  const splittedString = numToString.split("");
    return +(splittedString.map((element) => element ** 2).join(""));
} 


console.log(squareNumber("44"));
// number = 123 => 149