const digitize= (n) => {
    //transforms number into reversed array of digits
    
    return n.toString().split('').reverse().map(Number);
 }
