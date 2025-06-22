const getLengthOfMissingArray = (arrayOfArrays) => {

    let missingArrayLength = (arrayOfArrays || []).map((element) => element ? element.length : 0);
    let missingArray = missingArrayLength.sort((a,b) => a - b);
    if (missingArray.includes(0)) return 0
      for (let index = 0; index < missingArray.length; index ++){
        if (missingArray[index] + 1 !== missingArray[index + 1]) return missingArray[index] + 1
      }
      return 0
    }