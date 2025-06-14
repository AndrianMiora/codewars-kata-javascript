function mergeArrays(arrayOne, arrayTwo) {
    let arrayMerged = arrayOne.concat(arrayTwo); // merges the two arrays together
     let mergingArray = arrayMerged.sort ((a, b) => a - b); // 
     let mergedArrays = [...new Set(mergingArray)];
     return mergedArrays;
 }



 /* ------------------------------------------------ */
 
 function mergeArrays(arr1, arr2) {
    return arr1
      .filter((item) => !arr2.includes(item))
      .concat(arr2)
      .sort((a, b) => a - b)
  }
 
 /* ------------------------------------------------ */

 