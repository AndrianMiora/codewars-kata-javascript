function solution(number){

    let num = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        num += i;
      }
    }
    
    return num;
  
  }

   /* ------------------------------------------------ */

function solution2 (number) {
    if (number <= 0) { // if the number is negative, the standard return would be 0.
      return 0;
    }
  
    const multiples = new Set();
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        multiples.add(i);
      }
    }
  
    let sum = 0;
    for (const multiple of multiples) {
      sum += multiple;
    }
  
    return sum;
}
  
  console.log(solution(1000));