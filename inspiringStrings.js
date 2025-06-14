function longestWord(stringOfWords) {
    // Give me back the longest word!
        const words = stringOfWords.split(' '); 
      let theLongestWord = ''; 
  
      words.forEach((word) => {
          
          if (word.length >= theLongestWord.length) {
              theLongestWord = word;
          }
      });
  
      return theLongestWord;
  }