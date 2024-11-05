class Formatter {
  //add static methods here
   
  static capitalize(string){
    return strin.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9]/gi, '');
  }

  static titleize(sentence) {
    const wordsToExclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = sentence.split(' ');

    // Capitalize the first word and all words not in wordsToExclude
    return words
      .map((word, index) => {
        if (index === 0 || !wordsToExclude.includes(word.toLowerCase())) {
          return this.capitalize(word);
        } else {
          return word;
        }
      })
      .join(' ');
  }
}