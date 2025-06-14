function validatePIN (pin) {
    //return true or false
  const digits = '0123456789'.split('');
      for (const digit of digits) {
              if (pin.length !== 4 || pin.length !== 6) return false;    
              if (pin.includes(digits[digit])) return true
                else return false  
      }
  }

  const validatePIN2 = (pin) => {
      
}
let digits = '0123456789'.split('')
for (const element of digits) {
   // console.log(Number(element));
    
}