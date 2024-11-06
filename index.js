class Formatter {
// add static methods here

  // Capitalizes the first letter of a string
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Removes non-alphanumeric characters except dash, single quote, and space
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Capitalizes important words in a sentence and always capitalizes the first word
  static titleize(sentence) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return sentence.split(' ').map((word, index) => {
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return this.capitalize(word);
      } else {
        return word;
      }
    }).join(' ');
  }
}
