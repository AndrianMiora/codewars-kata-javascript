function reverseWords(str) {
    // Go for it
      let splittedSentence = str.split(' '); 
      let reversedWords = splittedSentence.map(word => {
          return word.split('').reverse().join('');
      });
      return reversedWords.join(' ');
  
  }

  // mots inversés