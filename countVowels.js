function countVowels(str) {
    let vowels = str.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
}

console.log(countVowels("hello world")); //  3
