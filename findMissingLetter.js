const findMissingLetter = (array) => {
    let charCode = array.map((element) => element.charCodeAt());
    for (let index = 0; index < charCode.length; index ++){
      if (charCode[index] + 1 !== charCode [index + 1]) return String.fromCharCode(charCode[index] + 1)
    }
  }