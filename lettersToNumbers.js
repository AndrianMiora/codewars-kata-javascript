//Input = "The sunset sets at twelve o' clock."
//Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

const alphabetPosition = (text = '') => {
    return text
    .toLowerCase()
    .split('')
    .filter((char) => char >= 'a' && char <= 'z')
    .map((char) => char.charCodeAt(0) - 96)
    .join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

