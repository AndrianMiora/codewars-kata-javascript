//function that returns the first unique character of a string

/*function firstNonRepeatingLetter(s = '') {
    // Add your code here
    let string = s.toLowerCase().split('');
    for (let i = 0; i < string.length; i++){
        for (let j = i + 1; j < string.length; j++){
            if (string[i] == string[j]){
                return true
            } 
        }
       
    }
    return false

}

  function hasDuplicates (array){
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i] == array[j]){
                return true;
            }
        }
    }return false;
}*/

function firstNonRepeatingLetter(s) {
    let string = s.toLowerCase().split('');
    let count = {};
    let result = 0;

    for (let letter in string) {
        count[string[letter]] ? count[string[letter]] += 1 : count[string[letter]] = 1;   
        }
    
    for (let char in count) {
        if (count[char] === 1){
            result = char;
            return s[string.indexOf(result)];
        }
    }
    return '';
}

function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase();
    for(let i = 0; i < str.length; i++) {
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return s[i];
      }
    }
    return "";
  }

function firstNonRepeatingLetter(s) {
    const count = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const lowerChar = char.toLowerCase();
        count[lowerChar] = count[lowerChar] ? count[lowerChar] + 1 : 1;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (count[char.toLowerCase()] === 1) {
            return char; 
        }
    }

    return ''; 
}
    

console.log(firstNonRepeatingLetter('stress')); // t
console.log(firstNonRepeatingLetter('moonmen')); // e
console.log(firstNonRepeatingLetter('a')); // a
console.log(firstNonRepeatingLetter('repeating')); // r
console.log(firstNonRepeatingLetter('lollipopi')); // r
console.log(firstNonRepeatingLetter('introuvable')); // r
