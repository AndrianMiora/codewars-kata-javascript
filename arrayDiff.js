function arrayDiff(arrayA, arrayB) {
    return arrayA.filter((i) => !arrayB.includes(i));
}

 /* ------------------------------------------------ */

function diffArray(arrayA, arrayB) {
  let arrayC = [];

  for (let x = 0; x < arrayA.length; x++) {
      
      let comparator = arrayA[x];
          
      if (!arrayB.includes(comparator)) {
          arrayC.push(comparator);       
      }
  }
  
  return arrayC;
}