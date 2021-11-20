
class Kabalist {
  constructor(config) {
    this.config = config;
  }

  sentences(text) {
    return text
      .split(this.config["sentence separators"])
      .map((s)=>s.trim())
      .filter(sentence => sentence.length > 0);
  }

  words(input) {
    return input.split(this.config["word separators"]);
  }

  all_words(text) {
    return this.sentences(text).map(
      (sentence) => this.words(sentence) 
    )
  }

  scoreText(word) {
    const scoring_table = this.config["letters"];  
    const chars = Array.from(word.toUpperCase());
    const scoreLetter = (letter) => (scoring_table[letter] || 0);
    const scoreCounter = (previousValue, currentValue) => previousValue + scoreLetter(currentValue);    
    return chars.reduce(scoreCounter, 0);
  }

  scoreEachWord(text) {
    return this.words(text).map(
      (item) => [item, this.scoreText(item)]
    )
  }

  scoreEachWordAndWhole(text) {
    return [this.scoreEachWord(text), this.scoreText(text)];
  }

  score(text) {
    const sentences = this.sentences(text);
    return sentences.map(
      (sentence) => this.scoreEachWordAndWhole(sentence)
    );
  }
}

module.exports = Kabalist;


