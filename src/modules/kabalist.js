
class Kabalist {
  constructor(config) {
    this.config = config;
    this.source_text = "";
  }

  setText(text) {
    this.source_text = text;
  }

  getText() {
    return this.source_text;
  }

  sentences() {
    return this.source_text.split(this.config["sentence separators"]).map((s)=>s.trim());
  }

  words(input) {
    return input.split(this.config["word separators"]);
  }

  all_words() {
    return this.sentences().map(
      (sentence) => this.words(sentence) 
    )
  }

  score(word) {
    const scoring_table = this.config["letters"];  
    const chars = Array.from(word.toUpperCase());
    const scoreLetter = (letter) => (scoring_table[letter] || 0);
    const scoreCounter = (previousValue, currentValue) => previousValue + scoreLetter(currentValue);    
    return chars.reduce(scoreCounter, 0);
  }

}

module.exports = Kabalist;


