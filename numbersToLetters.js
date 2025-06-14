function switcher(numbers){
    const mapping = {
        27: '!',
        28: '?',
        29: ' '
    };

    for (let i = 1; i <= 26; i++) {
        mapping[i] = String.fromCharCode(123 - i);
    }

    return numbers.map(number => mapping[number]).join('');

}
console.log(switcher('1', '2', '3', '4'));


/**
 * 29: ' '
 * 28: '?'
 * 27: '!'
 * 26: 'a'
 * ...
 * 1: 'z'
 */