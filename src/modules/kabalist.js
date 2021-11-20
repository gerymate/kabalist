
class Kabalist {
  constructor(config) {
    this.config = config;
  }

  sentences(text) {
    return text.split(this.config["sentence separators"]).map((s)=>s.trim());
  }

  words(input) {
    return input.split(this.config["word separators"]);
  }

  all_words(text) {
    return this.sentences(text).map(
      (sentence) => this.words(sentence) 
    )
  }

  scoreWord(word) {
    const scoring_table = this.config["letters"];  
    const chars = Array.from(word.toUpperCase());
    const scoreLetter = (letter) => (scoring_table[letter] || 0);
    const scoreCounter = (previousValue, currentValue) => previousValue + scoreLetter(currentValue);    
    return chars.reduce(scoreCounter, 0);
  }

  scoreEachWord(text) {
    return this.words(text).map(
      (item) => [item, this.scoreWord(item)]
    )
  }

  score(text) {
    sentences = this.sentences();

  }

}

module.exports = Kabalist;


