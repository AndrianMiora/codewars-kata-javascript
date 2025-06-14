function arrayMadness(arrayOne, arrayTwo) {
    // Ready, get set, GO!!!
      let arrayOneMapped;
      let arrayOneReduced;
      let arrayTwoMapped;
      let arrayTwoReduced;
      let initialValue = 0;
  
      for (let x = 0; x < arrayOne.length; x++) {
          arrayOneMapped = arrayOne.map((x) => x **2);
          arrayOneReduced = arrayOneMapped.reduce((accumulator, currentValue) => accumulator + currentValue,
          initialValue);
      }
      
      for (let y = 0; y < arrayOne.length; y++) {
          arrayTwoMapped = arrayTwo.map((y) => y **3);
          arrayTwoReduced = arrayTwoMapped.reduce((accumulator, currentValue) => accumulator + currentValue,
          initialValue);
      }
  
  
      if (arrayOneReduced > arrayTwoReduced) {
          return true;
      } return false;
  }

   /* ------------------------------------------------ */
   
  // const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 

   /* ------------------------------------------------ */
