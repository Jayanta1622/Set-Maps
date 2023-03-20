function countWords(text) {
    const wordCounts = {};
    const words = text.toLowerCase().split(' ');
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (!wordCounts[word]) {
        wordCounts[word] = 1;
      } else {
        wordCounts[word]++;
      }
    }
    
    return wordCounts;
  }
  console.log(countWords(text));
