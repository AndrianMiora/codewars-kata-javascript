function countZeros(number) {
    // count zeros from 1 to N
      let counter = 0;
  
      for (let index = 1; index <= number; index++) {
      counter += (index.toString().split('0').length - 1)
      }
      return counter;
          
  }

  